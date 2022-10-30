import {useRouter} from "next/router";
import React from 'react'

function CommentDetails() {
    const router = useRouter();
    const {blogId, commentId} = router.query;

    console.log("blogId",blogId, "commentId : ", commentId);
  return (
    <div>{commentId} comment for blog : {blogId}</div>
  )
}

export default CommentDetails;