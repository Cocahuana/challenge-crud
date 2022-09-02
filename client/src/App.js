import './App.css';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import UpdateUser from './components/User/UpdateUser';

function App () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={ <Home /> }></Route>
				<Route exact path='/user/:id' element={ <UpdateUser /> }></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
