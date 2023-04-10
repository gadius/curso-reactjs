
import Post from "./Post";
import NewPost from "./NewPost";

function PostList(props){
    return (
        <>  
        <NewPost/>
        <ul>
            <Post author="test1" body="test msj"/>
            <Post author="test2" body="test msj2"/>
            <Post author="test3" body="test msj3"/>
            <Post author="test4" body="test msj4"/>
        </ul>
            
        </>
    );

}

export default PostList;
