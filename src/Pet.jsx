const Pet = (props) => {
  return (
    <div>
      {props.name}
      {props.animal}
      {props.breed}
    </div>
  );
};

export default Pet;
