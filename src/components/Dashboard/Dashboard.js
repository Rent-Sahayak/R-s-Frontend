import React, { useContext, useEffect, useRef, useState } from 'react';
import 'antd/dist/antd.css'
import Navbar from '../Navbar/Navbar'
import Sidebar from './Sidebar'
import {FiEdit,FiTrash2} from "react-icons/fi"
import { Table, Space, Tag, Button,Modal,Input,Layout } from 'antd';


import './Dashboard.css'

const { Column, ColumnGroup } = Table;
const { Content,Header,Footer,Sider}= Layout


export default function Dashboard() {
  const [isEditiing,setIsEditing]=useState(false);
  const [isAddProperty,setIsAddProperty]=useState(false)
  const[AddingProperty,setAddingProperty]=useState(null)
  const [editingProperty,setEditingProperty]=useState(null)
  const [dataSource,setDataSource]=useState([
    {
      id:'1',
      title:'Name 1',
      description:'beautiful property',
      features:'1 BHK',
      price:30000,
      images:'',
      reviews:'',
     
    },
    {
      id:'2',
      title:'Name 2',
      description:'beautiful property',
      features:'1 BHK',
      price:60000,
      images:'',
      reviews:'',
      
    },
    {
      id:'3',
      title:'Name 3',
      description:'beautiful property',
      features:'1 BHK',
      price:90000,
      images:'',
     
     
    }
  ])
  const columns=[
    {
      
      key:'1',
      title:'ID',
      dataIndex:"id",
      
    },
    {
      key:'2',
      title:'Property Name',
      dataIndex:"title",
      
    },
    {
      key:'3',
      title:'Property Description',
      dataIndex:"description",
      
    },
    {
      key:'4',
      title:'Property Features',
      dataIndex:"features",
     
    },
    {
      key:'5',
      title:'Price',
      dataIndex:"price",
      
      sorter:(a,b)=>a.price-b.price
    },
    {
      key:'6',
      title:'Images',
      dataIndex:"images",
      
    },
    {
      key:'7',
      title:"Actions",
      render:(record)=>{
        return(
          <>

        <FiEdit onClick={()=>{editProperty(record)}}/>
        <FiTrash2 onClick={()=>{onDeleteProperty(record)}} style={{color:"red",marginLeft:22,marginTop:-14}}/>
       
        </>
        )
      }
    }
  ];
  const onAddProperty=(record)=>{
    setIsAddProperty(true)
    setAddingProperty({...record})
    // const randomNumber=parseInt(Math.random()*1000)
    // const newProperty= {
    //   id:randomNumber,
    //   title:'Name 3' ,
    //   description:'beautiful property',
    //   features:'1 BHK',
    //   price:90000,
    //   images:'',
     
     
    // }
    // setDataSource((pre)=>{
    //   return [...pre,newProperty]
    // })
  }
  const onDeleteProperty=(record)=>{
    Modal.confirm({
      title:"Are you sure,you want to delte this property? ",
      okText:"Yes",
      okType:"danger",
      onOk:()=>{
        setDataSource((pre)=>{
          return pre.filter((property)=>property.id!==record.id)
        })
      }
    })
 

  }
  const editProperty=(record)=>{

    setIsEditing(true);
    setEditingProperty({...record})

  }
  const resetEditing=()=>{
    setIsEditing(false);
    setEditingProperty(null);

  }
  
  return(
    <Layout>
        <Header className=' p-0'><Navbar /></Header>
      <Layout>
      <Sider className='sider'><Sidebar /></Sider>
      <Content className='App-header main'>
        <Button onClick={onAddProperty}>Add a new Property</Button>
        <Table
        dataSource={dataSource}
        columns={columns}
        >

        </Table>
        <Modal title="Edit Property"
        visible={isEditiing}
        okText="Save"
        onCancel={()=>{
          resetEditing()
         
        }}
        onOk={()=>{
          setDataSource(pre=>{
            return pre.map(property=>{
              if(property.id===editingProperty.id){
                return editingProperty
              }
              else{
                return property
              }
            })
          })
          resetEditing()
        }}
        >
          <Input value={editingProperty?.title} onChange={(e)=>{
            setAddingProperty(pre=>{
              return{...pre,title:e.target.value}
            })
          }}/>
          <Input value={editingProperty?.description} onChange={(e)=>{
            setAddingProperty(pre=>{
              return{...pre,description:e.target.value}
            })
          }}/>
          <Input value={editingProperty?.features}onChange={(e)=>{
            setAddingProperty(pre=>{
              return{...pre,features:e.target.value}
            })
          }}/>
          <Input value={editingProperty?.price}onChange={(e)=>{
            setAddingProperty(pre=>{
              return{...pre,price:e.target.value}
            })
          }}/>

        </Modal>
        <Modal title="Add Property"
        visible={isAddProperty}
        okText="Save"
        onCancel={()=>{
          setIsAddProperty(false)
        }}
        onOk={()=>{
          setIsAddProperty(false)
        }}
        >
       

        </Modal>
      </Content>
       
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
  // return (
  //   <div className='App'>
    
  //     
  //     
      // <Content className='App-header main'>
      //   <Button onClick={onAddProperty}>Add a new Property</Button>
      //   <Table
      //   dataSource={dataSource}
      //   columns={columns}
      //   >

      //   </Table>
      //   <Modal title="Edit Property"
      //   visible={isEditiing}
      //   okText="Save"
      //   onCancel={()=>{
      //     setIsEditing(false)
      //   }}
      //   onOk={()=>{
      //     setIsEditing(false)
      //   }}
      //   >
      //     <Input value={editingProperty?.name}/>

      //   </Modal>
      // </Content>
      
      
  //   </div>
  // )
}
