import { ChakraProvider } from "@chakra-ui/react";

import Todo from "./components/Todo";

const Example = () => {
	return (
		<>
			<ChakraProvider />

			<Todo />
		</>
	);
};

export default Example;
