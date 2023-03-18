import React from "react";
import { useParams } from "react-router-dom";
import classes from "./ProductDetails.module.css";

const ProductDetails = () => {
  const params = useParams();

  return (
    <React.Fragment>
      {params.productId === "1" && (
        <section className={classes.sections}>
          <div>
            <img
              src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
              alt="Colors"
              className={classes.img}
            ></img>
            <div className={classes.details}>
              <h1 className={classes.title}>Colors</h1>
              <h2>$100</h2>
              <button className={classes.rating}>4.2⭐</button>
            </div>
          </div>
          <div className={classes.products}>
            <h2>Product Detail</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <h3> Reviews </h3>
          <div className={classes.reviews}>
            <div>
              <p> John</p>
              <p>worth every rupee..</p>
              <p>⭐⭐⭐⭐</p>
            </div>
            <div>
              <p> Tyrion </p>
              <p> best!!!</p>
              <p>⭐⭐⭐</p>
            </div>
            <div>
              <p> Tyrion </p>
              <p> best!!!</p>
              <p>⭐⭐⭐</p>
            </div>
          </div>
        </section>
      )}
      {params.productId === "2" && (
        <section className={classes.sections}>
          <div>
            <img
              src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
              alt="Black and white Colors"
              className={classes.img}
            ></img>
            <div className={classes.details}>
              <h1 className={classes.title}>Black and white Colors</h1>
              <h2>$50</h2>
              <button className={classes.rating}>4.0⭐</button>
            </div>
          </div>
          <div className={classes.products}>
            <h2>Product Detail</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <h3> Reviews </h3>
          <div className={classes.reviews}>
            <div>
              <p> John</p>
              <p>worth every rupee..</p>
              <p>⭐⭐⭐⭐</p>
            </div>
            <div>
              <p> Tyrion </p>
              <p> best!!!</p>
              <p>⭐⭐⭐</p>
            </div>
            <div>
              <p> Tyrion </p>
              <p> best!!!</p>
              <p>⭐⭐⭐</p>
            </div>
          </div>
        </section>
      )}

      {params.productId === "3" && (
        <section className={classes.sections}>
          <div>
            <img
              src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
              alt="Yellow and Black Colors"
              className={classes.img}
            ></img>
            <div className={classes.details}>
              <h1 className={classes.title}>Yellow and Black Colors</h1>
              <h2>$70</h2>
              <button className={classes.rating}>3.8⭐</button>
            </div>
          </div>
          <div className={classes.products}>
            <h2>Product Detail</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <h3> Reviews </h3>
          <div className={classes.reviews}>
            <div>
              <p> John</p>
              <p>worth every rupee..</p>
              <p>⭐⭐⭐⭐</p>
            </div>
            <div>
              <p> Tyrion </p>
              <p> best!!!</p>
              <p>⭐⭐⭐</p>
            </div>
            <div>
              <p> Tyrion </p>
              <p> best!!!</p>
              <p>⭐⭐⭐</p>
            </div>
          </div>
        </section>
      )}

      {params.productId === "4" && (
        <section className={classes.sections}>
          <div>
            <img
              src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
              alt="Blue Color"
              className={classes.img}
            ></img>
            <div className={classes.details}>
              <h1 className={classes.title}>Blue Color</h1>
              <h2>$100</h2>
              <button className={classes.rating}>4.7⭐</button>
            </div>
          </div>
          <div className={classes.products}>
            <h2>Product Detail</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <h3> Reviews </h3>
          <div className={classes.reviews}>
            <div>
              <p> John</p>
              <p>worth every rupee..</p>
              <p>⭐⭐⭐⭐</p>
            </div>
            <div>
              <p> Tyrion </p>
              <p> best!!!</p>
              <p>⭐⭐⭐</p>
            </div>
            <div>
              <p> Tyrion </p>
              <p> best!!!</p>
              <p>⭐⭐⭐</p>
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default ProductDetails;
