import React from "react";

const Hero = () => {
  return (
    <>
      <div className="jumbotron p-5">
        <h1 className="display-4 fs-4">This is the hero !</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <a className="" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
    </>
  );
};

export default Hero;
