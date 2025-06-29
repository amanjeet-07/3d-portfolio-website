import { abilities } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCardShort from "../components/GlowCardShort";

const Hobbies = () => (
  <section id="hobbies" className="flex-center section-padding">
    <div className="w-full h-full md:px-10 px-5">
      <TitleHeader
        title="Things I do when am Free"
        sub="🏅 My Hobbies"
      />
      <div className="w-full mb-20 padding-x-lg">
        <div className="mx-auto grid-4-cols">
          {abilities.map((ability, index) => (
            <GlowCardShort card={ability} key={index} index={3}>
            <div key={ability.title}>
              <div className="ml-3 mt-2 size-14 flex items-center justify-center rounded-full">
                <img src={ability.imgPath} alt={ability.title} />
              </div>
              <h3 className="px-3 mb-3 text-white text-2xl font-semibold mt-2">{ability.title}</h3>
              <p className="px-3 text-white-50 text-lg">{ability.desc}</p>
            </div>
            </GlowCardShort>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hobbies;