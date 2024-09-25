import ReactLoading from "react-loading";

const Loader = () => {
  return (
    <div className='z-[999] fixed  w-full flex justify-center items-center bg-n-8/90 h-[100vh] top-0 left-0 '>
      <ReactLoading
        type='spinningBubbles'
        color='#fff'
        height={100}
        width={100}
      />
    </div>
  );
};

export default Loader;
