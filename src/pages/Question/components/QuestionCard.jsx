import { useEffect, useMemo, useState } from "react";
import QuestionCheckbox from "./QuestionCheckbox";
export default function QuestionCard(props) {
  const question = props.question;
  const data = props.optionsData;
  const setData = props.setOptionsData;
  return (
    <>
      <section>
        <div className="px-4 pb-6 mt-16  grow flex flex-col justify-between">
          <p className="text-xl font-semibold mb-4">{question}</p>
          <div className="grow max-h-min overflow-y-auto mb-4">
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
          </div>
        </div>
      </section>
    </>
  );
}
