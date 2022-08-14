import CustomCard from "../../Reusables/Cards";
import '../../index.css';

const Projects = () => {

  return (
    <div className="w-full h-[92%] xl:h-full p-5 xl:p-10 my-1 overflow-y-auto scrollbar">
      <div className="w-full grid xl:grid-cols-6 grid-rows-3 gap-1 relative">
        <CustomCard
          title="Tracko"
          discription="A Geo Tracking Android Application built oer React-Native and Firebase"
          colSpan={3}
          link="https://github.com/hitenvats16/Tracko-locator"
        >
          <div
            className={`w-12 h-12 aspect-square rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-700`}
          />
        </CustomCard>

        <CustomCard
          title="BookFleet"
          discription="A solution for exchanging books between students built over React-Native and firebase."
          colSpan={3}
          link="https://github.com/hitenvats16/BookFleet"
        >
          <div
            className={`w-12 h-12 aspect-square rounded-lg bg-gradient-to-tr from-[#E91387] to-[#ED9732]`}
          />
        </CustomCard>
        <CustomCard
          title="WholeSomeCart"
          discription="An E-Commerce service built over Django, HTML, JavaScript and Tailwind CSS."
          colSpan={3}
          link="https://wholesomecart.azurewebsites.net/"
        >
          <div
            className={`w-12 h-12 aspect-square rounded-lg bg-gradient-to-tr from-green-500 to-amber-500`}
          />
        </CustomCard>
        <CustomCard
          title="Eyemate"
          discription="A Design Concept for OTT services built over ReactJS, JavaScript and Tailwind CSS."
          colSpan={3}
          link="https://eyemate.netlify.app/"
        >
          <div
            className={`w-12 h-12 aspect-square rounded-lg bg-gradient-to-tr from-purple-800 to-pink-800`}
          />
        </CustomCard>
        <CustomCard
          title="Portfolio Website"
          discription="A Portfolio website with minimal design possible built using HTML5, CSS3, JS."
          colSpan={3}
          link="https://hitenvats16.github.io/portfolio/"
        >
          <div
            className={`w-12 h-12 aspect-square rounded-lg bg-gradient-to-tr from-teal-400 to-emerald-600`}
          />
        </CustomCard>
      </div>
    </div>
  );
};

export default Projects;
