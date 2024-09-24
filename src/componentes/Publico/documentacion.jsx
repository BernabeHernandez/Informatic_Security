import React from 'react';

const Documentacion = () => {
  const estilos = {
    container: {
      maxWidth: '800px',
      margin: 'auto',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f7f7f7',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
    },
    title: {
      textAlign: 'center',
      color: '#007bff',
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
    list: {
      marginBottom: '15px',
      paddingLeft: '20px',
    },
    listItem: {
      color: '#333',
      marginBottom: '10px',
    },
    example: {
      backgroundColor: '#e9ecef',
      padding: '10px',
      borderRadius: '5px',
      fontFamily: 'monospace',
    },
    note: {
      color: '#007bff',
      fontStyle: 'italic',
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
      listItem: {
        marginBottom: '8px',
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
    },
  };

  return (
    <div style={estilos.container}>
      <h1 style={estilos.title}>Guía de Uso: Cifrado César y Escítala</h1>

      <h2 style={estilos.subtitle}>Cifrado César</h2>
      <p style={estilos.text}>
        El Cifrado César es uno de los métodos de cifrado más simples. Funciona desplazando cada letra del mensaje original un número fijo de posiciones en el alfabeto. 
        Sigue estos pasos para usar el Cifrado César en la aplicación:
      </p>
      <ul style={estilos.list}>
        <li style={estilos.listItem}>1. Ingresa el mensaje que deseas cifrar o descifrar en el campo de texto.</li>
        <li style={estilos.listItem}>2. Introduce la clave, que representa el número de posiciones que se desplazará cada letra. Ejemplo: Clave 3 significa que 'A' se convierte en 'D'.</li>
        <li style={estilos.listItem}>3. Haz clic en <strong>Cifrar</strong> para aplicar el cifrado o en <strong>Descifrar</strong> para revertirlo.</li>
        <li style={estilos.listItem}>4. Si el texto cifrado no es lo que esperabas, verifica que hayas ingresado la clave correcta.</li>
        <li style={estilos.listItem}>5. Puedes copiar el resultado usando el botón <strong>Copiar Texto</strong>.</li>
      </ul>
      <p style={estilos.text}>
        Ejemplo: Si ingresas el nombre "BERNABE" y utilizas la clave 5, el mensaje cifrado será "GJWSFGJ".
      </p>
      <div style={estilos.example}>
        <p>Mensaje: BERNABE</p>
        <p>Clave: 5</p>
        <p>Resultado: GJWSFGJ</p>
      </div>

      <h2 style={estilos.subtitle}>Cifrado Escítala</h2>
      <p style={estilos.text}>
        El Cifrado Escítala es un antiguo método de cifrado que organiza el mensaje en filas y columnas. Funciona tomando un número de columnas (clave) y distribuyendo el mensaje en una tabla.
        Sigue estos pasos para usar el Cifrado Escítala:
      </p>
      <ul style={estilos.list}>
        <li style={estilos.listItem}>1. Ingresa el mensaje que deseas cifrar o descifrar en el campo de texto.</li>
        <li style={estilos.listItem}>2. Introduce la clave, que es el número de columnas en las que el mensaje se dividirá.</li>
        <li style={estilos.listItem}>3. Haz clic en <strong>Cifrar</strong> para aplicar el cifrado o en <strong>Descifrar</strong> para revertirlo.</li>
        <li style={estilos.listItem}>4. Asegúrate de que el mensaje y la clave sean correctos para evitar errores.</li>
        <li style={estilos.listItem}>5. Usa el botón <strong>Copiar Texto</strong> para copiar el resultado.</li>
      </ul>
      <p style={estilos.text}>
        Ejemplo: Si el mensaje es "HOLA" y la clave es 2 (número de columnas), el mensaje cifrado será reorganizado como "HLOA".
      </p>
      <div style={estilos.example}>
        <p>Mensaje: HOLA</p>
        <p>Clave: 2</p>
        <p>Resultado: HLOA</p>
      </div>
    </div>
  );
};

export default Documentacion;
