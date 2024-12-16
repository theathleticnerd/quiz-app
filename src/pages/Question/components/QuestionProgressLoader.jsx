import PropTypes from "prop-types";
QuestionProgressLoader.propTypes = {
  percentage: PropTypes.number,
  questionIndex: PropTypes.number
};
export default function QuestionProgressLoader(props) {
  const percentage = props.percentage || 0;
  const questionIndex = props.questionIndex || 0;

  const strokeWidth = 10;
  const sqSize = 107;

  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative bg-white p-2 rounded-full inline-block">
        <svg width={sqSize} height={sqSize} viewBox={viewBox}>
          <circle
            className="fill-none"
            cx={sqSize / 2}
            cy={sqSize / 2}
            r={radius}
            stroke="#ddd"
            strokeWidth={`${strokeWidth}px`}
          />
          <circle
            className="fill-none"
            cx={sqSize / 2}
            cy={sqSize / 2}
            r={radius}
            stroke="green"
            strokeWidth={`${strokeWidth}px`}
            // Start progress marker at 12 O'Clock
            transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }}
          />
        </svg>
        <p className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-baseline">
          <span className="text-5xl font-extrabold italic text-gray-800">{questionIndex + 1}</span>
          <span className="text-lg font-extrabold italic text-gray-400">/5</span>
        </p>
      </div>
    </div>
  );
}
