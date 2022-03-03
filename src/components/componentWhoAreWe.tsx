import Image from "next/image";

export const WhoAreWe = () => {
  return (
    <div className="flex text-white flex-wrap container gap-x-20 my-20 px-10  justify-between">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="flex-1 h-[70vh] object-contain "
        src="/images/who_are_we.png"
        alt="who are we"
      ></img>
      <div className="flex-1">
        <h2 className="text-6xl">Who are we?</h2>
        <p className="text-lg mt-5">
          It is the largest of its sorts in the City of Joy. A multitude of
          myriad patterned events attracts thousands of students from technical
          and non technical institutes throughout the nation. Interesting
          competitive events, inspiring lectures, informative seminars and
          delectable entertainmentshows promote creative thinking in the spheres
          of technology, science, and management. Since its conception, brand
          Srijan has been growing exponentially. Started by a handful of
          technocrats, it is now nurtured by hundreds of volunteers and scores
          of sponsors. We strive to let vanity stay out of the picture and have
          pledged work continuously with dedicated hearts to see SRIJAN become
          the favorite destination for all the dreamers and believers. Our track
          record is not a license to rest, but a challenge from our predecessors
          which we gladly accept.
        </p>
      </div>
    </div>
  );
};
