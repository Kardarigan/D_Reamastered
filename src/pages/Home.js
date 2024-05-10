import {} from "../comps/Portal";

const Home = () => {
  return (
    <main className="flex items-center">
      <div className="md:1/2">
        <h1 className="title-x">
          Hello there!
          <br />
          I'm D, just D
          <br />
          What can i do you for?
        </h1>
        <a
          href="mailto:duckduckstay@hotmail.com"
          className="button button-hell mt-5"
        >
          Say Hi <i className="fa-regular fa-hand-wave" />
        </a>
      </div>
      <div className="md:1/2">
        <div className="cube-container size-full">
          {Array.from({ length: 121 }, (_, i) => (
            <div className="trigger" key={i}></div>
          ))}
          <div className="monitor">
            <div className="monitor_guide o-x"></div>
            <div className="monitor_guide o-y"></div>
            <div className="monitor_guide o-z"></div>
            <div className="dice">
              <div className="wall -no1">1</div>
              <div className="wall -no2">2</div>
              <div className="wall -no3">3</div>
              <div className="wall -no4">4</div>
              <div className="wall -no5">5</div>
              <div className="wall -no6">6</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
