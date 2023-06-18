import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#5736A3"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ marginLeft: "48%" }}
      visible={true}
    />
  );
};

export default Loader;
