import PropTypes from "prop-types";
QuestionCheckbox.propTypes = {
  obj: PropTypes.object,
  onChange: PropTypes.func
};
export default function QuestionCheckbox({ obj, onChange }) {
  return (
    <label
      htmlFor={obj.id}
      className="relative bg-gray-100 py-6 mb-6 px-4 flex items-center rounded-lg">
      <input
        type="checkbox"
        id={obj.id}
        name={obj.id}
        value={obj.checked}
        onChange={(event) => onChange({ ...obj, checked: event.target.checked })}
        className="relative peer mr-2 appearance-none size-5 border border-gray-500 rounded-full shrink-0 checked:bg-green-500 checked:border-green-600"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-5 absolute  hidden peer-checked:block text-white">
        <path
          fillRule="evenodd"
          d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
          clipRule="evenodd"
        />
      </svg>
      <span className="font-semibold text-gray-800">{obj.text}</span>
    </label>
  );
}
