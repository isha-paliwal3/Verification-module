import React, { useState } from "react";
import SignUpInfo from "./AgencyInfo.js";
// import PersonalInfo from "./CandidateInfo.js";
import OtherInfo from "./PaymentInfo.js";
import "../../styles/VerificationForm.css"

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    agencyName: "",
    agencyEmail: "",
    Designation: "",
    agencyNo: "",
    firstName: "",
    lastName: "",
    universityName: "",
    progamName: "",
    prn: "",
    graduationDate: "",
    document: "",
    queryDate: "",
    NEFT: "",
    paymentSS: "",
    verificationDocument: "",
  });

  const FormTitles = ["Ageny-Details", "Candidate-Info", "Payement-Info"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
     } //else if (page === 1) {
    //   return <PersonalInfo formData={formData} setFormData={setFormData} />;}
     else if (page === 2)  {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="main">
    <div className="form">
      <div className="progressbar">
        <div
           onClick={() => {
            setPage((0));
          }}
          style={{ backgroundColor: page === 0 ? "white" : page===1 ? "#FFC107" : "#FFC107" }}
        ></div>
        <div
           onClick={() => {
            setPage((1));
          }}
          style={{ backgroundColor: page === 0 ? "#FFC107" : page===1 ? "white" : "#FFC107" }}
        ></div>
        <div
           onClick={() => {
            setPage((2));
          }}
          style={{ backgroundColor: page === 0 ? "#FFC107" : page===1 ? "#FFC107" : "white" }}
        ></div>
      </div>
      <div className="form-container">
        {/* <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div> */}
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page===0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Form;
