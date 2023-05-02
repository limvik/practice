import React from "react";

class BoardHeading extends React.Component {
    //번호 제목 작성자 조회수 4개 컬럼으로 1개 행 구성
    constructor(props) {
        super(props);
        this.columnName = props.columnName;
    }

    render() {
        return (
            <th>{this.columnName}</th>
        );
    }
}

class BoardRow extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
    }

    render() {
        return (
            <tr>
                <td className="board-row">{this.props.seq}</td>
                <td className="board-row">{this.props.title}</td>
                <td className="board-row">{this.props.writer}</td>
                <td className="board-row">{this.props.view}</td>
            </tr>
        );
    }
}

class BoardList extends React.Component {  

    render() {

        const columnNames = ["번호", "제목", "작성자", "조회수"];

        const board = [
            {seq:'1', title:'제목1', writer:"작성자1", view:"10"},
            {seq:'2', title:'제목2', writer:"작성자2", view:"11"},
            {seq:'3', title:'제목3', writer:"작성자3", view:"30"},
            {seq:'4', title:'제목4', writer:"작성자4", view:"55"},
            {seq:'5', title:'제목5', writer:"작성자5", view:"0"}
                ];
        return (
        <table className="board-list" border="3">
            <thead><tr>
            {columnNames.map((v, i)=> <BoardHeading columnName={v} />)}
            </tr></thead>
            <tbody>
            {board.map((v, i)=> <BoardRow seq={v.seq} title={v.title} writer={v.writer} view={v.view} />)}
            </tbody>
        </table>
        );
    }

}

export default BoardList