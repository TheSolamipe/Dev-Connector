import React from "react";
import { Bone } from "react-loading-skeleton-placeholders";

const Loading = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">
              <Bone width={10} />
            </h1>
            <div className="lead text-center">
              <Bone />
            </div>
            <form>
              <div className="form-group">
                <Bone height={25} />
              </div>
              <div className="form-group">
                <Bone height={25} />
              </div>
              <Bone />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
