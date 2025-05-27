import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme , Space, Table, Tag} from 'antd';

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [locations , setLocations] = useState([]);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

useEffect(() => {
    const fetchLocations = async () => {
      const { data, error } = await supabase
        .from('locations')
        .select('*');

      if (error) console.error('Error fetching users:', error);
      else setLocations(data);
    };

    fetchLocations();
  }, []);

  const columns = [
  {
    title: 'Location',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  ]
  return (
    <Layout style={{ minHeight: '100%' }}> {/* Full screen height */}
      <Sider trigger={null} collapsible collapsed={collapsed} className="custom-sidebar">
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          rootClassName="custom-sidebar"
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
       
        />
      </Sider>
      <Layout style={{width:"100%"}}>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Table rowKey="id"  columns={columns} dataSource={locations} pagination={false}/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
