import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";
import ReviewCard from "../components/ReviewCard";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Training Squad</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="logo.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,800&family=Outfit:wght@200;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav className="p-5">
        <NavBar />
      </nav>
      <main className="m-2">
        <section id="welcome">
          <div className="flex p-5 justify-evenly items-center">
            <div>
              <h1 className="text-5xl font-black">
                Join the <br /> Training Squad <br /> and gain high <br />{" "}
                Returns 💸
              </h1>
              <a href="#social">
                <button className="mt-5 p-5 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
                  Join Community !
                </button>
              </a>
            </div>

            <img
              src="stockcharticon.svg"
              style={{ height: "400px", width: "500px" }}
              alt=""
            />
          </div>
        </section>
        <section id="what" className="flex flex-col justify-center ml-28">
          <h2 className="text-3xl mb-1">What we do ⁉️</h2>
          <div className="flex">
            <div className="w-1/2">
              <ul className="list-disc">
                <li className="m-1">Trader Community for Stack Trading.</li>
                <li className="m-1">
                  Learn Institutional Price action and Master the Market.
                </li>
                <li className="m-1">Learn Setups, Strategies.</li>
              </ul>
            </div>
            <div className="w-1/2">
              <ul className="list-disc">
                <li className="m-1">
                  Updates on daily market setups and breakdowns.
                </li>
                <li className="m-1">
                  Get Free Educational materials for trading and stock market.
                </li>
                <li className="m-1">
                  Guidance of Market experts and Analysts.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="review" className="ml-28 mr-28 mt-5">
          <h2 className="text-2xl mb-1">Hear from Community Members 💭</h2>
          <div className="flex justify-center">
            <ReviewCard
              name="Name"
              image="https://i.pravatar.cc/300"
              review="Must join community da yebba !"
            />
            <ReviewCard
              name="Name"
              image="https://i.pravatar.cc/300"
              review="Must join community da yebba !"
            />
            <ReviewCard
              name="Name"
              image="https://i.pravatar.cc/300"
              review="Must join community da yebba !"
            />
          </div>
        </section>
        <section className="ml-28 mr-28 mt-8" id="social">
          <h2 className="text-2xl mb-1">Join Our Groups</h2>
          <div className="flex justify-evenly mt-11 mb-8">
            {/* <div className="p-2">
              <a href="">
                <img src="instagram.png" className="media-links" alt="" />
              </a>
            </div> */}
            <div className="p-2">
              <a href="https://discord.gg/mFjWM8xk">
                <img src="discord.png" className="media-links" alt="" />
              </a>
            </div>
            <div className="p-2">
              <a href="https://wa.link/9bf2u8">
                <img src="whatsapp.png" className="media-links" alt="" />
              </a>
            </div>
            {/* <div className="p-2">
              <a href="">
                <img src="telegram.png" className="media-links" alt="" />
              </a>
            </div> */}
          </div>
        </section>
      </main>
      <footer className="w-full h-56 bg-black mt-12"></footer>
    </div>
  );
};

export default Home;
