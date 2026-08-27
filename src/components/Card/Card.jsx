import './Card.css';
import hpLogo from "/public/hpLogo.png";
import dellLogo from "/public/dellLogo.png";
import asusLogo from "/public/asusLogo.png";
import positivoLogo from "/public/positivoLogo.png";
import xinglingLogo from "/public/xinglingLogo.jpg";

const Card = ({ name, price, brand, status }) => {
  const brandsLogo = {
    "HP": hpLogo,
    "Dell": dellLogo,
    "Positivo": positivoLogo,
    "Asus": asusLogo,
    "Xing Ling genérico": xinglingLogo,
  };

  return (
    <div className="card">
      <div className="header">
        <img src={brandsLogo[brand]} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>R$ {price}</h5>
        <h5>{status}</h5>
      </div>
    </div>
  );
};

export default Card;