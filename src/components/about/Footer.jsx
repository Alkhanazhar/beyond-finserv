import Wrapper from "../Wrapper";

const Footer = () => {
  return (
    <div className="bg-blue-100 p-8 ">
      <Wrapper>
        <div className="flex flex-col sm:flex-row justify-between items-center ">
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Our Contact Details
            </h2>
            <p className="mb-6 text-blue-900">Let’s connect.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-8">
            <div>
              <h3 className="font-bold text-blue-900 text-sm">Telephone</h3>
              <p className="text-blue-900">(702) 555-0122</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-900 text-sm">Office</h3>
              <p className="text-blue-900">
                6391 Elgin St. Celina, Delaware 10299
              </p>
            </div>
            <div>
              <h3 className="font-bold text-blue-900 text-sm">WhatsApp</h3>
              <p className="text-blue-900">+971 555 0114 321</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-900 text-sm">Email</h3>
              <p className="text-blue-900">mail@mail.com</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
