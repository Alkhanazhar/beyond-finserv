import { InfiniteMovingCards } from "../ui/infinte-carousel";

const BrokerLicense = () => {
  const arrayOfTen = Array.from({ length: 9 }, (_, index) => index + 1);
  const arrayOfTen2 = Array.from({ length: 9 }, (_, index2) => index2 + 10);
  console.log(arrayOfTen);
  console.log(arrayOfTen2);
  return (
    <>
      <div className="flex gap-2 text-center flex-col mt-8 justify-center my-4 md:my-8">
        <InfiniteMovingCards speed="1.4" items={arrayOfTen} />
        <InfiniteMovingCards
          speed="1.4"
          items={arrayOfTen2}
          direction="reverse"
          second={true}
        />
      </div>
    </>
  );
};

export default BrokerLicense;
