import "./Child.css";
import React from "react";

const Child = () => {
	return (
		<React.Fragment key="">
			<div className="component">
				<h3>Hello Component</h3>
			</div>
			<h3>Hell fragment</h3>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium vitae nihil cum facere
				animi alias commodi dolores aperiam maiores, quos provident incidunt repudiandae, natus id
				saepe eius labore consequuntur ratione.
			</p>
		</React.Fragment>
	);
};

export default Child;
