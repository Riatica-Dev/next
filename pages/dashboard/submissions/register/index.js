import React, { useState, useEffect, createContext } from "react";
import Layout from "@/components/dashboard/layout";
import Sprinner from "@/components/feedback/loading/sprinner";
import { RegisterNav } from "@/components/dashboard/components/nav";
import Campaigns from "@/components/dashboard/components/register/campaigns";
import CampaignDetails from "@/components/dashboard/components/register/campaignDetails";
import PersonalDetails from "@/components/dashboard/components/register/personalDetails";
import CompanyDetails from "@/components/dashboard/components/register/companyDetails";

export const RegisterContext = createContext({});

const components = [
  {
    component: <Campaigns key="campaigns" />,
    pathname: "campaigns",
    isUnderline: [true, false, false, false],
  },
  {
    component: <CampaignDetails key="campaignDetails" />,
    pathname: "campaignDetails",
    isUnderline: [true, true, false, false],
  },
  {
    component: <PersonalDetails key="personalDetails" />,
    pathname: "personalDetails",
    isUnderline: [true, true, true, false],
  },
  {
    component: <CompanyDetails key="companyDetails" />,
    pathname: "companyDetails",
    isUnderline: [true, true, true, true],
  },
];

const Register = () => {
  const [step, setStep] = useState(0);
  const [results, setResults] = useState([]);
  const [singleResult, setSingleResult] = useState({});

  // fetch api by default by date for the frist time
  useEffect(() => {
    // api return all pre-register data order by date
    setResults(data);

    // api return single of the first pre-register data
    setSingleResult(singleData);
  }, []);

  // fetch api return all pre-register data order by what user has choose
  const sortDataBy = (sortBy) => {
    console.log(sortBy);

    // stored the results
    // setResults(data);
  };

  // fetch api that return single data by id
  const changeData = (id) => {
    console.log(id);

    // stored the result
    // setSingleResult(singleData);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const backStep = () => {
    setStep(step - 1);
  };

  return (
    <Layout title="Submissions - Second step">
      <div className="container">
        {results.length == 0 || !singleResult ? (
          <Sprinner />
        ) : (
          <RegisterContext.Provider
            value={{
              results,
              singleResult,
              changeData,
              nextStep,
              backStep,
              sortDataBy,
            }}
          >
            <RegisterNav
              pathname={components[step].pathname}
              isUnderline={components[step].isUnderline}
            />
            {components[step].component}
          </RegisterContext.Provider>
        )}
      </div>
    </Layout>
  );
};

export default Register;

// dummy data
const singleData = {
  // id
  _id: "diqweb2736-23hjdbc02342b",

  // initial values for select company type
  company_type: "company_campany",
  country_legal_register: "Lorem ipsum",

  // initial values for company details form
  company_webpage: "https://www.lipsum.com/",
  company_objective:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla posuere diam, eu sollicitudin ante. Sed ac ipsum vel felis feugiat venenatis. Ut eu nisl bibendum, auctor velit in, ornare turpis. Aenean consectetur nisi ex, eget rutrum lacus suscipit id. Donec non iaculis est, sit amet hendrerit augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam at erat pretium, interdum lorem in, commodo eros. Morbi malesuada semper venenatis. Praesent nec neque porta velit accumsan auctor. Phasellus arcu mi, tristique a felis a, vestibulum aliquam tellus.",
  jurisdictions_compliance:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla posuere diam, eu sollicitudin ante. Sed ac ipsum vel felis feugiat venenatis. Ut eu nisl bibendum, auctor velit in, ornare turpis.",
  legal_opinion_switch: false,
  legal_opinion_pdf: [
    {
      lastModified: 1659180108356,
      name: "296170011_5586503961371282_442093129087032447_n.jpg",
      path: "296170011_5586503961371282_442093129087032447_n.jpg",
      preview:
        "https://images.unsplash.com/photo-1664261840765-1d8dc5b4d7d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      size: 56446,
      type: "image/jpeg",
      webkitRelativePath: "",
    },
  ],
  legal_opinion_down_road: false,

  // initial values for bussiness records
  business_country_record: "Lorem ipsum",
  legal_bussiness_name: "Lorem ipsum",
  bussiness_name: "Lorem ipsum",
  house_registeration_number: "23847234",
  incorporation_date: "Lorem ipsum",
  business_type: "Lorem ipsum",

  // initial value for business address
  business_address_one: "Lorem ipsum 0903 , Lorem ipsum",
  business_address_two: "Lorem ipsum 123 , Lorem ipsum",
  business_city: "Lorem ipsum",
  business_zip_code: "Lorem ipsum 123",

  // initial value for role company form
  company_role: "only_director_and_significant_shareholder",

  // initial value for telegram account form
  telegram_account: "Lorem ipsum",

  // initial value for personal details form
  first_name: "Lorem ipsum",
  last_name: "Lorem ipsum",
  date_birthday: "2000-09-16",

  // initial value for home address form
  home_country: "Lorem ipsum",
  home_zip_code: "Lorem ipsum 123 , Lorem ipsum",
  home_address_one: "Lorem ipsum 089 , Lorem ipsum",
  home_address_two: "Lorem ipsum 089 , Lorem ipsum , Lorem ipsum ",
  home_city: "Lorem ipsum",

  // initial value for verify identity form
  identity_country: "Lorem ipsum",
  identity_type: "driving_licence",
  id_image: {
    side_1: [
      {
        lastModified: 1659180108356,
        name: "296170011_5586503961371282_442093129087032447_n.jpg",
        path: "296170011_5586503961371282_442093129087032447_n.jpg",
        preview:
          "https://image.shutterstock.com/shutterstock/photos/1227173818/display_1500/stock-vector-driver-license-with-male-photo-identification-or-id-card-template-vector-illustration-1227173818.jpg",
        size: 56446,
        type: "image/jpeg",
        webkitRelativePath: "",
      },
    ],
    side_2: [
      {
        lastModified: 1659180108356,
        name: "296170011_5586503961371282_442093129087032447_n.jpg",
        path: "296170011_5586503961371282_442093129087032447_n.jpg",
        preview:
          "https://image.shutterstock.com/shutterstock/photos/1227173818/display_1500/stock-vector-driver-license-with-male-photo-identification-or-id-card-template-vector-illustration-1227173818.jpg",
        size: 56446,
        type: "image/jpeg",
        webkitRelativePath: "",
      },
    ],
  },
  selfie_image: [
    {
      lastModified: 1659180108356,
      name: "296170011_5586503961371282_442093129087032447_n.jpg",
      path: "296170011_5586503961371282_442093129087032447_n.jpg",
      preview:
        "https://image.shutterstock.com/image-photo/portrait-woman-taking-selfie-photo-600w-1899917965.jpg",
      size: 56446,
      type: "image/jpeg",
      webkitRelativePath: "",
    },
  ],

  // initial value for money warp form
  crypto_fund: "FLR",
  money_fund_by_sgb: "999",
  money_fund_by_flr: "999",

  // initial value for raise period form
  raise_period: "9",

  // initial value for yield period form
  yield_period: "89",

  // initial value yield for tokens given
  tokens_given: "8998",

  // initial value for help user form
  legal_opinion_hepler: false,
  smart_contract_hepler: false,

  // initial value for service form
  service_one: false,
  client_needs: "",
  service_two: false,
};

const data = [
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
  {
    _id: `3239IH0EHNMcnoqwiue12${Math.random()}`,
    project_name: "Lorem ipsum dolor",
  },
];
// dummy data
