import React, { useState } from 'react';
import './Index.css';
import {Link} from "react-router-dom";
import Navbar from '../Navbar/Navbar';


import { Layout, Avatar, Menu, Breadcrumb, Button } from 'antd';

import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';



const { Header, Footer, Sider, Content } = Layout;

function Index() {
  const [selectedProperties, setSelectedProperties] = useState('');
  const [visible, setVisible] = useState(false);
  const onSelect = name => {
    setSelectedProperties(name);
    setVisible(true);
  }
  const ViewProfileButton = ({name}) => {
    return <Button type='dashed' style={{float:'right'}} onClick={()=>onSelect(name)}> View Full Profile  </Button>
  }

  const onClose = () => setVisible(false);
  return (
    <div className="Index">
      <Layout>
        <Navbar/>
        <Layout className='container'>
          <Sider>
            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
            <Menu.Item key='Dashboard'>
                Dashboard
            </Menu.Item>
            
            <Menu.Item key='Profile'>
                Profile
            </Menu.Item>
            
          
            
              <SubMenu
                title={
                  <span>
                    
                    <span>View Details</span>
                  </span>
                }
              >
                <Menu >
                  <Menu.Item key='location1'>List of rent spaces</Menu.Item>
                  <Menu.Item key='location2'>My Spaces</Menu.Item>
                  
                </Menu>
              </SubMenu>
              <SubMenu
                title={
                  <span>
                    
                    <span>Statistics</span>
                  </span>
                }
              >
                <Menu >
                  <Menu.Item key='location1'>Total spaces booked or sell</Menu.Item>
                  <Menu.Item key='location2'>Total space list</Menu.Item>
                  <Menu.Item key='location2'>View Popularity</Menu.Item>
                  
                </Menu>
              </SubMenu>
            </Menu>
            
          </Sider>

          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              
            </Content>
           
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Index;
