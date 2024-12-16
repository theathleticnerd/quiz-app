import PropTypes from "prop-types";
import QuestionCheckbox from "./QuestionCheckbox";
QuestionCard.propTypes = {
  question: PropTypes.string,
  optionsData: PropTypes.object,
  setOptionsData: PropTypes.func,
  imageURL: PropTypes.string,
  codeSnippet: PropTypes.string
};
export default function QuestionCard(props) {
  const question = props.question;
  const data = props.optionsData;
  const imageURL = props.imageURL;
  const setData = props.setOptionsData;
  const codeSnippet = props.codeSnippet;
  return (
    <section>
      <div className="px-4 mt-16 flex flex-col justify-between">
        <p className="text-xl font-extrabold text-gray-800 mb-4">{question}</p>
        <div className="mb-4">
          {codeSnippet && (
            <div className="bg-slate-900 py-4 px-2 text-slate-100 font-semibold mb-4">
              {codeSnippet}
            </div>
          )}
          {imageURL && (
            <div>
              <img src={imageURL} alt={question} className="mb-4" />
            </div>
          )}
          <ul>
            {data.map((obj, index) => (
              <li key={index}>
                <QuestionCheckbox
                  obj={obj}
                  onChange={(item) => {
                    setData(data.map((d) => (d.id === item.id ? item : d)));
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
