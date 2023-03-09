

			<div className="bottombar">
				<div className="navbtns">
					Banking
				</div>
				<div className="vline1"></div>
			
				<div className="navbtns">
					Closing
				</div>
				<div className="vline2"> </div>
				<div className="navbtns">
					History
				</div>
			</div>


(this.n2000[1]+this.n500[1]+this.n200[1]+this.n100[1]+this.n50[1]+this.n20[1]+this.n10[1]+this.coin)
		allTotal:(c1.n2000[1]+c1.n500[1]+c1.n200[1]+c1.n100[1]+c1.n50[1]+c1.n20[1]+c1.n10[1]+c1.coin)
						




						<div className="counterBox">
							<strong>ALL COUNTER </strong><br/>
							Total<hr/>
							<strong>{cTotal.n2000[1]+cTotal.n500[1]+cTotal.n200[1]+cTotal.n100[1]+cTotal.n50[1]+cTotal.n20[1]+cTotal.n10[1]+Number(c1.coin)}</strong><hr/>

							2000 X <input type="number" className="notes" value={cTotal.n2000[0]} 
									onChange={e=>{setC1({
												... cTotal,
												n2000:[e.target.value,2000*e.target.value],
												});
											}}/> 
							={cTotal.n2000[1]} <hr/>

							500 X <input type="number" className="notes" value={cTotal.n500[0]} 
									onChange={e=>{setC1({
												... cTotal,
												n500:[e.target.value,500*e.target.value],
												});
											}}/> 
							={cTotal.n500[1]} <hr/>
							
							200 X <input type="number" className="notes" value={cTotal.n200[0]} 
									onChange={e=>{setC1({
												... cTotal,
												n200:[e.target.value,200*e.target.value],
												});
											}}/> 
							={cTotal.n200[1]} <hr/>

							100 X <input type="number" className="notes" value={cTotal.n100[0]} 
									onChange={e=>{setC1({
												... cTotal,
												n100:[e.target.value,100*e.target.value],
												});
											}}/> 
							={cTotal.n100[1]} <hr/>

							50 X <input type="number" className="notes" value={cTotal.n50[0]} 
									onChange={e=>{setC1({
												... cTotal,
												n50:[e.target.value,50*e.target.value],
												});
											}}/> 
							={cTotal.n50[1]} <hr/>

							20 X <input type="number" className="notes" value={cTotal.n20[0]} 
									onChange={e=>{setC1({
												... cTotal,
												n20:[e.target.value,20*e.target.value],
												});
											}}/> 
							={cTotal.n20[1]} <hr/>
							10 X <input type="number" className="notes" value={cTotal.n10[0]} 
									onChange={e=>{setC1({
												... cTotal,
												n10:[e.target.value,10*e.target.value],
												});
											}}/> 
							={cTotal.n10[1]} <hr/>
							COINS <input type="number" className="notes" value={cTotal.coin} 
									onChange={e=>{setC1({
												... cTotal,
												coin:e.target.value,
												});
											}}/> 
							={cTotal.coin} <hr/>
							

						</div>