import {useState} from "react";
import Image from "next/image";
import { EventImg } from "./componentEventImg";

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
    }

    return (
        <div>
            <div className="flex flex-row justify-around">
                <div className={comedy? "text-white text-4xl" : "text-gray-500 text-4xl"} onClick={selectComedy}>Comedy Night</div>
                <div className={cultural? "text-white text-4xl" : "text-gray-500 text-4xl"} onClick={selectCultural}>Cultural Night</div>
                <div className={special? "text-white text-4xl" : "text-gray-500 text-4xl"} onClick={selectSpecial}>Special Attraction</div>
            </div>
            <div>
                {comedy? <EventImg />: null}
                {cultural? <EventImg />: null}
                {special? <EventImg />: null}
            </div>
        </div>
    )
};