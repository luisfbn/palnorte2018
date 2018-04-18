import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Grupos from '../../components/grupos';
import Mapa from '../components/mapa';

import Related from '../components/related';
//import logo from '../../logo.svg';
import HandleError from '../../error/containers/handle-error';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink, TabContent,TabPane,Row, Col, Card, CardTitle, CardText, Button  } from 'reactstrap';
import classnames from 'classnames';



class Home extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
        
    // console.log("ok")
    // console.log(this.props)
    // console.log("end")
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
              <Grupos
                grupos={this.props.data.grupos}
                dia={'viernes'}
                />
              </Col>
            </Row>
          </TabPane>


          <TabPane tabId="2">
            <Row>
            <Col sm="12">
            <Grupos
                grupos={this.props.data.grupos}
                dia={"sabado"}
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
