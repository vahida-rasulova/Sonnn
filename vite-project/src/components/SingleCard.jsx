import React, { useState } from "react";
import SingleCardSwiper from "./SingleCartSwiper";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { MdLock } from "react-icons/md";
function SingleCard({ props, products, basket, dispatch }) {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const addBasket = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket, { id: id, count: 1 }],
    });
    localStorage.setItem(
      "basket",
      JSON.stringify([...basket, { id: id, count: 1 }])
    );
  };
  const removeBasket = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket.filter((basket) => basket.id !== id)],
    });
    localStorage.setItem(
      "basket",
      JSON.stringify([...basket.filter((basket) => basket.id !== id)])
    );
  };
  const inBasket = basket.find((a) => a.id == props.id);
  return (
    <>
      <div className="single-card-navigation">
        <p>
          <Link to="/">HOME</Link> / <Link to="/products">SIAM </Link> /
        </p>
        <p>{props.category}</p>
      </div>
      <div className="single-card">
        <div className="single__card-cols">
          <div className="images">
            <SingleCardSwiper product={props} />
          </div>
          <div className="cart-text-col">
            <div className="card-title">
              <p>{props.name}</p>
            </div>
            <div className="card-price">
              <p>${props.price}</p>
              <p>${props.prevprice}</p>
              <p> 40% Off</p>
            </div>
            <div className="starss">
              <div className="star_div">
                <img src="../images/ProductPage/star.png" alt="" />
                <img src="../images/ProductPage/star.png" alt="" />
                <img src="../images/ProductPage/star.png" alt="" />
                <img src="../images/ProductPage/star.png" alt="" />
                <img src="../images/ProductPage/star.png" alt="" />
              </div>

              <p>5.00 (200 customer review)</p>
            </div>

            {inBasket ? (
              <Link to="/cart">
                {" "}
                <button className="singleBtn">Add To Card</button>
              </Link>
            ) : (
              <Link to="/cart">
                {" "}
                <button
                  className="singleBtn"
                  onClick={() => addBasket(props.id)}
                >
                  {" "}
                  Add to Card{" "}
                </button>
              </Link>
            )}
            <div className="guaranteed">
              <p>
                Guaranteed Safe Checkout <span></span> <MdLock />
              </p>
            </div>
            <div className="bank">
              <img src="../images/ProductPage/Frame 177.png" alt="" />
              <img src="../images/ProductPage/Frame 178.png" alt="" />
              <img src="../images/ProductPage/Frame 181.png" alt="" />
              <img src="../images/ProductPage/Frame 180.png" alt="" />
            </div>
            <div className="delivery">
              <img src="../images/ProductPage/carbon_delivery.png" alt="" />
              <div className="delivery-text">
                <p>Free UK Delivery</p>
                <p>
                  Order now and enjoy free delivery on us! Restrictions apply.
                </p>
              </div>
            </div>
            <div className="bloc-tabs">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                What’s Included?
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Delivery
              </button>
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                Dimensions
              </button>
              <button
                className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(4)}
              >
                Finance
              </button>
            </div>
            <div className="content-tabs">
              <div
                className={
                  toggleState === 1 ? "t-content  active-content" : "t-content"
                }
              >
                <h2>Premium Delivery</h2>

                <p>
                  This bed set includes everything you need to set up a
                  queen-sized bed frame, including a headboard, footboard,
                  rails, and slats to support your mattress. Please note that
                  this product does not include a mattress or any bedding
                  accessories such as sheets or pillows.
                </p>
              </div>

              <div
                className={
                  toggleState === 2 ? "t-content  active-content" : "t-content"
                }
              >
                <h2>Fastest delivery</h2>

                <p>
                  Same-day delivery: Some courier companies and online stores
                  can deliver your order on the same day. This service is
                  usually available in a specific area and is subject to the
                  time of ordering.
                </p>
              </div>

              <div
                className={
                  toggleState === 3 ? "t-content  active-content" : "t-content"
                }
              >
                <h2>Desired measuremen</h2>

                <p>
                  The product is available in every dimension, you can find out
                  by contacting the company.
                </p>
              </div>
              <div
                className={
                  toggleState === 4 ? "t-content  active-content" : "t-content"
                }
              >
                <h2>Working capital finance</h2>

                <p>
                  We understand that purchasing furniture can be a big
                  investment, which is why we offer financing options to make it
                  more affordable. With our financing plans, you can spread out
                  the cost of your purchase over time, making it easier to
                  budget for your new furniture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const t = (a) => a;
export default connect(t)(SingleCard);
