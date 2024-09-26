import Header from "../components/Header";

export default function Education() {
  return (
    <div>
      <Header />
      <p className="font-semibold text-center text-6xl">
        EDUCATIONAL BACKGROUND
      </p>
      <div className="my-10 flex justify-evenly">
        <div className="group">
          <div className="relative overflow-hidden">
            <img src="/siena.jpg" className="h-72 rounded-full"/>
            <div className="educhover1">
              <p className="font-semibold text-center">
                2010-2019 <br/>ELEMENTARY TO <br/>JUNIOR HIGH SCHOOL <br/>SIENA COLLEGE OF
                QUEZON CITY
              </p>
            </div>
          </div>
        </div>
        <div className="group">
          <div className="relative overflow-hidden">
            <img src="/sti.png" className="h-72 rounded-full"/>
            <div className="educhover2">
              <p className="font-semibold text-center">
                2019-2021 <br/>SENIOR HIGH SCHOOL <br/>STI COLLEGE MUÑOZ-EDSA
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex justify-center relative group">
        <div className="relative overflow-hidden">
          <img src="/tup.jpg" className="h-72 rounded-full"/>
          <div className="educhover3">
            <p className="font-semibold text-center">
              2021-PRESENT <br/>TECHNOLOGY UNIVERSITY OF THE PHILIPPINES
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
