import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostlistContext } from "../store/post-list-store";
import Welcome_Msg from "./Welcome_Msg";
import Loading_spineer from "./Loading__spinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostlistContext);

  // const handleClick = () => {
  // setFetching(true);
  // fetch("https://dummyjson.com/posts")
  //   .then((res) => res.json())
  //   .then((obj) => {
  //     initialpost(obj.posts);
  //     setFetching(false);
  //   });
  // };

  return (
    <>
      {fetching && <Loading_spineer></Loading_spineer>}
      {!fetching && postList.length === 0 && <Welcome_Msg />}

      {!fetching &&
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
};
export default PostList;
