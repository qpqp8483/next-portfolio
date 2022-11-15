import Link from "next/link";
import Animation from "./animation";

const Hero = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          프론트엔드 개발자
          <br className="hidden lg:inline-block" />
          장찬우 입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          오는 별 오면 우는 별을 강아지, 것은 거외다. 쉬이 토끼, 내린 별
          무엇인지 봄이 그리워 못 아름다운 있습니다. 가을 내 당신은 내린
          버리었습니다. 많은 지나가는 벌레는 애기 가을로 이름을 이런 있습니다.
          이런 이런 하나의 시인의 시와 별 오면 있습니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              프로젝트 보러가기
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
};

export default Hero;
