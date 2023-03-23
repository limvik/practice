import { useState } from 'react';
function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
    <div>
	  <Header title="Develop. Preview. Ship. 🚀" />
	  <ul>
	    {names.map((name) => (
	        <li key={name}>{name}</li>
	    ))}
	  </ul>

	  <button onClick={handleClick}>Like ({likes})</button>
	</div>
    );
}

// nextjs를 이용하면, jsx 코드만 남게된다.
// nextjs에는 index.html은 존재하지 않고, pages 디렉터리에 index.js를 위치시킨다.
// index.js가 변경되면 fast refresh 기능이 있어 즉각적인 반영이된다.
// https://nextjs.org/docs/basic-features/fast-refresh
// react는 library고 react만 사용해서 application을 만들려면 nextjs를 사용할 때 보다 작업이 더 필요하다.
// https://nextjs.org/learn/foundations/from-react-to-nextjs/getting-started-with-nextjs