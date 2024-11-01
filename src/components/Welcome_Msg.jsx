import { useContext, useEffect } from "react";
import { PostlistContext } from "../store/post-list-store";
const Welcome_Msg = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">
        Welcome to Sparsh!
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Welcome to Sparsh! 🎉 Connect with friends, share moments, and explore
          the vibrant community within our platform. Whether it's expressing
          yourself through posts, discovering new interests, or engaging in
          lively discussions, we're thrilled to have you join us on this
          journey. Let's make memories, forge connections, and make every moment
          count together. Enjoy your stay! 😊 #WelcomeTo Sparsh
        </p>
        {/* <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            class="btn btn-primary btn-lg px-4 gap-3"
          
          >
          get posts
          </button>
        </div> */}
        <div className="buttons">
          <button className="blob-btn" >
            View Recent Posts
            <span className="blob-btn__inner">
              <span className="blob-btn__blobs">
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
              </span>
            </span>
          </button>
          <br />

          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  result="blur"
                  stdDeviation="10"
                ></feGaussianBlur>
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                  result="goo"
                ></feColorMatrix>
                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Welcome_Msg;
