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
    <Footer style={{ 
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
    }}>

    </Footer>
</Layout>

  );
};

export default PieDePaginaCliente;