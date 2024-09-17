type menuProp = {
  setMenu: (value: string) => void;
};
const Menubar = (props: menuProp) => {
  return (
    <div className="flex shadow-sm h-10 p-2">
      <h1
        onClick={() => props?.setMenu("shirt")}
        className="ml-48 cursor-pointer"
      >
        Shirt
      </h1>
      <h1
        onClick={() => props?.setMenu("jacket")}
        className="ml-5 cursor-pointer"
      >
        Jacket
      </h1>
      <h1
        onClick={() => props?.setMenu("phones")}
        className="ml-5 cursor-pointer"
      >
        Phones
      </h1>
      <h1
        onClick={() => props?.setMenu("jewelery")}
        className="ml-5 cursor-pointer"
      >
        Jewelery
      </h1>
      <h1
        onClick={() => props?.setMenu("electronics")}
        className="ml-5 cursor-pointer"
      >
        Electronics
      </h1>
      <h1
        onClick={() => props?.setMenu("women")}
        className="ml-5 cursor-pointer"
      >
        Women's clothing
      </h1>
      <h1
        onClick={() => props?.setMenu("men")}
        className="ml-5 cursor-pointer"
      >
        Men's clothing
      </h1>
    </div>
  );
};

export default Menubar;
