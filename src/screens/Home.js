import React, { useState } from "react";
import Axios from "axios";
import data from "../constants";
import { Link } from "react-router-dom";

const Home = (props) => {
  var [categories, setCategories] = useState(
    JSON.parse(localStorage.getItem("categories"))
      ? JSON.parse(localStorage.getItem("categories"))
      : []
  );
  const [products, setProducts] = useState([]);
  const [pickedCat, setPickedCat] = useState(0);

  if (categories.length == 0) {
    Axios.get(data.baseUrl + "/api/categories").then((res) => {
      setCategories(res.data.categories);
      localStorage.setItem("categories", JSON.stringify(res.data.categories));
      // console.log(JSON.parse(localStorage.getItem("categories")));
      // console.log(categories);
    });
  }

  const pickCategory = (id) => {
    setPickedCat(id);
    Axios.get(data.baseUrl + "/api/category/" + id + "/products").then(
      (res) => {
        // console.log(res.data.products);
        setProducts(res.data.products);
        // console.log(products);
      }
    );
  };

  const addToCart = (product) => {
    // console.log(product);
    props.setCart([...props.cart, product]);
    localStorage.setItem("cart", JSON.stringify([...props.cart, product]));
    console.log(props.cart);
  };

  return (
    <div>
      <img
        src="./burger-bg.png"
        style={{ width: "100%", position: "absolute" }}
      />
      <div className="container">
        <div className="">
          <div className="row" style={{ paddingTop: "140px" }}>
            <div className="col-md-12">
              {categories.map((category) => {
                if (category.id == pickedCat) {
                  return (
                    <button
                      className="btn"
                      onClick={() => pickCategory(category.id)}
                      style={styles.categoryPicked}
                    >
                      {category.name}
                    </button>
                  );
                }
                return (
                  <button
                    className="btn"
                    onClick={() => pickCategory(category.id)}
                    style={styles.category}
                  >
                    {category.name}
                  </button>
                );
              })}
              {products.map((product) => {
                return (
                  <div className="card" style={styles.prductCard}>
                    <img
                      src="./burger.png"
                      style={{
                        height: "120px",
                        width: "120px",
                        margin: "-15px",
                      }}
                    />
                    <tag style={styles.prodData}>
                      {product.name}
                      <tag
                        className="float-right text-center"
                        style={{ color: "#F2A83B", fontWeight: "bold" }}
                      >
                        €{product.price}
                        <br />
                        <button
                          className="btn"
                          style={styles.btnAdd}
                          onClick={() => addToCart(product)}
                        >
                          + voeg toe
                        </button>
                      </tag>
                      <br />
                      <tag style={styles.prodDesc}>{product.description}</tag>
                    </tag>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

let prductCard = {
  marginTop: "25px",
  padding: "-10px",
  backgroundColor: "#696969",
  display: "inline-block",
  width: "100%",
  height: "87px",
};

let prodDesc = {
  fontSize: "16px",
};

let prodData = {
  position: "absolute",
  marginTop: "10px",
  marginLeft: "10px",
  fontSize: "24px",
  fontWeight: "500",
  color: "white",
  width: "100%",
  paddingRight: "100px",
};

const { innerWidth: width, innerHeight: height } = window;
// console.log(width)
if (width < 900) {
  prductCard = {
    marginTop: "25px",
    padding: "-10px",
    backgroundColor: "#696969",
    display: "inline-block",
    width: "100%",
    height: "80px",
  };
  prodDesc = {
    display: "none",
  };
  prodData.fontSize = "20px";
}

const styles = {
  category: {
    width: width < 900 ? "105px" : "205px",
    backgroundColor: "blue",
    padding: "3px 20px",
    borderRadius: "3px",
    backgroundColor: "black",
    color: "white",
    textDecoration: "none",
    marginRight: "10px",
    marginBottom: "10px",
    textAlign: "center",
  },
  categoryPicked: {
    width: width < 900 ? "105px" : "205px",
    backgroundColor: "blue",
    padding: "3px 20px",
    borderRadius: "3px",
    backgroundColor: "#F2A83B",
    color: "white",
    textDecoration: "none",
    marginRight: "10px",
    marginBottom: "10px",
    textAlign: "center",
  },
  btnAdd: {
    width: "120px",
    backgroundColor: "blue",
    padding: "3px 10px",
    borderRadius: "3px",
    backgroundColor: "#F2A83B",
    color: "white",
    textDecoration: "none",
    marginBottom: "-20px",
    marginRight: "-10px",
    fontSize: "16px",
  },
  prductCard: prductCard,
  prodDesc: prodDesc,
  prodData: prodData,
};

export default Home;
