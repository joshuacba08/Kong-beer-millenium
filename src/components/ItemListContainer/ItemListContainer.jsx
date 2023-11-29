import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  /*lógica para obtener la información de los productos*/

  // 1. definir un estado para los productos
  const [products, setProducts] = useState([]);

  // 2. definir un useEffect para obtener los productos
  useEffect(() => {
    fetch("https://run.mocky.io/v3/1ca302e2-1551-499a-8cf3-9db2e1f2cf22")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {products.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
