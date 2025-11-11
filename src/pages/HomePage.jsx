import React from "react";
import { Row, Col, Card, Tabs, List } from "antd";
import CustomButton from "../components/Button";
import CommonStep from "../components/CommonStep";
import CommonFooter from "../components/Footer";
import CommonCard from "../components/Card";
import CommonJobCard from "../components/JobCard";
import CommonSliderCard from "../components/SlidingCard";
import logo from "../assets/withouttextlogo.svg";
import CommonSlick from "../components/CommonSlick";
import ToggleButton from "../components/ToggleButton";
import InputText from "../components/InputText";
import SearchBox from "../components/SearchBox";
import Pagination from "../components/Pagination";
import DropdownInput from "../components/DropdownInput";
import CustomDatePicker from "../components/Calender";

const { TabPane } = Tabs;

function HomePage() {
  const notices = [
    {
      text: "Click here to know your Exam District location (VDO DIRECT RECRUITMENT - 2025)",
      action: () => alert("Open Exam District location"),
    },
    {
      text: "One Time Registration Help Document",
      link: "notificationdocview?ID=iL088UmNk8t9Jbsvh9cy8w%3D%3D",
    },
    {
      text: "Dear Candidate, If you have created your OTR through SSO Profile and want to update details(Candidate's Name, Father's Name, D.O.B, Gender, Mobile No.) then please click on the Update OTR Button. Please note that it is a one-time process only, once you Submit your details, the Update OTR button will not be shown.",
    },
    {
      text: "आप अपनी आवश्यकता के अनुसार ओटीआर में अपना डोमिसाइल विवरण, श्रेणी और विशेष दिव्यांगजन श्रेणी परिवर्तन कर सकते हैं।/You can edit your Domicile Details, Category and Specially Abled Category in OTR as per your requirement.",
    },
    {
      text: "ओटीआर में कृपया नीचे दिए गए विवरण के अनुसार श्रेणी का चयन करें| Unreserved Category->General, MBC Creamy, OBC Creamy Reserved Category->General-EWS, Economically Weaker Section, S.C, S.T, OBC-Non Creamy, MBC Non-Creamy, Saharia Tribe for Baran Dist.",
    },
  ];

  const recruitments = [
    {
      id: 1,
      title:
        "DIRECT RECRUITMENT OF CONTRACTUAL AYUSH OFFICER (AYURVED/ HOMOEOPATHY/ UNANI) OF NHM - 2025",
      org: "(RSSB)",
      date: "08-Nov-2025"
    },
    {
      id: 2,
      title: "JAMADAR GRADE - II RECRUITMENT - 2024",
      org: "(RSSB)",
      date: "15-Nov-2025"
    },
    {
      id: 3,
      title: "STATISTICAL OFFICER 2025",
      org: "(RPSC)",
      date: "26-Nov-2025"
    },
  ];

  return (
    <div className="container-fluid spacing-content py-4">
         
      <ToggleButton notices={notices} recruitments={recruitments} />

    
      {/* <div className="form-section text-center mt-5">
      <h2>Candidate Login / Registration</h2>
      <p>Enter your SSO credentials to proceed with One Time Registration</p>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <InputText />
      </div>
    </div>  */}
   {/* <SearchBox /> */}
    {/* <Pagination />  */}
    {/* <DropdownInput /> */}

   {/* <CustomDatePicker /> */}
        <div className="heading-section main-heading-section text-center">
                <h2>Stages of the <label>Examination Life Cycle</label></h2>
            </div>
        <div className="stage-section container-fluid spacing-content mt-5 mb-5" id="examLifeCycle">
      <div className="divisions">
  <CommonStep
   className="step-1"
    stepNumber="01"
    title="Registration"
    description="Initial Registration Stage for All Applicants"
  />

  <CommonStep
   className="step-1"
    stepNumber="02"
    title="Advertisement"
    description="Official Release of Recruitment Notification"
  />
   <CommonStep
    stepNumber="03"
    title="Application"
    description="Student Application Entry & Verification Phase"
  />
  <CommonStep
    stepNumber="04"
    title="Admit Card"
    description="Admit Card Release & Exam Details Notification"
  />
   <CommonStep
    stepNumber="05"
    title="Examination"
    description="Eligibility-Based Examination Stage"
  />
  <CommonStep
    stepNumber="06"
    title="Answer Key"
    description="Provisional Answer Key & Objection Window"
  />
   <CommonStep
    stepNumber="07"
    title="Provisional Shortlist"
    description="Names of Shortlisted Candidates"
  />
  <CommonStep
    stepNumber="08"
    title="Verify Document"
    description="DigiLocker-based Document Check"
  />
   <CommonStep
    stepNumber="09"
    title="Result"
    description="Final Merit List Announcement"
  />
  <CommonStep
    stepNumber="10"
    title="Preference Based Service Allocation"
    description="Candidate Service Preference Stage (If Any)"
  />
   <CommonStep
    stepNumber="11"
    title="Recommendations"
    description="Candidate Recommendation Stage"
  />

  <CommonStep
    stepNumber="12"
    title="Medical Test"
    description="Health Screening for Final Selection"
  />
   <CommonStep
    stepNumber="13"
    title="Police verification"
    description="Police Clearance for Appointment"
  />
  <CommonStep
    stepNumber="14"
    title="Appointment And Posting"
    description="Issuance of Appointment Order and Joining and Assignment to Post"
  />
   </div>
  </div>

<div className="commoncarddiv">
        <div className="heading-section main-heading-section text-center">
            <h2>Department Wise <label>Submitted Application</label></h2>
        </div>
  <Row gutter={[24, 24]} justify="center">
         <CommonCard
          logo="../src/assets/366.png"
          title="Rajasthan Staff Selection Board"
          count="27283724"
          label="Applications"
        />
        <CommonCard
          logo="../src/assets/578.png"
          title="Rajasthan Public Service Commission"
          count="15463449"
          label="Applications"
        />
        <CommonCard
          logo="../src/assets/364.png"
          title="Department of Rajasthan Police"
          count="92864"
          label="Applications"
        />
        <CommonCard
          logo="../src/assets/otherjob.png"
          title="Others Job Application"
          count="5122274"
          label="Applications"
        />
        </Row>
        </div>

      <div className="job-section">
  <div className="heading-section main-heading-section text-center">
    <h2>
      Job <label>Openings</label> &amp; <label>Vacancies</label>
    </h2>
  </div>

  <div className="job-list">
    <CommonJobCard
      logo="../src/assets/366.png"
      title="DIRECT RECRUITMENT OF CONTRACTUAL AYUSH OFFICER (AYURVED/ HOMOEOPATHY/ UNANI) OF NHM - 2025"
      badge="(RSSB)"
      date="08-Nov-2025"
      onApply={() => window.open("https://sso.rajasthan.gov.in/", "_blank")}
      onPostClick={() => console.log("Post details clicked!")}
    />

    <CommonJobCard
      logo="../src/assets/366.png"
      title="JAMADAR GRADE - II RECRUITMENT - 2024"
      badge="(RSSB)"
      date="15-Nov-2025"
      onApply={() => window.open("https://sso.rajasthan.gov.in/", "_blank")}
      onPostClick={() => console.log("Post details clicked!")}
    />

    <CommonJobCard
      logo="../src/assets/578.png"
      title="STATISTICAL OFFICER 2025"
      badge="(RPSC)"
      date="26-Nov-2025"
      onApply={() => window.open("https://sso.rajasthan.gov.in/", "_blank")}
      onPostClick={() => console.log("Post details clicked!")}
    />
  </div>
</div>


<div className="offical-stakeholder">
    <div className="heading-section main-heading-section text-center">
                <h2>Official  <label>Stakeholders</label></h2>
            </div>
            </div>
<CommonSlick slidesToShow={5}>
<CommonSliderCard logo="../src/assets/578.png" title="Rajasthan Public Service Commission"  />
<CommonSliderCard logo="../src/assets/364.png" title="Department of Rajasthan Police" />
<CommonSliderCard logo="../src/assets/458.png" title="Rajasthan Medical Education Society - Department of Medical Education"/>
<CommonSliderCard logo="../src/assets/460.png" title="Director of Elementary Education, Rajasthan, Bikaner" />
<CommonSliderCard logo="../src/assets/788.png" title="Ayush Department" />
<CommonSliderCard logo="../src/assets/398.png" title="Planning Department, Directorate of Economics and Statistics"  />
<CommonSliderCard logo="../src/assets/461.png" title="Rajasthan High Court, Jodhpur" />
<CommonSliderCard logo="../src/assets/728.png" title="Local Self Government" />
<CommonSliderCard logo="../src/assets/638.png" title="ICFRE-Arid Forest Research Institute" />
<CommonSliderCard logo="../src/assets/518.png" title="National Health Mission,Rajasthan (Medical and Health Services)" />
<CommonSliderCard logo="../src/assets/459.png" title="Department of Sanskrit Education, Govt. of Rajasthan" />
<CommonSliderCard logo="../src/assets/368.png" title="Directorate Police Telecommunication, Rajasthan"  />
<CommonSliderCard logo="../src/assets/367.png" title="Rajasthan State Pollution Control Board" />
<CommonSliderCard logo="../src/assets/608.png" title="Rajasthan State Sports Council" />
<CommonSliderCard logo="../src/assets/488.png" title="Rajasthan Technical University, Kota"  />
<CommonSliderCard logo="../src/assets/548.png" title="Office of Zila Parishad"  />
<CommonSliderCard logo="../src/assets/668.png" title="Govind Guru Tribal University, Banswara"  />
<CommonSliderCard logo="../src/assets/698.png" title="Secondary Education Department, Rajasthan"  />
<CommonSliderCard logo="../src/assets/818.png" title="Department of Peace and Non-Violence" />
<CommonSliderCard logo="../src/assets/848.png" title="Institute of Digital Education and Employment Development" />
<CommonSliderCard logo="../src/assets/878.png" title="ICMR-National Institute for Implementation Research on Non-Communicable Diseases"  />
<CommonSliderCard logo="../src/assets/908.png" title="Income Tax Department, Rajasthan"  />
<CommonSliderCard logo="../src/assets/938.png" title="Rajasthan Cooperative Recruitment Board" />
</CommonSlick>


  <CommonFooter
      logo={logo}
      columns={[
        [
          { label: "Home Page", key: "homepage" },
          { label: "SSO ID", key: "ssoid" },
          { label: "Admit Card", key: "admitcard" },
          { label: "Result", key: "result" },
          { label: "FAQ", key: "faq" },
        ],
        [
          {
            label: "Aadhar Privacy Policy",
            key: "policy",
            href: "https://aadhaar.rajasthan.gov.in/policyguideline.aspx?id=9CDF598",
          },
        ],
        [
          { label: "Contact Number: 7340557555 / 9352323625", key: "contactNumber" },
          { label: "Timing: (9:30 AM to 6:00 PM)", key: "timing" },
          {
            label: "E-mail: recruitmenthelpdesk@rajasthan.gov.in",
            key: "email",
            href: "mailto:recruitmenthelpdesk@rajasthan.gov.in",
          },
        ],
      ]}
    />

    </div>
  );
}

export default HomePage;
