import { ProdsTypesComponent } from "../types/types";




const ProductComponent = ({ id, title, image, price, category}: ProdsTypesComponent) => {


  return (
    <div className="four wide column" key={id}>
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src={image} alt={title} />
          </div>
          <div className="content">
            <div className="header">{title}</div>
            <div className="meta price">${price}</div>
            <div className="meta">{category}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
