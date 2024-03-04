type Props = {
  firstHeading: string;
  secondHeading: string;
};

const Cards = ({ firstHeading, secondHeading }: Props) => {
  return (
    <div className=" flex items-center  justify-center   py-4">
      <section className="w-[300px] border  p-6 text-center">
        <h3>{firstHeading}</h3>
        <p>{secondHeading}</p>
      </section>
    </div>
  );
};

export default Cards;
