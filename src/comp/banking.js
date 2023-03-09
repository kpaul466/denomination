import {useState,useEffect} from 'react';
const Banking = ()=>{
	const [c1,setC1]=useState({
		n2000:[0,0],
		n500:[0,0],
		n200:[0,0],
		n100:[0,0],
		n50:[0,0],
		n20:[0,0],
		n10:[0,0],
		coin:0,
	});
	const [c2,setC2]=useState({
		n2000:[0,0],
		n500:[0,0],
		n200:[0,0],
		n100:[0,0],
		n50:[0,0],
		n20:[0,0],
		n10:[0,0],
		coin:0,
	});
	const [c3,setC3]=useState({
		n2000:[0,0],
		n500:[0,0],
		n200:[0,0],
		n100:[0,0],
		n50:[0,0],
		n20:[0,0],
		n10:[0,0],
		coin:0,
	});
	const [cTotal,setCTotal]=useState({
		n2000:[0,0],
		n500:[0,0],
		n200:[0,0],
		n100:[0,0],
		n50:[0,0],
		n20:[0,0],
		n10:[0,0],
		coin:0,
	});

	



	const [c1500,setC1500]=useState(0);
	var [c1Total,setC1Total]=useState(0);
	const calculateTotalC1 =(val)=>{
		var c1totalval=c1Total+val;
		setC1Total(c1totalval);
	}
	return(
			<>
				<div className="CCBox">
					<div className="CCBoxRow">
						<div className="totalBox">
						<strong><h4>All Total</h4></strong>
						<hr/>
						{ c1.n2000[1]+c1.n500[1]+c1.n200[1]+c1.n100[1]+c1.n50[1]+c1.n20[1]+c1.n10[1]+Number(c1.coin)+c2.n2000[1]+c2.n500[1]+c2.n200[1]+c2.n100[1]+c2.n50[1]+c2.n20[1]+c2.n10[1]+Number(c2.coin) +c3.n2000[1]+c3.n500[1]+c3.n200[1]+c3.n100[1]+c3.n50[1]+c3.n20[1]+c3.n10[1]+Number(c3.coin) }
						<hr/>
						<p>2000 X {cTotal.n2000[0]} = {cTotal.n2000[1]}</p>
						<p>500 X {cTotal.n500[0]} = {cTotal.n500[1]}</p>
						<p>200 X {cTotal.n200[0]} = {cTotal.n200[1]}</p>
						<p>100 X {cTotal.n100[0]} = {cTotal.n100[1]}</p>
						<p>50 X {cTotal.n50[0]} = {cTotal.n50[1]}</p>
						<p>20 X {cTotal.n20[0]} = {cTotal.n20[1]}</p>
						<p>10 X {cTotal.n10[0]} = {cTotal.n10[1]}</p>
						<p>COIN = {cTotal.coin}</p>
						</div>
						<div className="counterBox">
							<strong>COUNTER-1</strong><br/>
							Total<hr/>
							<strong>{c1.n2000[1]+c1.n500[1]+c1.n200[1]+c1.n100[1]+c1.n50[1]+c1.n20[1]+c1.n10[1]+Number(c1.coin)}</strong><hr/>

							2000 X <input type="number" className="notes" value={c1.n2000[0]===0?"":c1.n2000[0]} 
									onChange={e=>{setC1({
												... c1,
												n2000:[e.target.value,2000*e.target.value],
												});
												setCTotal({
													...cTotal,
													n2000:[e.target.value,2000*e.target.value],
												
												});

											}}/> 
							={c1.n2000[1]} <hr/>

							500 X <input type="number" className="notes" value={c1.n500[0]===0?"":c1.n500[0]} 
									onChange={e=>{setC1({
												... c1,
												n500:[e.target.value,500*e.target.value],
												});
											}}/> 
							={c1.n500[1]} <hr/>
							
							200 X <input type="number" className="notes" value={c1.n200[0]===0?"":c1.n200[0]} 
									onChange={e=>{setC1({
												... c1,
												n200:[e.target.value,200*e.target.value],
												});
											}}/> 
							={c1.n200[1]} <hr/>

							100 X <input type="number" className="notes" value={c1.n100[0]===0?"":c1.n100[0]} 
									onChange={e=>{setC1({
												... c1,
												n100:[e.target.value,100*e.target.value],
												});
											}}/> 
							={c1.n100[1]} <hr/>

							50 X <input type="number" className="notes" value={c1.n50[0]===0?"":c1.n50[0]} 
									onChange={e=>{setC1({
												... c1,
												n50:[e.target.value,50*e.target.value],
												});
											}}/> 
							={c1.n50[1]} <hr/>

							20 X <input type="number" className="notes" value={c1.n20[0]===0?"":c1.n20[0]} 
									onChange={e=>{setC1({
												... c1,
												n20:[e.target.value,20*e.target.value],
												});
											}}/> 
							={c1.n20[1]} <hr/>
							10 X <input type="number" className="notes" value={c1.n10[0]===0?"":c1.n10[0]} 
									onChange={e=>{setC1({
												... c1,
												n10:[e.target.value,10*e.target.value],
												});
											}}/> 
							={c1.n10[1]} <hr/>
							COINS <input type="number" className="notes" value={c1.coin===0?"":c1.coin} 
									onChange={e=>{setC1({
												... c1,
												coin:e.target.value,
												});
											}}/> 
							={c1.coin} <hr/>


							
						</div>



						<div className="counterBox">
							<strong>COUNTER-2</strong><br/>
							Total<hr/>
							<strong>{c2.n2000[1]+c2.n500[1]+c2.n200[1]+c2.n100[1]+c2.n50[1]+c2.n20[1]+c2.n10[1]+Number(c2.coin)}</strong><hr/>

							2000 X <input type="number" className="notes" value={c2.n2000[0]} 
									onChange={e=>{setC2({
												... c2,
												n2000:[e.target.value,2000*e.target.value],
												});
											}}/> 
							={c2.n2000[1]} <hr/>

							500 X <input type="number" className="notes" value={c2.n500[0]} 
									onChange={e=>{setC2({
												... c2,
												n500:[e.target.value,500*e.target.value],
												});
											}}/> 
							={c2.n500[1]} <hr/>
							
							200 X <input type="number" className="notes" value={c2.n200[0]} 
									onChange={e=>{setC2({
												... c2,
												n200:[e.target.value,200*e.target.value],
												});
											}}/> 
							={c2.n200[1]} <hr/>

							100 X <input type="number" className="notes" value={c2.n100[0]} 
									onChange={e=>{setC2({
												... c2,
												n100:[e.target.value,100*e.target.value],
												});
											}}/> 
							={c2.n100[1]} <hr/>

							50 X <input type="number" className="notes" value={c2.n50[0]} 
									onChange={e=>{setC2({
												... c2,
												n50:[e.target.value,50*e.target.value],
												});
											}}/> 
							={c2.n50[1]} <hr/>

							20 X <input type="number" className="notes" value={c2.n20[0]} 
									onChange={e=>{setC2({
												... c2,
												n20:[e.target.value,20*e.target.value],
												});
											}}/> 
							={c2.n20[1]} <hr/>
							10 X <input type="number" className="notes" value={c2.n10[0]} 
									onChange={e=>{setC2({
												... c2,
												n10:[e.target.value,10*e.target.value],
												});
											}}/> 
							={c2.n10[1]} <hr/>
							COINS <input type="number" className="notes" value={c2.coin} 
									onChange={e=>{setC2({
												... c2,
												coin:e.target.value,
												});
											}}/> 
							={c2.coin} <hr/>
							
					</div>
					<div className="CCBoxRow">
						<div className="counterBox">
							<strong>COUNTER-3</strong><br/>
							Total<hr/>
							<strong>{c3.n2000[1]+c3.n500[1]+c3.n200[1]+c3.n100[1]+c3.n50[1]+c3.n20[1]+c3.n10[1]+Number(c3.coin)}</strong><hr/>

							2000 X <input type="number" className="notes" value={c3.n2000[0]} 
									onChange={e=>{setC3({
												... c3,
												n2000:[e.target.value,2000*e.target.value],
												});
											}}/> 
							={c3.n2000[1]} <hr/>

							500 X <input type="number" className="notes" value={c3.n500[0]} 
									onChange={e=>{setC3({
												... c3,
												n500:[e.target.value,500*e.target.value],
												});
											}}/> 
							={c3.n500[1]} <hr/>
							
							200 X <input type="number" className="notes" value={c3.n200[0]} 
									onChange={e=>{setC3({
												... c3,
												n200:[e.target.value,200*e.target.value],
												});
											}}/> 
							={c3.n200[1]} <hr/>

							100 X <input type="number" className="notes" value={c3.n100[0]} 
									onChange={e=>{setC3({
												... c3,
												n100:[e.target.value,100*e.target.value],
												});
											}}/> 
							={c3.n100[1]} <hr/>

							50 X <input type="number" className="notes" value={c3.n50[0]} 
									onChange={e=>{setC3({
												... c3,
												n50:[e.target.value,50*e.target.value],
												});
											}}/> 
							={c3.n50[1]} <hr/>

							20 X <input type="number" className="notes" value={c3.n20[0]} 
									onChange={e=>{setC3({
												... c3,
												n20:[e.target.value,20*e.target.value],
												});
											}}/> 
							={c3.n20[1]} <hr/>
							10 X <input type="number" className="notes" value={c3.n10[0]} 
									onChange={e=>{setC3({
												... c3,
												n10:[e.target.value,10*e.target.value],
												});
											}}/> 
							={c3.n10[1]} <hr/>
							COINS <input type="number" className="notes" value={c3.coin} 
									onChange={e=>{setC3({
												... c3,
												coin:e.target.value,
												});
											}}/> 
							={c3.coin} <hr/>
							

						</div>
						
						</div>
					</div>
				</div>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>

			</>
		);
}
export default Banking;