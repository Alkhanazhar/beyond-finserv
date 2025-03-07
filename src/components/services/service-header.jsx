const ServiceHeader = ({ title }) => {
  return (
    <div className="bg-primary-950 p-6 lg:p-16 text-primary-50 rounded-xl mt-4">
      <h1 className="py-2 text-start text-2xl sm:text-3xl lg:text-4xl font-[600] bg-clip-text text-transparent bg-gradient-to-b from-secondary-400 to-secondary-500  bg-opacity-50">
        {title}
      </h1>
    </div>
  );
};

export default ServiceHeader;
