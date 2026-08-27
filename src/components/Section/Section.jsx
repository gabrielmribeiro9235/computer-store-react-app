import './Section.css';
import Card from "../Card/Card";

const Section = ({ name, primaryColor, secondaryColor, products }) => {
  const backgroundColor = { backgroundColor: primaryColor };
  const underlineColor = { borderBottomColor: secondaryColor };

  return (
    products.length > 0 ? (
      <section id={name} className="section" style={backgroundColor}>
        <h3 style={underlineColor}>{name}</h3>
        <div className="products">
          {products.map(product => (
            <Card
              key={product.id}
              name={product.name}
              price={product.price}
              brand={product.brand}
              status={product.status}
            />
          ))}
        </div>
      </section>
    ) : ""
  );
};

export default Section;