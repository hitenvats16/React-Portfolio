// This component goes inside Right Hero Section (Experience Section)

import '../../index.css'

const Card = (props) => {
  const { title, time, discription } = props;
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 borderborder-non-active bg-non-active"></div>
      <time className="mb-1 text-sm font-normal leading-none text-non-active dark:text-non-active">
        {time}
      </time>
      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>
      <p className="mb-4 text-base font-normal text-non-active">
        {discription}
      </p>
    </li>
  )
}

const Experiences = () => {
  return (
    <div className="w-full h-[92%] xl:h-full p-5 ">
      <div className="w-full xl:p-10 h-full sm:h-[92%] h-max-xl overflow-y-auto scrollbar">
        <ol className="relative border-l border-non-active">
          <Card title="Teaching Assistant, Coding Ninjas" time="August 2022 - Present" discription="Responsible for debugging student’s code and explain the concepts & intuition behind the approach towards problem."/>
          <Card title="HACKOVERFLOW4.0 HACKATHON, Hackoverflow society, CU" time="April 2022 (5 Days long)" discription="Created a Geo Tracking solution to keep the track of the location
              and behaviour of the bus like speed, remaining time etc for
              schools and parents. Got 4th rank, Event had recieved 5000+
              registrations."/>
          <Card title="Design Heist, BVPIEEE, BVCOE" time="February 2022 (12 Days long)" discription="Created a Design for a hypothetical OTT Plateform and covert that into code using ReactJS and Talwind CSS. We were among the finalists in the Event." />
          <Card title="Hack The League, Online" time="January 2022 (1 Month long)" discription="Created a solution for exchanging and lending books for college
              and school students. Users was able to connect with each other
              over email."/>
          <Card title="WIEHACK 3.0 HACKATHON, BVPIEEE, BVCOE" time="May 2021 (3 Days long)" discription="Created a solution for scheduling medicine dosage. Created an IoT
              enabled device that reserves pills and dispences in amount
              specified at specified time, configurable by a web interface.
              Stood among top 12 team with over 2000+ registrations."/>
        </ol>
      </div>
    </div>
  );
};

export default Experiences;
