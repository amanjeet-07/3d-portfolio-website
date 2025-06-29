import { educationData } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCardShort from "../components/GlowCardShort";

const StudyTimeline = () => {
    return (
    <section id="education" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Educational Qualification Timeline"
          sub="📚 My Education"
        />

        <div className="lg:columns-4 md:columns-2 columns-1 lg:mt-50 lg:mb-20 md:mt-50 md:mb-20 mt-20 mb-0">
          {educationData.map((education, index) => (
            <div key={index} className="relative py-10">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 w-full bg-purple-600 transform -translate-y-1/2 z-0"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-12 h-12 bg-white border-4 border-slate-600 rounded-full shadow-md">
                  <img src={education.imgPath} alt="" />
                </div>
              </div>
              <div className="sm:timeline-wrapper">
                <div className="sm:timeline" />
                <div className="sm:gradient-line sm:w-1 sm:h-full" />
              </div>
              <GlowCardShort card={education} key={index} index={index}>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col gap-1 px-3">
                    <div className="lg:px-24 md:px-27">
                      <span className="text-sm font-semibold bg-purple-600 text-white px-3 py-0 rounded-full shadow">
                        {education.year}
                      </span>
                    </div>
                    <p className="font-bold">{education.title}</p>
                    <p className="text-white-50">{education.institution}</p>
                    <p className="font-bold">{education.grades}</p>
                  </div>
                </div>
              </GlowCardShort>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyTimeline;
