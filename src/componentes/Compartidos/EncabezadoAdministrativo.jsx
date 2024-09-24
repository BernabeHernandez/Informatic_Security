import React from 'react';
import { Layout, Menu } from 'antd';
import { LockOutlined, KeyOutlined, SafetyOutlined, SecurityScanOutlined, ShieldOutlined,InfoCircleOutlined, UnorderedListOutlined, ReadOutlined, StarOutlined, DiffOutlined, ExperimentOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;
const { SubMenu } = Menu;

const EncabezadoAdministrativo = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Cerrando sesión...');
  };

  const handleMenuClick = (e) => {
    switch (e.key) {
      case "1":
        navigate('/admin/cifrado');
        break;
      case "2":
        navigate('/admin/escitala');
        break;
      case "3":
        navigate('/admin/documentacion');
        break;
      case "4":
        navigate('/admin/originalidad');
        break;
      default:
        console.log("No se reconoce la acción del menú");
    }
  };

  return (
    <Layout className="layout">
      <Header style={{
        padding: 45,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#0979B0',
        '@media (max-width: 600px)': {
          flexDirection: 'column',
          padding: '20px 10px',
        },
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginRight: '20px',
          '@media (max-width: 600px)': {
            marginRight: '0px',
          },
        }}>

          <span style={{ color: 'white', fontSize: '30px', fontWeight: 'bold' }}>Cifrado de datos</span>

        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{
          lineHeight: '90px',
          fontSize: '18px',
          backgroundColor: '#0979B0',
          marginLeft: 'auto',
          '@media (max-width: 600px)': {
            lineHeight: '60px',
            fontSize: '16px',
            marginLeft: '0px',
          },
        }} onClick={handleMenuClick}>
          <Menu.Item key="1" icon={<LockOutlined />}>Cesar</Menu.Item>
          <Menu.Item key="2" icon={<SecurityScanOutlined />}>Escítala</Menu.Item>
          <Menu.Item key="3" icon={<InfoCircleOutlined />}>Guía</Menu.Item>
          <Menu.Item key="4" icon={<DiffOutlined />}>Extra</Menu.Item>
        </Menu>
      </Header>
    </Layout>

  );
};
export default EncabezadoAdministrativo;