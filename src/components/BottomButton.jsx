import PropTypes from "prop-types";
BottomButton.propTypes = {
  text: PropTypes.string,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func
};
export default function BottomButton(props) {
  const text = props.text;
  const leftIcon = props.leftIcon;
  const rightIcon = props.rightIcon;
  const disabled = props.disabled;
  const isLoading = props.isLoading;
  return (
    <button
      className={`w-11/12  absolute  mx-auto bottom-4 py-6 text-lg px-4 font-semibold rounded-3xl text-white left-1/2 -translate-x-1/2 ${disabled ? "bg-gray-600" : "bg-red-500"} ${isLoading ? "bg-red-700" : ""}`}
      disabled={disabled}
      onClick={(event) => {
        props.onClick(event);
      }}>
      <div className="relative">
        <span className="absolute left-0 top-1/2 -translate-y-1/2">
          {leftIcon && <img src={leftIcon} alt="" className="size-6" />}
        </span>
        <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          {isLoading ? (
            <svg
              className="size-6 animate-spin text-white"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"></circle>
              <path
                className="opacity-75"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                fill="currentColor"></path>
            </svg>
          ) : (
            <span> {text} </span>
          )}
        </span>
        <span className="absolute right-0 top-1/2 -translate-y-1/2">
          {rightIcon && !disabled && <img src={rightIcon} alt="" className="size-6" />}
        </span>
      </div>
    </button>
  );
}
