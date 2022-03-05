import { useState } from "react";
import Image from "next/image";

export const EventNav = () => {
  const [comedy, setComedy] = useState(true);
  const [cultural, setCultural] = useState(false);
  const [special, setSpecial] = useState(false);

  const selectComedy = () => {
    setComedy(true);
    setCultural(false);
    setSpecial(false);
  };

  const selectCultural = () => {
    setComedy(false);
    setCultural(true);
    setSpecial(false);
  };

  const selectSpecial = () => {
    setComedy(false);
    setCultural(false);
    setSpecial(true);
  };

  return (
    <div>
      <div className="flex flex-row justify-around">
        <div
          className={comedy ? "text-white text-4xl" : "text-gray-500 text-4xl"}
          onClick={selectComedy}
        >
          Comedy Night
        </div>
        <div
          className={
            cultural ? "text-white text-4xl" : "text-gray-500 text-4xl"
          }
          onClick={selectCultural}
        >
          Cultural Night
        </div>
        <div
          className={special ? "text-white text-4xl" : "text-gray-500 text-4xl"}
          onClick={selectSpecial}
        >
          Special Attraction
        </div>
      </div>
      <div>
        {comedy ? <div></div> : null}
        {cultural ? <div></div> : null}
        {special ? (
          <div className="flex flex-col justify-around">
            <div className="flex flex-row relative">
              <Image src="/special/Img.jpg" alt="" width={100} height={100} />
            </div>
            <div className="flex flex-row">
              <Image src="/special/Img.jpg" alt="" width={100} height={100} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
