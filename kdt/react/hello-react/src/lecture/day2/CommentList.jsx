import Comment from "./Comment";

const comments =[
    {id: "홍길동", comment: "안녕하세요 리액트입니다."},
    {id: "이인제", comment: "리액트 재밌어요."},
    {id: "윤인성", comment: "저도 배우고싶어요."},
];

function CommentList(){
    return(
        <div>
            {comments.map((v, i) => (
                <Comment key={i} id={v.id} comment ={v.comment} />
            ))}
        </div>
    );
}

export default CommentList;