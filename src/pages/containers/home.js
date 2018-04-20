import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Grupos from '../../components/grupos';
import Mapa from '../components/mapa';
import './home.css';
import Related from '../components/related';
//import logo from '../../logo.svg';
import HandleError from '../../error/containers/handle-error';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink, TabContent,TabPane,Row, Col, Card, CardTitle, CardText, Button  } from 'reactstrap';
import classnames from 'classnames';

//import Search from '../../widgets/containers/search';
import Search from '../../widgets/components/search';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.grupos = props.data.grupos
        //this.dia = props.dia
        //this.handleOpenModal = props.handleOpenModal

        this.toggle = this.toggle.bind(this);
        
        this.state = {
            activeTab: '1',
            artistaGrupo: ''
        };

        // Toggle the state every second
          // setInterval(() => {
          //   this.setState({ artistaGrupo: this.state.artistaGrupo });
          // }, 1000);
        
    }



  handleSubmit = event => {
    event.preventDefault();
    //console.log(this.input.value, 'submit')

  }

  setInputRef = element => {
    this.input = element;
  }

  handleInputChange = event => {
    //console.log(event.target.value, 'ok')

    this.setState({ artistaGrupo: event.target.value });

    
    // this.setState({
    //   artistaGrupo: event.target.value.toString().toLowerCase()//.replace(' ', ' ')
      
    // })
    // console.log(this.state.value)
  }



    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

  render() {
    return (

<HandleError>
    <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Viernes
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Sábado
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Mapa
            </NavLink>
          </NavItem>
        </Nav>



        <TabContent activeTab={this.state.activeTab}>
          
          
          <TabPane tabId="1">
            <Row>
              <Col sm="12">

              <Search
                    setRef={this.setInputRef}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleInputChange}
                    value={this.state.artistaGrupo}
                  />

              <Grupos
                grupos={this.props.data.grupos}
                dia={this.state.activeTab}
                artistaGrupo={this.state.artistaGrupo}
                />

              </Col>
            </Row>
          </TabPane>


          <TabPane tabId="2">
            <Row>
            <Col sm="12">


                <Search
                    setRef={this.setInputRef}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleInputChange}
                    value={this.state.artistaGrupo}
                  />

              <Grupos
                grupos={this.props.data.grupos}
                dia={this.state.activeTab}
                artistaGrupo={this.state.artistaGrupo}
                />


            
            </Col>
            </Row>
          </TabPane>


          <TabPane tabId="3">
            <Row>
              <Col sm="12">
              
              <Mapa iframe={this.props.iframe} />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
    </div>

</HandleError>







    //   <HandleError>

    //     <HomeLayout>
    //     <Button color="danger" onClick={this.toggle}>Click</Button>

    //       <Related />
          
    //       <Categories
    //         grupos={this.props.data.grupos}
    //         handleOpenModal={this.handleOpenModal}
    //       />

    //         
         
    //     </HomeLayout>
    //   </HandleError>
    )
  }
}

export default Home
