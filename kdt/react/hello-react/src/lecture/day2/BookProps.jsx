
const HeaderParts = (props) => (<div style={{backgroundColor: 'red', color:'white'}}>
    {props.title} 책의 가격은 {props.price} 입니다.
    </div>);

const BodyParts = (props) => (<div style={{border: '1px solid blue', margin: '0 auto'}}>
    <h3>{props.totalPage}</h3>{props.body}
    </div>);

const Book = (props) => (<div>
    <HeaderParts title={props.title} price={props.title} />
    <BodyParts totalPage={props.totalPage} body={props.body} />
    </div>);

export default Book;