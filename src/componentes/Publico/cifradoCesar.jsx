import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation

const CifradoCesar = () => {
  const [mensaje, setMensaje] = useState('');
  const [clave, setClave] = useState('');
  const [resultado, setResultado] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use the navigate hook for navigation

  const cifrar = (mensaje, desplazamiento) => {
    return mensaje.split('').map((char) => {
      const codigo = char.charCodeAt(0);
      if (char.match(/[a-z]/i)) {
        const base = char === char.toLowerCase() ? 97 : 65;
        return String.fromCharCode(((codigo - base + desplazamiento) % 26) + base);
      }
      return char; // No cifrar caracteres que no son letras
    }).join('');
  };

  const descifrar = (mensaje, desplazamiento) => {
    return cifrar(mensaje, 26 - (desplazamiento % 26));
  };

  const handleCifrar = () => {
    const desplazamiento = parseInt(clave, 10);
    if (isNaN(desplazamiento)) {
      setError('Por favor, ingresa una clave válida.');
      return;
    }
    setError('');
    const mensajeCifrado = cifrar(mensaje, desplazamiento);
    setResultado(mensajeCifrado);
  };

  const handleDescifrar = () => {
    const desplazamiento = parseInt(clave, 10);
    if (isNaN(desplazamiento)) {
      setError('Por favor, ingresa una clave válida.');
      return;
    }
    setError('');
    const mensajeDescifrado = descifrar(mensaje, desplazamiento);
    setResultado(mensajeDescifrado);
  };

  const copiarAlPortapapeles = () => {
    navigator.clipboard.writeText(resultado)
      .then(() => alert('Texto copiado al portapapeles!'))
      .catch(err => console.error('Error al copiar: ', err));
  };

  // Navegar a la documentación
  const verMas = () => {
    navigate('/documentacion'); // Reemplaza '/documentacion' con la ruta de tu componente de documentación
  };

  // Estilos mejorados para el diseño
  const estilos = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      maxWidth: '900px',
      margin: 'auto',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Arial, sans-serif',
      flexWrap: 'wrap', // Permite que los elementos se envuelvan en pantallas pequeñas
    },
    formulario: {
      flex: '1 1 300px', // Flex-grow, flex-shrink, and base width
      marginRight: '20px',
      minWidth: '250px', // Min width to prevent too small
    },
    title: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '20px',
    },
    guiaContainer: {
      flex: '1 1 300px', // Flex-grow, flex-shrink, and base width
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      marginLeft: '20px',
      minWidth: '250px', // Min width for the guide
    },
    guiaTitulo: {
      color: '#007bff',
      fontSize: '20px',
      marginBottom: '10px',
      fontWeight: 'bold',
    },
    guiaTexto: {
      color: '#333',
      fontSize: '16px',
      lineHeight: '1.6',
      marginBottom: '10px',
    },
    guiaLista: {
      margin: '10px 0',
      paddingLeft: '20px',
      color: '#555',
    },
    guiaEjemplo: {
      backgroundColor: '#f0f8ff',
      borderRadius: '5px',
      padding: '10px',
      border: '1px solid #007bff',
      color: '#333',
    },
    textarea: {
      width: '100%',
      height: '100px',
      marginBottom: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      padding: '10px',
      fontSize: '16px',
      transition: 'border 0.3s',
    },
    textareaFocus: {
      border: '1px solid #007bff',
      outline: 'none',
    },
    input: {
      width: '100%',
      marginBottom: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      padding: '10px',
      fontSize: '16px',
      transition: 'border 0.3s',
    },
    inputFocus: {
      border: '1px solid #007bff',
      outline: 'none',
    },
    button: {
      width: '48%',
      margin: '1%',
      padding: '10px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.2s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
      transform: 'scale(1.05)',
    },
    error: {
      color: 'red',
      textAlign: 'center',
      margin: '10px 0',
    },
    resultado: {
      margin: '20px 0',
      padding: '10px',
      backgroundColor: '#e9ecef',
      borderRadius: '5px',
    },
    verMasButton: {
      marginTop: '20px',
      cursor: 'pointer',
      color: '#007bff',
      textDecoration: 'underline',
    },
  };

  return (
    <div style={estilos.container}>
      {/* Formulario principal */}
      <div style={estilos.formulario}>
        <h1 style={estilos.title}>Cifrado César</h1>

        <textarea
          placeholder="Ingresa tu mensaje"
          style={estilos.textarea}
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          onFocus={(e) => (e.target.style.border = estilos.textareaFocus.border)}
          onBlur={(e) => (e.target.style.border = estilos.textarea.border)}
        />
        <input
          type="number"
          placeholder="Clave (desplazamiento)"
          style={estilos.input}
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          onFocus={(e) => (e.target.style.border = estilos.inputFocus.border)}
          onBlur={(e) => (e.target.style.border = estilos.input.border)}
        />
        <div>
          <button
            style={estilos.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = estilos.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = estilos.button.backgroundColor)}
            onClick={handleCifrar}
          >
            Cifrar
          </button>
          <button
            style={estilos.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = estilos.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = estilos.button.backgroundColor)}
            onClick={handleDescifrar}
          >
            Descifrar
          </button>
        </div>
        {error && <p style={estilos.error}>{error}</p>}
        <h2>Resultado:</h2>
        <p style={estilos.resultado}>{resultado}</p>
        {resultado && (
          <button
            style={estilos.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = estilos.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = estilos.button.backgroundColor)}
            onClick={copiarAlPortapapeles}
          >
            Copiar Texto
          </button>
        )}
        {/* Opción de "Ver más" */}

      </div>

      {/* Panel de ayuda al lado */}
      <div style={estilos.guiaContainer}>
        <h2 style={estilos.guiaTitulo}>Guía para el Cifrado César</h2>
        <p style={estilos.guiaTexto}>
          El Cifrado César es un método de cifrado donde las letras del mensaje se desplazan
          un número fijo de posiciones en el alfabeto.
        </p>
        <p style={estilos.guiaTexto}><strong>Pasos:</strong></p>
        <ul style={estilos.guiaLista}>
          <li>Ingresa el mensaje a cifrar o descifrar.</li>
          <li>Introduce la clave de desplazamiento.</li>
          <li>Presiona "Cifrar" o "Descifrar".</li>
          <li>Puedes copiar el resultado con el botón "Copiar Texto".</li>
        </ul>
        <p style={estilos.guiaEjemplo}>
          Ejemplo: Con un desplazamiento de 3, "A" se convierte en "D".
        </p>
        {/* Opción de "Ver más" para documentación */}
        <div
          style={estilos.verMasButton}
          onClick={verMas}
        >
          Ver más
        </div>
      </div>
    </div>
  );
};

export default CifradoCesar;
