import Image from 'next/image';

export const EventImg = () => {
    const arr = [...Array(3)]
    return(
        <div className="flex flex-col my-10">
            <div className="flex flex-row justify-around mb-10">
            {
                arr.map((i, idx) => (
                    <div key={idx} style={{boxShadow: "5px 5px white"}} className="h-40 w-40 border-2 relative bg-white"
                    ><Image src="/special/Img.jpg" className="p-10" objectFit="contain" layout="fill"/></div>
                ))
            }
            </div>
        </div>
    );
}