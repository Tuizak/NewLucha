import React from "react";
import styles from './DesingBoletos.module.css'; // Importar el archivo CSS

const MisBoletos = () => {
  // Datos de ejemplo de los boletos
  const boletos = [
    {
      id: 1,
      evento: "Evento de Lucha Libre 1",
      fecha: "20 de julio de 2024",
      hora: "18:00",
      lugar: "Estadio XYZ",
      precio: "$50",
      imagen: "https://scontent.fmxl1-1.fna.fbcdn.net/v/t39.30808-6/446815209_442558928531065_7822979675137723569_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqTLp1uhGStuYjm-hyhOryZqJ6NM9zpuhmono0z3Om6Gns5QTV2uaXf0-SpqWnpldQD6hXWaEgyjKVNXvuBJry&_nc_ohc=njl6J3qlpL8Q7kNvgGVN7kQ&_nc_ht=scontent.fmxl1-1.fna&oh=00_AYCtToaH2R99EjPennyVG5aHRkP6DNElbBgE5bwYYRNC1g&oe=6661DD94"
    },
    {
      id: 2,
      evento: "Evento de Lucha Libre 2",
      fecha: "25 de julio de 2024",
      hora: "19:00",
      lugar: "Centro de Convenciones ABC",
      precio: "$40",
      imagen: "https://scontent.fmxl1-1.fna.fbcdn.net/v/t39.30808-6/440822634_1531974724034591_4423456118917924904_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHpIHdR5xwdsAo24JqEPNNoJ1AGHTRmI7InUAYdNGYjsrdpjdELrZAVusuTjvZwt46AxelDX2w3Xi_C9H2_jpCz&_nc_ohc=3VOFX_cTW9EQ7kNvgH2D457&_nc_ht=scontent.fmxl1-1.fna&oh=00_AYCDjmYzhjA3BDrUuVkTYs85DAfP1iF9WZgLE0eloK3ZvA&oe=6661BBAB"
    },
    {
      id: 3,
      evento: "Evento de Lucha Libre 3",
      fecha: "5 de agosto de 2024",
      hora: "20:30",
      lugar: "Arena de Luchadores",
      precio: "$45",
      imagen: "https://scontent.fmxl1-1.fna.fbcdn.net/v/t39.30808-6/436867666_956225923169729_6695945976953645189_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGstgp48djdp_ntOPppJPt7mIMghEhtlnmYgyCESG2Weev8Fim43o23cMc4kdNUCEwVfDbBR8PQWZgCPj7BS2fH&_nc_ohc=AGTrwLgN1JgQ7kNvgE2lUEC&_nc_ht=scontent.fmxl1-1.fna&oh=00_AYCi-ldB-L9HuVZ4pCaR5q0zJJ4Rji2nfyS1g4yGdL9QuA&oe=6661EAC3"
    }
  ];

  return (
    <div className={styles.boletosContainer}>
      <h2>Mis Boletos</h2>
      <ul>
        {boletos.map((boleto) => (
          <li key={boleto.id} className={styles.boleto}>
            <div className={styles.boletoTitle}>{boleto.evento}</div>
            <div className={styles.boletoDetails}>correo:Ingresa tu correoContrase%C3%B1a:
              <div>Fecha: {boleto.fecha}</div>
              <div>Hora: {boleto.hora}</div>
              <div>Lugar: {boleto.lugar}</div>
              <div>Precio: {boleto.precio}</div>
              <img src={boleto.imagen} alt={boleto.evento} className={styles.boletoImage} /> 
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MisBoletos;
