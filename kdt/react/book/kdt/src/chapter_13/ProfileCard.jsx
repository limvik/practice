import Card from "./Card";

function ProfileCard(props) {
    return (
        // title = name
        <Card title="Jordan" backgroundColor="#4ea04e">
            <p>Hi, My name is Jordan</p>
            <p>I'm a web developer</p>
        </Card>
    );
}

export default ProfileCard;