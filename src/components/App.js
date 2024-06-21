import React from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import HogList from "./HogList";

import hogs from "../porkers_data";

console.log(hogs)

function App() {
	return (
		<div className="App">
			<Nav />
			<HogList hogs={hogs}/>
		</div>
	);
}

export default App;
