import React, { useState } from "react";
import CartCard from "./components/CartCard";

export const UserContext = React.createContext();

function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "iPhone 15 pro ",
      description: "An apple mobile which is nothing like apple",
      price: 1500000,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 25,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      image: "https://www.apple.com/in/iphone-15-pro/images/overview/closer-look/natural_titanium__ccl12n7vwwxe_large.jpg",
    },
    {
      id: 2,
      title: "iPhone 14 pro",
      description:
        "14 pro , Model A19 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 89999,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      image: "https://www.apple.com/in/iphone-15/images/overview/closer-look/green__1q1v4ia8oaq2_large.jpg",
    },
    {
      id: 3,
      title: "i Watch Mini ultra",
      description:
        "SAll the essentials. Light on price.",
      price: 12409,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 35,
      brand: "Apple",
      category: "Watch",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT3H3ref_VW_34FR+watch-case-45-aluminum-starlight-nc-s9_VW_34FR+watch-face-45-aluminum-starlight-s9_VW_34FR_WF_CO_GEO_IN?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1694507905569",
    },
    {
      id: 4,
      title: "i Watch ultra",
      description: "Powerful sensors advanced health features ",
      price: 28000,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "Apple",
      category: "Watch",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT3W3ref_VW_34FR+watch-case-45-aluminum-red-nc-s9_VW_34FR+watch-face-45-aluminum-red-s9_VW_34FR_WF_CO_GEO_IN?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1694507905569",
    },
    {
      id: 5,
      title: "Air Pods Max",
      description:
        "Get 3 months of Apple Music free with your AirPods Max‍Footnote‍",
      price: 49999,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 30,
      brand: "Apple",
      category: "Earphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-green-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604022364000",
    },
  ]);

  return (
    <>
      <UserContext.Provider value={{ product, setProduct }}>
        <div className="container my-5">
          <CartCard />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
