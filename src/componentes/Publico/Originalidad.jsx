import React from 'react';

const Originalidad = () => {
  const estilos = {
    container: {
      maxWidth: '800px',
      margin: 'auto',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fafafa',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
    },
    title: {
      textAlign: 'center',
      color: '#28a745',
      marginBottom: '20px',
      fontSize: '28px',
    },
    subtitle: {
      color: '#333',
      fontSize: '22px',
      marginTop: '20px',
    },
    text: {
      color: '#555',
      marginBottom: '15px',
      textAlign: 'justify',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
    },
    th: {
      backgroundColor: '#28a745',
      color: 'white',
      padding: '10px',
      border: '1px solid #ddd',
      textAlign: 'center',
    },
    td: {
      padding: '10px',
      border: '1px solid #ddd',
      textAlign: 'center',
      backgroundColor: '#fff',
    },
    section: {
      backgroundColor: '#e9f5e9',
      padding: '15px',
      borderRadius: '5px',
      marginBottom: '20px',
    },
    improvements: {
      backgroundColor: '#f5f5f5',
      padding: '15px',
      borderRadius: '5px',
    },
    // Estilos responsivos
    '@media (max-width: 600px)': {
      container: {
        padding: '10px',
      },
      title: {
        fontSize: '24px',
      },
      subtitle: {
        fontSize: '20px',
      },
      text: {
        fontSize: '14px',
      },
      th: {
        fontSize: '14px',
        padding: '8px',
      },
      td: {
        fontSize: '14px',
        padding: '8px',
      },
    },
    '@media (min-width: 601px) and (max-width: 900px)': {
      title: {
        fontSize: '26px',
      },
      subtitle: {
        fontSize: '21px',
      },
      text: {
        fontSize: '15px',
      },
      th: {
        fontSize: '16px',
        padding: '10px',
      },
      td: {
        fontSize: '16px',
        padding: '10px',
      },
    },
  };

  return (
    <div style={estilos.container}>
      <h1 style={estilos.title}>Comparación: Cifrado César vs. Escítala</h1>

      <h2 style={estilos.subtitle}>Comparación entre Cifrado César y Escítala</h2>
      <p style={estilos.text}>
        A continuación, se muestra una tabla comparativa entre los cifrados César y Escítala, dos métodos clásicos de cifrado. Aunque ambos son efectivos en su nivel básico, tienen fortalezas y debilidades únicas.
      </p>

      <table style={estilos.table}>
        <thead>
          <tr>
            <th style={estilos.th}>Características</th>
            <th style={estilos.th}>Cifrado César</th>
            <th style={estilos.th}>Cifrado Escítala</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={estilos.td}>Tipo de Cifrado</td>
            <td style={estilos.td}>Sustitución</td>
            <td style={estilos.td}>Transposición</td>
          </tr>
          <tr>
            <td style={estilos.td}>Clave</td>
            <td style={estilos.td}>Número de desplazamientos</td>
            <td style={estilos.td}>Número de columnas (vara)</td>
          </tr>
          <tr>
            <td style={estilos.td}>Complejidad</td>
            <td style={estilos.td}>Baja (simple desplazamiento)</td>
            <td style={estilos.td}>Moderada (requiere organización de columnas)</td>
          </tr>
          <tr>
            <td style={estilos.td}>Seguridad</td>
            <td style={estilos.td}>Baja, vulnerable a ataques de fuerza bruta</td>
            <td style={estilos.td}>Baja, vulnerabilidad si se conoce el número de columnas</td>
          </tr>
          <tr>
            <td style={estilos.td}>Usabilidad</td>
            <td style={estilos.td}>Fácil de implementar y entender</td>
            <td style={estilos.td}>Necesita más pasos, pero sigue siendo sencillo</td>
          </tr>
        </tbody>
      </table>

      <h2 style={estilos.subtitle}>Análisis de Seguridad</h2>
      <div style={estilos.section}>
        <p style={estilos.text}>
          Ambos cifrados son considerados inseguros en un entorno moderno debido a la facilidad con la que pueden ser rotos con técnicas actuales.
        </p>
        <ul>
          <li style={estilos.text}>
            <strong>Cifrado César:</strong> Es extremadamente vulnerable a ataques de fuerza bruta, ya que solo hay 25 posibles claves. Una vez que se conoce la clave, el mensaje se descifra fácilmente. Además, es vulnerable a ataques de análisis de frecuencia.
          </li>
          <li style={estilos.text}>
            <strong>Cifrado Escítala:</strong> Aunque es más complejo debido a su naturaleza de transposición, si un atacante conoce el número de columnas o puede deducir la estructura del mensaje, es posible descifrar el texto fácilmente.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Originalidad;
