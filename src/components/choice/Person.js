import { useRef } from "react";
import { FaSun } from "react-icons/fa";
import { GiStarFormation } from "react-icons/gi";

import classes from "./Person.module.css";

const Person = (props) => {
  const person = useRef();

  let imageSrc;
  let iconComponent;
  if (props.id === "Cris") {
    imageSrc =
      "https://lh3.googleusercontent.com/uai9kMGpaaTz-jhzpKVBtVkTnyymChzpPLufdreXa-g2a4Cpy3BsvFN0k_5DJKIoJxyVnOK6B2hToUdRzk7JbPrYjY4cRENIrxq5rhSmhRt0bDY5ppz-HC0tOKAN9VytFIrhsmBZOssVied-4qDzZTNOQYHgBZYbgjxq17M8WSgyf8Z6ayRu1auiBMvBCVzq9SeT1OPUsi2uolBPnKfmSXLffeKdcXBbi3k4TZMIbjkLucIZy-BC2Xoa057UrgSBO9CwzIV1Lm1hhqg_WubtP5X-Q9V_-Ol9bywIdy30uRnP09xq2G7xJrJ2LNHkH2E2fG1WuRuu2lwMZyXmXTpaSFjdldRbd3ewKAoqQB3TujbJbd9Gqi9Wk-llWErOp-ny3VyNp7yRgKooTThGwKOhIloKZMGybTGIH1W5wDhfnyTQnXE8ByXXwPJ_r9AZG6qFHJYsPsbZu9zXh6f0KNyHQqEOVhlVTSKAhGHqVjzDMy5tnyV0Q4-K6VwvrZ5SLDhCzNiUoHZbT3-HFGUs9Xwb4SoR3crFG_hjUlHUMU7SycVlimBSVBpletml91Rm4Ks6zbeGgQl5_5PPAMwHBHOdOu7_Rst2PmhZZoEaWXnjQBAbTXlbBMpycaGUQ3IfnaJh0zFjAyIkbYZmVFjML66HwSxs-qu0DBsRMBDjErPrlDoR6X-AV7HV_n9gG1LgAHi7A_he9rjjCT0_GFgobSgZNmE=w708-h943-no?authuser=0";
    iconComponent = <FaSun className={classes.icon} />;
  }
  if (props.id === "Davide") {
    imageSrc =
      "https://lh3.googleusercontent.com/76xOkggPm86ZsEQu_avvIjK2-9dCWEqE0jBmyaz80L5_nqzRX9qh7ugzrbkxeYIQBGis0_Tz5TS22-1He2onP06QTbXe_F_H4hMy5vuZUwgJgt0JnZvI2GQfL-t3kinm2z3nXA517WNCPax_u9DFt0g-Op8ZpqhfC6xd8ik_RUCsZee1Fb7u5ryEhqPoIEdpBUp3zNKAWXTVphItoWcw_VNeSbrnpMGSI0dytbmFlvS89-AvpPwSPW8oHoqfUGMjgAXslC7f10l1bNQ_m2P4JPPrRwdlvdkFzsc0ZGb7hBV3GSprnZ7TGFBBqTLX0WSZulutikEx_cUzuz1wOOhK_7KRw-Z5FdAEXr-YszkXODwKpKYaT85fNplo8V_8U2JtgXGxox7ej5Dric9J-ujMUUwNVs9BlEDkV74hIWGKqB-NPmcx_7iGioFFPRqSyh6J7tTrTVRFgpXD9XZa0KpfnhhmePpMqqdwlVVi1fjhO_Yz8QCRvSSlKsHl8arUH8OxkE-hVK8TAObexlx77oqtlIbGEtxNeUM-h0u4_WaSDWzp78qU7cF-zkZQapHcrR-ow1nMvIXzjSWjVMvh9w2ft6A-sumq7yXEluLIoeLUIzQrpM4GrH5wS4hNnfhnt2L_EcvzIVPkgzzdBzU2odPxMIgj9iwWAkuqmm1F5TzY9ZsE8iYxJl7bFAjwMbAxLL02wjgEMBvUUOFysufU2YJuNHc=w708-h943-no?authuser=0";
    iconComponent = <GiStarFormation className={classes.icon} />;
  }

  const clickPgHandler = () => {
    console.log("persona cliccata: ", person.current.id);
    props.onChoose(person.current.id)
  };


  return (
    <div
      ref={person}
      id={props.id}
      onClick={clickPgHandler}
      style={{ backgroundImage: `url(${imageSrc})` }}
      className={`${classes['img-container']} ${classes[props.chosenClass]}`}
    >
      <div className={classes["text-container"]}>
        <h2 className={`rainbow animated ${classes["animated-alt"]}`}>
          {props.name}
        </h2>
        {iconComponent}
      </div>
    </div>
  );
};

export default Person;
