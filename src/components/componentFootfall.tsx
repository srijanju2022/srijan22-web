import { FootFallCircles } from "./componentFootfallCircle";

export const FootFall = () => {
    return(
        <div className="flex flex-col mb-20 text-white">
            <div className="flex flex-row mb-20">
                <h1 className=" font-bold text-6xl mr-20">Our Footfalls:</h1>
                <p>Social Media is an amazing tool, but it's really the face-to-face interaction that makes 
                a long-lasting <br/> impact. The following data is calculated on the basis of number of On-Day registrations, 
                feedback forms <br/> and ID Cards.</p>
            </div>
            <div className="flex flex-row justify-between items-center font-semibold" style={{
                paddingLeft: "10%",
                paddingRight: "10%",
            }}>
            
                <FootFallCircles />

            </div>
        </div>
    )
};