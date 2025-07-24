import { Icon } from "./Icon";

export const Skill = ({ techs, title }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold border-l-4 border-green-500 pl-2 mb-2">
        {title}
      </h3>
      <div className="flex gap-4 text-6xl flex-wrap">
        {techs.map((tech, i) =>
          tech.devicon ? (
            <div key={i} className="flex flex-col items-center">
              <i
                className={`${tech.color} shadow-xl hover:shadow-2xl transform hover:scale-115 transition-all duration-300 ease-in-out`}
                title={tech.title}
                aria-label={tech.title}
              />
              <h4 className="text-sm font-bold mt-2">{tech.title}</h4>
            </div>
          ) : (
            <div key={i} className="flex flex-col items-center">
              <Icon imp={tech.imp} title={tech.title} color={tech.color} />
              <h4 className="text-sm font-bold mt-2">{tech.title}</h4>
            </div>
          )
        )}
      </div>
    </div>
  );
};
