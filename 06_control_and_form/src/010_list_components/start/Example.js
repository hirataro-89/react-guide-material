
const animals = ["Dog", "Cat", "Rat"];

const Example = ( ) => {
  const animalList = animals.map((animal) =>
    <li>Hello, {animal}</li>);
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {animalList}
      </ul>
    </>
  );
};

export default Example;
