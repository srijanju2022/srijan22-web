import { FootFallCircles } from "./componentFootfallCircle";

export const FootFall = () => {
  return (
    <div className="my-32 text-white">
      <div className="flex flex-wrap space-y-5 mx-10 flex-row mb-20">
        <h1 className="font-bold text-6xl mr-20">Our Footfalls:</h1>
        <p>
          Social Media is an amazing tool, but it&apos;s really the face-to-face
          interaction that makes a long-lasting impact. The following data is
          calculated on the basis of number of On-Day registrations, feedback
          forms and ID Cards.
        </p>
      </div>
      <div
        className="flex flex-wrap justify-between items-end space-y-10 font-semibold"
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <FootFallCircles />
      </div>
    </div>
  );
};
