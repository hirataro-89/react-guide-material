import { useState } from "react";

const Example = () => {
	const animals = ["Dog", "Cat", null, "Rat"];

	const [filterVal, setFilterVal] = useState("");

	return (
		<>
			<input type="text" value={filterVal} onChange={(e) => setFilterVal(e.target.value)} />
			<ul>
				{animals
					.filter((animal) => {
            const animalStr = animal ?? "";
						const isMatch = animalStr.indexOf(filterVal) !== -1;
						console.log(animalStr.indexOf(filterVal));
						return isMatch;
					})
					.map((animal) => {
						/* if文 */
						// if (animal === "Dog") {
						// 	return <li key={animal}>{animal}★</li>;
						// } else {
						// 	return <li key={animal}>{animal}</li>;
						// }

						/* 三項演算子 */
						// return <li key={animal} >{animal === "Dog" ? animal + "★" : animal}</li>;

            /* &&, ?? */
            return <li key={animal} >{animal ?? 'nullでした'}{animal === "Dog" && "★" }</li>; //trueの場合のみ★を表示

					})}
			</ul>
		</>
	);
};

export default Example;
