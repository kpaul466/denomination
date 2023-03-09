import { useState,useEffect} from 'react'
import { Nav, NavItem} from 'reactstrap';
import { Link } from 'react-router-dom';

const Bottom = (props)=>{
	const [activeTabs, setActiveTabs] = useState(props.name);
	return(
			<div className="bottombar">
				<Link to="/" className="nav-link">
                	{activeTabs === 'Banking' ?
                    	<div className="navbtns"
                    		onClick={() => setActiveTabs('Banking')}
                    		style={{backgroundColor:"green"}}
                    	>
							Banking
						</div>
                        :
                        <div className="navbtns"
                        onClick={() => setActiveTabs('Banking')}
                        >
							Banking
						</div>
                    }
				</Link>
              	<div className="vline1"></div>
				<Link to="/closing" className="nav-link">
                	{activeTabs === 'Closing' ?
                    	<div className="navbtns"
                    		onClick={() => setActiveTabs('Closing')}
                    		style={{backgroundColor:"green"}}
                    	>
							Closing
						</div>
                        :
                        <div className="navbtns"
                        onClick={() => setActiveTabs('Closing')}
                        >
							Closing
						</div>
                    }
           		</Link>
				<div className="vline2"> </div>
               	<Link to="/history" className="nav-link">
                	{activeTabs === 'History' ?
                    	<div className="navbtns"
                    		onClick={() => setActiveTabs('History')}
                    		style={{backgroundColor:"green"}}
                    	>
							History
						</div>
                        :
                        <div className="navbtns"
                        onClick={() => setActiveTabs('History')}
                        >
							History
						</div>
                    }
           		</Link>
			</div>
     	);
}
export default Bottom;