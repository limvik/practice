function Comment(props) {
    return (<div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="avatar"
             style={{width: 50, height: 50, borderRadius: 25}}/>
        <span>{props.id}</span>
        <span>{props.comment}</span>
    </div>);
}

export default Comment;