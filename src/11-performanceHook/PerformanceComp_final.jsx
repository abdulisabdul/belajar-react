import React, { Fragment, memo, useCallback, useMemo, useState } from "react";

export default function PerformanceComp() {
  const [cart, setCart] = useState(0);
  const [isLogin, setIslogin] = useState(false);
  const namaComponent ='Child Component'

  console.log("Parent component rendered");

  const _login = () => setIslogin(!isLogin);

  // const _addToCart = () => setCart((prev) => prev + 1)

  const _addToCart = useCallback(() => setCart((prev) => prev + 1),[])

  const [listProduct_] = useState([
    {
      nama_barang: "Macbook",
      harga: 1000000,
      url:
        "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/Apple_MacBook_Pro_13_Inci_2020/Apple_MacBook_Pro_13_Inci_2020_L_1.jpg",
    },
    {
      nama_barang: "Lenovo",
      harga: 50000,
      url:
        "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/Lenovo_Ideapad_C340_14/Lenovo_Ideapad_C340_14_L_1.jpg",
    },
  ]);

  const getData = () => {
    /// fetch data dari api
    return [
      {
        nama_barang: "Macbook",
        harga: 1000000,
        url:
          "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/Apple_MacBook_Pro_13_Inci_2020/Apple_MacBook_Pro_13_Inci_2020_L_1.jpg",
      },
      {
        nama_barang: "Lenovo",
        harga: 50000,
        url:
          "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/Lenovo_Ideapad_C340_14/Lenovo_Ideapad_C340_14_L_1.jpg",
      },
    ]
  }

  const listProduct = useMemo(() => getData(),[])

  const [user] = useState({nama : 'abdul'})
  

  return (
    <div>
      <h1>Optimisasi</h1>
      <div>
        <button className="btn btn-primary float-right">
          Total Cart {cart}
        </button>
      </div>
      Parent Component
      <div>{isLogin ? "Kamu sudah Login" : "Kamu belum login"}</div>
      <button className="btn btn-warning" onClick={_login}>
        {isLogin ? "Logout" : "Login"}
      </button>
      <ChildComponent
        namaComponent={namaComponent}
        listProduct={listProduct}
        user={user}
        _addToCart={_addToCart}
        cart={cart}
      />
    </div>
  );
}
// function loop() {
//   for (let i = 0; i < 10000000; i++){
//     new Date()
//   }
// }
function ChildComponent_({
  namaComponent,
  listProduct,
  user,
  _addToCart,
  cart
}) {
  // loop()
  console.log("Child Component rendered");
  return (
    <Fragment>
      <div>
        <div>--------------------------------------------</div>
        {namaComponent}
        {user.nama}
        {cart}
      </div>
      <div className="row">
        {listProduct.map((item) => (
          <div key={item.nama_barang} className="col-6 col-sm-6 mb-3">
            <div className="card" style={{ width: "12rem" }}>
              <img src={item.url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.nama_barang}</h5>
                <p className="card-text">{item.harga}</p>
                <button
                  className="btn btn-primary mt-2 mb-2"
                  onClick={() => _addToCart()}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

function compare(prevProps, nextProps) {
  return JSON.stringify(prevProps.listProduct) === JSON.stringify(nextProps.listProduct)
}

const ChildComponent = memo(ChildComponent_)


