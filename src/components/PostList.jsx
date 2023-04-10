import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostList(props) {
  const [enteredBody, setEnteredBody] = useState(""); //Only useState[0] & useState[1] are valid, nothing more, nothing less.
  const [enteredAuthor, setEnteredAuthor] = useState(""); //Only useState[0] & useState[1] are valid, nothing more, nothing less.

  function bodyChangeHandler(event) {
    event.preventDefault();
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    event.preventDefault();
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
        <Modal>
            <NewPost
                onBodyChange={bodyChangeHandler}
                onAuthorChange={authorChangeHandler}
            />
        </Modal>
      <ul>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="test2" body="test msj2" />
        <Post author="test3" body="test msj3" />
        <Post author="test4" body="test msj4" />
      </ul>
    </>
  );
}

export default PostList;
