import Heading from "../../Reusables/Heading";
import Pill from "../../Reusables/Pill";
import '../../index.css';

const Wrapper = (props) => {
  const { children } = props;
  return (
    <div
      className={
        "flex flex-wrap md:grid md:grid-cols-10 md:grid-rows-1 md:gap-2"
      }
    >
      {children}
    </div>
  );
};

const Skills = () => {
  return (
    <div className="w-full h-[92%] xl:h-full p-5 xl:p-10 overflow-y-auto scrollbar">
      <div>
        <>
          <Heading title="Fundamentals" />
          <Wrapper>
            <Pill
              title="DBMS"
              extraClaass=" bg-purple-600 col-span-2 m-2 md:m-0 text-center"
            />
            <Pill
              title="Data Structure and Algorithms"
              extraClaass=" col-span-6 m-2 md:m-0 text-center"
            />
            <Pill
              title="OOPS"
              extraClaass=" bg-green-700 col-span-2 m-2 md:m-0 text-center"
            />
          </Wrapper>
        </>
        <>
          <Heading title="Languages" className=" mt-5" />
          <Wrapper>
            <Pill
              title="C/C++"
              extraClaass=" bg-teal-600 col-span-2 m-2 md:m-0 text-center"
            />
            <Pill
              title="CSS"
              extraClaass=" bg-indigo-600 col-span-2 m-2 md:m-0 text-center"
            />
            <Pill
              title="HTML"
              extraClaass=" bg-orange-600 col-span-2 m-2 md:m-0 text-center"
            />
            <Pill
              title="JavaScript"
              extraClaass=" bg-rose-600 col-span-2 m-2 md:m-0 text-center"
            />
            <Pill
              title="Python"
              extraClaass=" bg-yellow-600 col-span-2 m-2 md:m-0 text-center"
            />
          </Wrapper>
        </>
        <>
          <Heading title="Technologies" className=" mt-5" />
          <Wrapper>
            <Pill
              title="Bootstrap"
              extraClaass=" bg-purple-600 col-span-3 m-2 md:m-0 text-center"
            />
            <Pill
              title="Django-Rest-Framework"
              extraClaass=" bg-green-600 col-span-5 m-2 md:m-0 text-center"
            />
            <Pill
              title="Firebase"
              extraClaass=" bg-yellow-500 col-span-2 m-2 md:m-0 text-center"
            />
            <Pill
              title="JQuery"
              extraClaass=" bg-amber-600 col-span-3 m-2 md:m-0 text-center"
            />
            <Pill
              title="ReactJS"
              extraClaass=" bg-blue-600 col-span-3 m-2 md:m-0 text-center"
            />
            <Pill
              title="React-Native"
              extraClaass=" bg-red-500 col-span-4 m-2 md:m-0 text-center"
            />
            <Pill
              title="Tailwind CSS"
              extraClaass=" bg-cyan-600 col-span-2 m-2 md:m-0 text-center"
            />
          </Wrapper>
        </>
        <>
          <Heading title="Tools" className=" mt-5" />
          <Wrapper>
            <Pill
              title="Azure"
              extraClaass=" bg-slate-500 col-span-2 m-2 md:m-0 text-center"
            />
            <Pill
              title="Git"
              extraClaass=" bg-pink-600 col-span-1 m-2 md:m-0 text-center"
            />
            <Pill
              title="Linux"
              extraClaass=" bg-stone-500 col-span-2 m-2 md:m-0 text-center"
            />
            <Pill
              title="VS-Code"
              extraClaass=" bg-emerald-500 col-span-2 m-2 md:m-0 text-center"
            />

            <Pill
              title="Windows"
              extraClaass=" bg-cyan-600 col-span-3 m-2 md:m-0 text-center"
            />
          </Wrapper>
        </>
      </div>
    </div>
  );
};

export default Skills;
