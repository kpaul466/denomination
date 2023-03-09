const Top = ()=>{
	var date = new Date();
	return(
			<div className="topbar">
				{date.toString().slice(0,21)}
			</div>
		);
}
export default Top;