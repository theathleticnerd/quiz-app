import PropTypes from "prop-types";
import semiCircleRing from "assets/images/Report/semicircleMeter.svg";
ResultMeter.propTypes = {
  percentage: PropTypes.number
};
export default function ResultMeter(props) {
  const percentage = props.percentage || 0;
  const convertToDegrees = (x) => {
    if (x < 0 || x > 100) {
      throw new Error("Input must be between 0 and 100");
    }
    return 1.8 * x - 90;
  };
  return (
    <>
      <section className="relative w-56 h-36">
        <img src={semiCircleRing} alt="Semicircle Indicator for Report Meter" />
        <div className="absolute bottom-8 ">
          <div className="relative flex items-center justify-center w-56">
            <div
              className="absolute w-20 h-[5.5rem] bg-gray-800"
              style={{
                bottom: "50%",
                left: "50%",
                transformOrigin: "bottom center",
                transform: `translateX(-50%) rotate(${convertToDegrees(percentage)}deg)`,
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" // Triangular needle
              }}></div>
            <div className="absolute flex items-center justify-center size-32 bg-white rounded-full shadow-xl">
              <span className="text-3xl font-bold text-gray-800">{percentage}%</span>
            </div>
          </div>
        </div>
      </section>
      {/* 
      style={{
          transformOrigin: "bottom center",
          transform: `translateX(-50%) rotate(${rotation}deg)`,
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" // Triangular needle
        }}
      */}
    </>
  );
}
