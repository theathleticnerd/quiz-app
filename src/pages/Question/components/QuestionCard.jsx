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
          <div className="overflow-y-auto h-[22rem] mb-4">
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
    </>
  );
}
