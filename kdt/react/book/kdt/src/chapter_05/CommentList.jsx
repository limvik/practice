import React from 'react';
import Comment from "./Comment"

const comments = [
    {
        name: 'John',
        comment: 'Hello',
    },
    {
        name: 'Mary',
        comment: 'Hi',
    },
    {
        name: 'Peter',
        comment: 'Hey',
    },
];

function CommentList(props) {
    return (
        <div>
            {
                comments.map((comment) => {
                    return (
                        <Comment name={comment.name} comment={comment.comment} />
                    );
                })
            }
        </div>
    );
}

// <Comment name="John" comment="Hello"/>
// <Comment name="Mary" comment="Hi"/>
// <Comment name="Peter" comment="Hey"/>

export default CommentList;