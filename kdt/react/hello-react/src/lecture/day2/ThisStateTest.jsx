import React from 'react'

class User extends React.Component {

    constructor(props) {
        super(props);
        this.id = "프로퍼티변수 id";
        this.state = {
            stateid: "state id",
        };
    }

    render() {
        let change = () => {
            this.id = this.id + "변경";
            console.log(this.id);
            this.setState({
                stateid: this.state.stateid + "변경",
            })
        }
        return (
            <div>
                <h3>this.props.id = {this.props.id}는 불변입니다.</h3>
                <h3 onClick={change}>this.id = {this.id}</h3>
                <h3>this.state.stateid = {this.state.stateid}</h3>
            </div>
        );
    }
}

export default User;