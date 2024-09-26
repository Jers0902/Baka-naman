import Header from "../components/Header";

export default function Project() {
  return (
    <div>
      <Header />
      <p className="font-semibold text-center text-6xl">RECENT PROJECTS</p>
      <div className="my-10 flex justify-evenly">
        <div className="group">
          <div className="relative overflow-hidden">
            <img className="h-96 rounded-3xl" src="input1.png" />
            <div className="inputhover">
              <p className="font-semibold text-white text-center">
                CODING (HTML)
                <br />
                INPUT
              </p>
            </div>
          </div>
        </div>
        <div className="group">
          <div className="relative overflow-hidden">
            <img className="h-96 rounded-3xl" src="input2.png" />
            <div className="inputhover">
              <p className="font-semibold text-white text-center">
                CODING (HTML)
                <br />
                INPUT
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 flex justify-evenly">
        <div className="group">
          <div className="relative overflow-hidden">
            <img className="h-96 rounded-3xl" src="output1.png" />
            <div className="outputhover">
              <p className="font-semibold text-white text-center">
                CODING (HTML)
                <br />
                OUTPUT
              </p>
            </div>
          </div>
        </div>
        <div className="group">
          <div className="relative overflow-hidden">
            <img className="h-96 rounded-3xl" src="output2.png" />
            <div className="outputhover">
              <p className="font-semibold text-white text-center">
                CODING (HTML)
                <br />
                OUTPUT
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20 flex justify-evenly">
        <div className="group">
          <div className="relative overflow-hidden">
            <img className="h-52 rounded-3xl" src="circuit1.jpg" />
            <div className="circuithover">
              <p className="font-semibold text-white text-center">
                CIRCUIT MAKING
              </p>
            </div>
          </div>
        </div>
        <div className="group">
          <div className="relative overflow-hidden">
            <img className="h-52 rounded-3xl" src="circuit2.jpg" />
            <div className="circuithover">
              <p className="font-semibold text-white text-center">
                CIRCUIT MAKING
              </p>
            </div>
          </div>
        </div>
        <div className="group">
          <div className="relative overflow-hidden">
            <img className="h-52 rounded-3xl" src="circuit3.jpg" />
            <div className="circuithover">
              <p className="font-semibold text-white text-center">
                CIRCUIT MAKING
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
