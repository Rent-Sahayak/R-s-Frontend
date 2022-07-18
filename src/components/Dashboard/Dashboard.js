import React, { useContext, useEffect, useRef, useState } from 'react';
import 'antd/dist/antd.css';
import { UploadOutlined } from '@ant-design/icons';
import { InputNumber, Select, Upload } from 'antd';
import Navbar from '../Navbar/Navbar'
import Sidebar from './Sidebar'
import { FiEdit, FiTrash2 } from "react-icons/fi"
import { Table, Space, Tag, Button, Modal, Input, Layout, Form } from 'antd';


import './Dashboard.css'
import { apiPostHouse } from '../../ApiService/AuthApi';

const { Column, ColumnGroup } = Table;
const { Content, Header, Footer, Sider } = Layout

export default function Dashboard() {
  const [isEditiing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [images, setImages] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState({
    floors: "",
    bedroom: "",
    bathroom: "",
    parkingSpace: "",
    furnishing: "",
    roadSize: "",
    roadType: "",
    areaSqFeet: ""
  });
  const [price, setPrice] = useState("");


  const [isAddProperty, setIsAddProperty] = useState(false)
  const [AddingProperty, setAddingProperty] = useState(null)
  const [editingProperty, setEditingProperty] = useState(null)
  const [dataSource, setDataSource] = useState([])
  const columns = [

    {
      key: 'title',
      title: 'Property Name',
      dataIndex: "title",
      fixed: 'left',
      width: 90

    },
    {
      key: 'description',
      title: 'Property Description',
      dataIndex: "description",
      fixed: 'left',
      width: 90

    },
    {
      key: 'price',
      title: 'Price',
      dataIndex: "price",
      fixed: 'left',
      width: 80,

      sorter: (a, b) => a.price - b.price
    },
    {
      key: 'images',
      title: 'Images',
      dataIndex: "images",
      width: 90,
      fixed: 'left'

    },
    {
      key: 1,
      title: 'floors',
      dataIndex: "features",
      render: (features) => features.floors,
      width: 90

    },
    {
      key: 2,
      title: 'bathroom',
      dataIndex: "features",
      render: (features) => features.bathroom,
      width: 90

    },
    {
      key: 3,
      title: 'parkingSpace',
      dataIndex: "features",
      render: (features) => features.parkingSpace,
      width: 90,

    },
    {
      key: 4,
      title: 'furnishing',
      dataIndex: "features",
      render: (features) => features.furnishing,
      width: 90,

    },
    {
      key: 5,
      title: 'roadSize',
      dataIndex: "features",
      render: (features) => features.roadSize,
      width: 90,

    },
    {
      key: 6,
      title: 'roadType',
      dataIndex: "features",
      width: 90,
      render: (features) => features.roadType

    },
    {
      key: 7,
      title: 'areaSqFeet',
      dataIndex: "features",
      width: 90,
      render: (features) => features.areaSqFeet

    },

    {
      key: 'actions',
      title: "Actions",
      fixed: 'right',
      width: 90,
      render: (record) => {
        return (
          <>

            <FiEdit onClick={() => { editProperty(record) }} />
            <FiTrash2 onClick={() => { onDeleteProperty(record) }} style={{ color: "red", marginLeft: 22, marginTop: -14 }} />

          </>
        )
      }
    }
  ];
  const handleFormSubmit = (async (values) => {
    try {
      const res = await apiPostHouse(values)
      console.log(res)

    }
    catch (e) {
      console.log(e)

    }
  })
 

  const onAddProperty = (record) => {
    setIsAddProperty(true)
    setAddingProperty({ ...record })


  }
  const resetAdding = () => {
    setIsAddProperty(false);
    setAddingProperty(null);

  }
  const onDeleteProperty = (record) => {
    Modal.confirm({
      title: "Are you sure,you want to delte this property? ",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((property) => property.id !== record.id)
        })
      }
    })


  }
  const editProperty = (record) => {

    setIsEditing(true);
    setEditingProperty({ ...record })

  }
  const resetEditing = () => {
    setIsEditing(false);
    setEditingProperty(null);

  }


  return (
    <Layout>
      <Header className=' p-0'><Navbar /></Header>
      <Layout>
        <Sider className='sider'><Sidebar /></Sider>
        <Content className='App-header main'>
          <Button onClick={onAddProperty}>Add a new Property</Button>
          <Table
            className='table-main'
            dataSource={dataSource}
            columns={columns}


            scroll={{
              x: 1500,
            }}
          >

          </Table>
          <Modal title="Edit Property"
            visible={isEditiing}
            okText="Save"
            onCancel={() => {
              resetEditing()

            }}
            onOk={() => {
              setDataSource((pre) => {
                return pre.map((property) => {
                  if (property.id === editingProperty.id) {
                    return editingProperty;
                  }
                  else {
                    return property;
                  }
                })
              })
              resetEditing()
            }}
          >
            <Input value={editingProperty?.title} onChange={(e) => {
              setEditingProperty((pre) => {
                return { ...pre, title: e.target.value }
              })
            }} />
            <Input value={editingProperty?.description} onChange={(e) => {
              setEditingProperty((pre) => {
                return { ...pre, description: e.target.value }
              })
            }} />
            <Input value={editingProperty?.features} onChange={(e) => {
              setEditingProperty((pre) => {
                return { ...pre, features: e.target.value }
              })
            }} />
            <Input value={editingProperty?.price} onChange={(e) => {
              setEditingProperty((pre) => {
                return { ...pre, price: e.target.value }
              })
            }} />
            <Upload value={editingProperty?.images} multiple listType="picture" >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>

          </Modal>
          <Modal title="Add Property"
            visible={isAddProperty}
            okText="Save"
            onCancel={() => {
              resetAdding()
            }}
            footer={false}
          >
            <Form onFinish={handleFormSubmit} initialValues={{ title: 'Testing', features: { bedroom: 10 } }}>
              <Form.Item name="title" label="Property title" rules={[
                {
                  required: true,
                  message: 'Property title is required.'
                }
              ]} >
                <Input />
              </Form.Item>
              <Form.Item name="description" label="Property description" rules={[{required:true,message:'Please enter the description'}]} >
                <Input />
              </Form.Item>
              <Form.Item name="price" label="Property price" rules={[{required:true,message:'Please enter the price'}]} >
                <InputNumber />
              </Form.Item>
              <Form.Item name={["features", "floors"]} label="Property floors">
                <InputNumber min={0} max={10} />
              </Form.Item>
              <Form.Item name={["features", "bedroom"]} label="Property bedroom">
                <InputNumber min={0} max={999} />
              </Form.Item>
              <Form.Item name={["features", "bathroom"]} label="Property bathroom">
                <InputNumber min={0} max={5} />
              </Form.Item>
              <Form.Item name={["features", "parkingSpace"]} label="Property parkingSpace">
                <Input />
              </Form.Item>
              <Form.Item name={['features', 'furnishing']} label="Property furnishing">
                <Select placeholder="select furnishing type">
                  <Select.Option value="NON">Non</Select.Option>
                  <Select.Option value="SEMI">Semi</Select.Option>
                  <Select.Option value="FULL">Full</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name={['features', 'roadSize']} label="Property roadsize">
                <Select placeholder="select roadsize ">
                  <Select.Option value=">5">less than 5 Ft</Select.Option>
                  <Select.Option value="5-8">5 - 8 Ft</Select.Option>
                  <Select.Option value="8-12">8 - 12 Ft</Select.Option>
                  <Select.Option value="12-20">12 - 20 Ft</Select.Option>
                  <Select.Option value="20<">Above 20 Ft</Select.Option>
                  <Select.Option value="NULL">No road access</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name={['features', 'roadType']} label="Property furnishing">
                <Select placeholder="select furnishing type">
                  <Select.Option value="PITCHED">Pitched</Select.Option>
                  <Select.Option value="PAVELED">Paveled</Select.Option>
                  <Select.Option value="GRAVEL">Gravel</Select.Option>
                  <Select.Option value="SOIL">Soil</Select.Option>
                  <Select.Option value="NULL">No road</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name={["features", "areaSqFeet"]} label=" areaSqFeet">
                <InputNumber min={0} max={100} />
              </Form.Item>
              <Form.Item>
                <Button htmlType='submit'>Submit</Button>
              </Form.Item>
            </Form>
           





            <Upload value={AddingProperty?.images} >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>



          </Modal>

        </Content>

      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
  }
