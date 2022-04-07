import React from "react";
import notFound from "../../assets/icons/notFound.jpg";
import "./404.css";

const Page404 = () => {
  localStorage.removeItem("PictProducts")
  return (
    <div>
      <section className="d-flex flex-column justify-content-center align-items-center">
        <div className="not-found-text mt-5">
          <h1 className="text-center">I'm Sorry...</h1>
          <h3 className="text-center">
            We can't find the page that you looking for :(
          </h3>
        </div>
        <div className="not-found-img-wrapper">
          <img className="not-found-img" src={notFound} alt="PageNotFound" />
        </div>
      </section>
    </div>
  );
};

export default Page404;
