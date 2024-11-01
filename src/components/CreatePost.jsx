import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PostlistContext } from "../store/post-list-store";

const CreatePost = () => {
  const navigate = useNavigate();
  const { addPost } = useContext(PostlistContext);
  const useridelement = useRef();
  const titleelement = useRef();
  const bodyelement = useRef();
  const reactionelement = useRef();
  const tagelement = useRef();

  const handleclick = (event) => {
    event.preventDefault();
    const userid = useridelement.current.value;
    const title = titleelement.current.value;
    const body = bodyelement.current.value;
    const reaction = reactionelement.current.value;
    const tag = tagelement.current.value.split(" ");

    useridelement.current.value = "";
    titleelement.current.value = "";
    bodyelement.current.value = "";
    reactionelement.current.value = "";
    tagelement.current.value = "";
    addPost(userid, title, body, reaction, tag);
    navigate("/");
  };

  return (
    <form className="createpost">
      <div className="mb-3">
        <input
          ref={useridelement}
          type="text"
          placeholder="enter your user id"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="title"
          className="form-control"
          ref={titleelement}
        />
      </div>
      <div className="mb-3">
        <input
          ref={bodyelement}
          type="text"
          placeholder=" what's new to share today!!!"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          ref={reactionelement}
          type="text"
          placeholder="Enter number of likes"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          ref={tagelement}
          placeholder="Feel free to add hashtags relevant to your post to help others discover it!"
          className="form-control"
        />
      </div>
      <center>
        {/* <button type="submit" className="btn btn-primary" onClick={handleclick}>
          Post
        </button> */}

        <div className="buttons">
          <button className="blob-btn" onClick={handleclick}>
            Post
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
      </center>
    </form>
  );
};
export default CreatePost;
