/* eslint-disable react/prop-types */
const Wrapper = ({ children, className }) => {
  return (
    <div
      className={`2xl:px-0 sm:px-8 px-4 xl:max-w-9xl md:max-w-7xl mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
