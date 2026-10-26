import Heading from "../common/Heading";
// import Podcast from "../podcast/Podcast";
import bgimg from "../../assets/images/png/bgimg.png";
import Button from "../common/Button";
import Badge from "../common/Badge";
import Paragraph from "../common/Paragraph";

const Home = () => {
  return (
    <>
      <section className="bg-black flex flex-col items-center justify-center min-h-screen">
        <div className="mx-auto w-full max-w-330 px-5">
          <div
            style={{ backgroundImage: `url(${bgimg})` }}
            className="flex w-full items-center justify-center bg-cover bg-center bg-no-repeat pt-60.25 pb-25.25">
            <div className="flex w-full items-center flex-col justify-center">
              <div className="flex w-full items-center justify-center">
                <Badge Tag="How It Works" />
              </div>
              <div className="w-full mt-3.25 ">
                <Heading Heading="Ready to Navigate the Next Wave?"/>
                 </div>
                <div className="mt-5 max-w-222">
                  <Paragraph Para="Join a community built for technology leaders by hands-on practitioners. Get direct access to our expert insights, monthly reports, podcast, and the strategic tools we use to guide the world’s leading companies." />
                </div>
             
              <div className="mt-7.5 mb-10"><Button Button="Join the Community" link="/podcast"/></div>
              <div className="mt-7.5"><Button variant="primary" Button="Text" link="/podcast"/></div>
            </div>
          </div>
        </div>
      </section>

      {/* <Podcast /> */}
    </>
  );
};

export default Home;