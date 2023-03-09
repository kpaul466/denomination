
import './comp.css';
import {Routes, Route } from "react-router-dom";
import Banking from './banking'
import History from './history'
import Top from './top'
import Bottom from './bottom'
import Closing from './closing'
 const Home = () =>
 {
 	return(

 		<>
 			<Top/>
            <div style={{overflow:"hidden"}}>
			<Routes>
 				<Route path="/" element={<Banking />} />
  				<Route path="closing" element={<Closing />} />
  				<Route path="history" element={<History />} />
    		</Routes>
        	</div>
            <Bottom/>
 		</>


 		);
 }
 export default Home;