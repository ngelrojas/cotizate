import React from "react";
import Post from "../post";
import { GroupSingle, Single } from './styles';


const ListPosts = () => {
  return(
    <>
      <GroupSingle>
        <Single>
          <Post />
        </Single>

        <Single>
          <Post />
        </Single>

        <Single>
          <Post />
        </Single>


        <Single>
          <Post />
        </Single>

        <Single>
          <Post />
        </Single>

        <Single>
          <Post />
        </Single>
      </GroupSingle>
    </>
  )
}

export default ListPosts;
