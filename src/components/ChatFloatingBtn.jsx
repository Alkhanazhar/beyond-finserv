import { FaWhatsapp } from "react-icons/fa";

const ChatFloatingBtn = () => {
  return (
    <>
      <a
        href="https://wa.me/+447488848654?text=Hello%20there!"
        target="_blank"
        className="whatsapp-link inline-block"
      >
        <div className="z-[1000] fixed sm:bottom-8 w-12 h-12 flex items-center justify-center md:w-16 md:h-16  sm:right-8 bottom-6 right-6 cursor-pointer bg-gradient-to-r from-primary-950 via-primary-900 to-primary-500 transform hover:scale-125 duration-300 text-primary-50 p-3 sm:p-3 shadow-lg shadow-black/50 rounded-full">
          <FaWhatsapp size={32} className="hidden sm:block" />
          <FaWhatsapp size={26} className="sm:hidden block" />
        </div>
      </a>
    </>
  );
};

export default ChatFloatingBtn;
