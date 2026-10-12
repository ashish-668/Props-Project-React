import Heading from "../common/Heading";
// import Podcast from "../podcast/Podcast";
import bgimg from "../../assets/images/png/bgimg.png";
import Button from "../common/Button";
import Badge from "../common/Badge";
import Paragraph from "../common/Paragraph";

const Podcast = () => {
  return (
    <>
         <section className="bg-black flex flex-col items-center justify-center min-h-screen">
        <div className="mx-auto w-full max-w-330 px-5">
          <div
            style={{ backgroundImage: `url(${bgimg})` }}
            className="flex w-full items-center justify-center bg-cover bg-center bg-no-repeat pt-60.25 pb-25.25">
            <div className="flex w-full items-center flex-col justify-center">
              <div className="flex w-full items-center justify-center">
                <Badge Tag="The Community" />
              </div>
              <div className="w-full mt-3.25 max-w-126">
                <Heading Heading="Stay in Tune With the Next Wave"/>
                 </div>
                <div className="mt-5 max-w-177.25">
                  <Paragraph Para="The conversation doesn't end when the episode does. Join the Waves of Innovation community to get our monthly report, access our strategic frameworks, and connect with other technology leaders." />
                </div>
             
              <div className="mt-7.5"><Button Button="Explore Our Book" link="/Report"/></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Podcast;
