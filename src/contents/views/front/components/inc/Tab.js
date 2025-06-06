import React from "react";
import btnStyle from '../../assets/scss/Button.module.scss';
function Tab(props) {
  const { data, tabIndex, setTabIndex } = props;
  return (
    <>
      {data ? (
        <section className={btnStyle.tab__wrap}>
          {data.map((item, idx) => {
            return (
              <button
                key={idx}
                className={`${btnStyle.tab} ${tabIndex  === idx ? btnStyle.active : ""}${
                  item.type ? item.type : ""
                }`}
                onClick={() => setTabIndex(idx)}
              >
                {item.title ? item.title : ``}
              </button>
            );
          })}
        </section>
      ) : null}
    </>
  );
}

export default Tab;
