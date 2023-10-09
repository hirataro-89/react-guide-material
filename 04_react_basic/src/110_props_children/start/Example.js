import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan", color: "blue" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

const Example = () => {
  return (
    <div>
      <Container title="Childrenとは？">
        <Profile {...profile[0]} />
        <Profile {...profile[1]} />
      </Container>
      <Container title='個別にわたす' children={
        [
          <Profile key={profile[0].name} {...profile[1]}/>,
          <Profile key={profile[1].name} {...profile[0]}/>
        ]
      }/>
    </div>
  );
};

export default Example;
