import Button from "./Button";
const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "News",
    "Comedy",
    "Shopping",
    "Cricket",
    "Entertainment",
    "Live",
    "News",
    "Comedy",
    "Shopping",
    "Cricket",
  ];
  return (
    <>
      {list.map((listItem, index) => {
        return <Button key={index} name={listItem}></Button>;
      })}
    </>
  );
};

export default ButtonList;
