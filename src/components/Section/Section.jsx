import './Section.css';
import Card from "../Card/Card";

const Section = ({ name, primaryColor, secondaryColor, products }) => {
  const backgroundColor = { backgroundColor: secondaryColor };
  const underlineColor = { borderColor: primaryColor };

  return (
    products.length > 0 ? (
      <section className="section" style={backgroundColor}>
        <h3 style={underlineColor}>{name}</h3>
        <div className="products">
          {products.map(product => (
            <Card
              key={`${product.name}-${product.brand}`}
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