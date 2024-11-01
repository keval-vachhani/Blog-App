import { createContext, useEffect, useReducer, useState } from "react";
let nextid = 1000;
export const PostlistContext = createContext({
  postlist: [],
  fetching:false,
  addpost: () => {},
  deletepost: () => {},
});
const postListReducer = (currentPosts, action) => {
  let newPost = currentPosts;
  if (action.type === "ADD_POST") {
    newPost = [
      {
        id: ++nextid,
        title: action.payload.title,
        body: action.payload.body,
        reactions: action.payload.reactions,
        user: action.payload.userid,
        tags: action.payload.tag,
      },
      ...currentPosts,
    ];
  } else if (action.type === "Welcome_Msg") {
    newPost = action.payload.Posts;
  } else if (action.type === "DELETE") {
    newPost = currentPosts.filter((post) => post.id !== action.payload.id);
  }
  return newPost;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchpostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj) => {
        initialpost(obj.posts);
        setFetching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  const addPost = (userid, title, body, reactions, tag) => {
    dispatchpostList({
      type: "ADD_POST",
      payload: {
        userid,
        title,
        body,
        reactions,
        tag,
      },
    });
  };
  const deletePost = (id) => {
    dispatchpostList({
      type: "DELETE",
      payload: {
        id,
      },
    });
  };
  const initialpost = (Posts) => {
    dispatchpostList({
      type: "Welcome_Msg",
      payload: {
        Posts,
      },
    });
  };

  return (
    <PostlistContext.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        initialpost: initialpost,
        fetching: fetching,
      }}
    >
      {children}
    </PostlistContext.Provider>
  );
};
export default PostListProvider;

// const DEFAULT_POST_LIST = [
//   {
//     key: nextid++,
//     title: "Learning React",
//     body: "i am currenty learning React and i enjoying it",
//     reaction: 5,
//     user: "user-1",
//     tags: ["React", "Learning"],
//   },
//   {
//     key: nextid++,
//     title: "Playing Cricket",
//     body: "palying box cricket wuth friends is such a fun time and it relax and free your mind",
//     reaction: 15,
//     user: "user-3",
//     tags: ["cricket", "FunWithFriends", "boxcricket"],
//   },
// ];
