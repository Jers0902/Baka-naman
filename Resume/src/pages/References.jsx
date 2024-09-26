import Header from "../components/Header";

export default function References() {
  return (
    <div>
      <Header />
      <p className="font-semibold text-center text-6xl">CHARACTER REFERENCES</p>
      <div className="my-40 flex justify-evenly">
        <div className="group">
          <div className="relative overflow-hidden">
            <img src="/fralbert.jpg" className="h-64 rounded" />
            <div className="charhover">
              <p className="font-semibold text-white text-center">
                REV. FR ALBERTO S. POBLETE OFMCap. <br />
                PASUQUIN, ILOCOS NORTE <br /> 09178287858
              </p>
            </div>
          </div>
        </div>
        <div className="group">
          <div className="relative overflow-hidden">
            <img src="/frjeamboy.jpg" className="w-60 h-72 " />
            <div className="charhover">
              <p className="font-semibold text-white text-center">
                REV. FR JOSE EDUARDO MAYO OFMCap. <br />
                NSOLL, QUEZON CITY <br /> 09774815998
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
