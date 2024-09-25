import React, { useState, useEffect } from 'react';
import { Layout, Menu, Typography } from 'antd';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Footer } = Layout;
const { Text } = Typography;

const PieDePaginaCliente = () => {
  const [datosEmpresa, setDatosEmpresa] = useState({
    redesSociales: {
      facebook: "",
      twitter: "",
      instagram: ""
    },
    telefonoContacto: "",
    emailContacto: "",
    direccion: ""
  });

  useEffect(() => {
    fetch('http://localhost:3001/api/datosEmpresa')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error fetching datosEmpresa: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Datos de datosEmpresa:', data);
        if (data.length > 0) {
          setDatosEmpresa(data[0]);
        }
      })
      .catch(error => {
        console.error('Error fetching datosEmpresa:', error);
      });
  }, []);

  return (
    <Layout>
      <Footer
        style={{
          backgroundColor: '#0979B0',
          textAlign: 'center',
          padding: '40px 20px',
          maxWidth: '100%',
          boxSizing: 'border-box',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          '@media (max-width: 600px)': {
            gridTemplateColumns: '1fr',
            padding: '20px 10px',
          },
        }}
      >

        <div>
          <Menu mode="horizontal" style={{ backgroundColor: '#0979B0', borderBottom: 'none' }}>
            {datosEmpresa.redesSociales.facebook && (
              <Menu.Item key="facebook">
                <Link to={datosEmpresa.redesSociales.facebook}>
                  <FacebookOutlined style={{ fontSize: '24px', color: '#fff' }} />
                </Link>
              </Menu.Item>
            )}
            {datosEmpresa.redesSociales.twitter && (
              <Menu.Item key="twitter">
                <Link to={datosEmpresa.redesSociales.twitter}>
                  <TwitterOutlined style={{ fontSize: '24px', color: '#fff' }} />
                </Link>
              </Menu.Item>
            )}
            {datosEmpresa.redesSociales.instagram && (
              <Menu.Item key="instagram">
                <Link to={datosEmpresa.redesSociales.instagram}>
                  <InstagramOutlined style={{ fontSize: '24px', color: '#fff' }} />
                </Link>
              </Menu.Item>
            )}
          </Menu>
        </div>  
        <div>
          <Text style={{ color: '#fff' }}>© {new Date().getFullYear()} Bernabe Hernandez Bautista</Text>
        </div>
      </Footer>
    </Layout>
  );
};

export default PieDePaginaCliente;
