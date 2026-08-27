import './Card.css';

const Card = ({ name, price, image, status }) => {
  return (
    <div className="card">
      <div className="header">
        <img src={`/${image}`} alt={name} />
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