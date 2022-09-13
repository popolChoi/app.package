/* eslint-disable no-unused-vars */
import React, {useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import {Switch, Button} from '@mui/material';

import { useSelector, useDispatch } from "react-redux";
import { increseCount } from "./module/counter";

function RoutesFunction(){
	return (
		<React.Fragment>
			<Button href={'https://mui.com/'}  target="_blank" >emotion</Button>
			<Switch
				// checked={checked}
				// onChange={handleChange}
				inputProps={{ 'aria-label': 'controlled' }}
			/>
			<BrowserRouter 
				// basename={initial}
			> 

				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/proxy_test">프록시테스트</Link></li>
					<li><Link to="/redux">리덕스테스트</Link></li>

				</ul>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/proxy_test" element={<Proxytest />} />
					<Route path="/redux" element={<ReduxTest />} />

				</Routes>
			</BrowserRouter> 
		</React.Fragment>
		
	
            
	) 
}

export default RoutesFunction;

const Home = () => {return 'Hello World';};

const url = `${process.env.REACT_APP_JSON_SERVER}/**`;
function Proxytest() {
	const [count, setCount] = useState(null);
	
	useEffect(() => {
		axios.get(url)
			.then(response => {
				setCount(response.data);
			})
	}, []);

	return <React.Fragment>
		{url}
		<pre>
			{count ? JSON.stringify(count,null, 2) : null }
		</pre>
	</React.Fragment>;
};



function ReduxTest(){

	const dispatch = useDispatch();
	const { count } = useSelector(state => state.counter);
	const increse = () => {
		// store에 있는 state 바꾸는 함수 실행
		dispatch(increseCount(count + 1));
	  };
	return (
		<div>
			{count}
			<button onClick={increse}>증가</button>
		</div>
	)
}
