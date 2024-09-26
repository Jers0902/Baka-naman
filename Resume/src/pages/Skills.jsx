import Header from "../components/Header";

export default function Skills() {
  return (
    <div>
      <Header />
      <p className="font-semibold text-center text-6xl">SKILLS</p>
      <div className="my-10 flex justify-evenly">
        <div className="group">
          <div className="relative overflow-hidden">
            <img src="/tm.gif" className="h-60" />
            <div className="hovertext">
              <p className="font-semibold text-white">TIME MANAGEMENT</p>
            </div>
          </div>
        </div>
        <div className="group">
          <div className="relative overflow-hidden">
            <img src="/fl.gif" className="h-56" />
            <div className="hovertext">
              <p className="font-semibold text-white">FAST LEARNER</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 flex justify-evenly">
        <div className="group">
          <div className="relative overflow-hidden">
            <img src="/teamwork3.gif" className="h-60" />
            <div className="hovertext">
              <p className="font-semibold text-white">ABILITY TO WORK IN A TEAM</p>
            </div>
          </div>
        </div>
        <div className="group">
          <div className="relative overflow-hidden">
            <img src="/compskills.gif" className="h-56" />
            <div className="hovertext">
              <p className="font-semibold text-white text-center">BASIC TO INTERMEDIATE COMPUTER SKILLS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
