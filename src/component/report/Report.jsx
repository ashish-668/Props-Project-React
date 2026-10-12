import Heading from "../common/Heading";
// import Podcast from "../podcast/Podcast";
import bgimg from "../../assets/images/png/bgimg.png";
import Button from "../common/Button";
import Badge from "../common/Badge";
import Paragraph from "../common/Paragraph";


const Report = () => {
  return (
    <>
        <section className="bg-black flex flex-col items-center justify-center min-h-screen">
        <div className="mx-auto w-full max-w-330 px-5">
          <div
            style={{ backgroundImage: `url(${bgimg})` }}
            className="flex w-full items-center justify-center bg-cover bg-center bg-no-repeat pt-60.25 pb-25.25">
            <div className="flex w-full items-center flex-col justify-center">
              <div className="flex w-full items-center justify-center">
                <Badge Tag="Monthly Reports" />
              </div>
              <div className="w-full mt-3.25 max-w-142.5">
                <Heading Heading="AI Native Insights, Delivered Monthly."/>
                 </div>
                <div className="mt-5 max-w-162.75">
                  <Paragraph Para="Get the distilled insights, strategic frameworks, and real-world case studies our experts use to guide the world's leading companies. Straight to your inbox." />
                </div>
             
              <div className="mt-7.5"><Button Button="Explore Our Book" link="/Home"/></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Report;
