import { AiFillDelete } from "react-icons/ai";

import { PostlistContext } from "../store/post-list-store";
import { useContext, useState } from "react";
import LikeButton from "./LikeBtn";
import DislikeButton from "./DisLike";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostlistContext);
  const handledelete = () => {
    deletePost(post.id);
  };
  return (
    <div className="card post-card card-div " style={{ width: "44rem" }}>
      <div className="card-body cardBody  ">
        <div>
          <div>
            {" "}
            <h5 className="card-title varela-round-regular ">{post.title}</h5>
          </div>
          <div>
            {" "}
            <p className="card-text tilt-neon  post-body">{post.body}</p>
          </div>
          <div className="other-post-comp mt-2">
          {post.tags.map((tags) => (
            <a
              className="badge rounded-pill text-bg-primary hashtags"
              key={tags} 
              href={`https://www.google.com/search?q=${tags}`} target="_blank"
            >
             
              #{tags}
            </a>
          ))}
          </div>
          <div  className="Like-del-comp mt-2">
          <div className="LikeBtn">
            <LikeButton  />

            </div>
            <div>
              <DislikeButton></DislikeButton>
            </div>
              <div style={{marginTop:"12px"}}>
              <span
                className="badge text-bg-danger delete"
                key={post.id}
                onClick={handledelete}
              >
                {AiFillDelete()}
              </span>
              </div>
              </div>
            </div>
          </div>
        </div>
     
  );
};
export default Post;
