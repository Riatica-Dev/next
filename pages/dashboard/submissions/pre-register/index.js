import React, { useState, useEffect, createContext } from "react";
import Layout from "@/components/dashboard/layout";
import Sprinner from "@/components/feedback/loading/sprinner";
import { PreRegisterNav } from "@/components/dashboard/components/nav";
import Campaigns from "@/components/dashboard/components/pre_register/campaigns";
import CampaignDetails from "@/components/dashboard/components/pre_register/campaignDetails";
import PersonalDetails from "@/components/dashboard/components/pre_register/personalDetails";

export const PreRegisterLayoutContext = createContext({});

const components = [
  {
    component: <Campaigns key="campaigns" />,
    pathname: "campaigns",
    isUnderline: [true, false, false],
  },
  {
    component: <CampaignDetails key="campaignDetails" />,
    pathname: "campaignDetails",
    isUnderline: [true, true, false],
  },
  {
    component: <PersonalDetails key="personalDetails" />,
    pathname: "personalDetails",
    isUnderline: [true, true, true],
  },
];

const PerRegister = () => {
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
    <Layout title="Submissions - First step">
      <div className="container">
        {results.length == 0 || !singleResult ? (
          <Sprinner />
        ) : (
          <PreRegisterLayoutContext.Provider
            value={{
              results,
              singleResult,
              changeData,
              nextStep,
              backStep,
              sortDataBy,
            }}
          >
            <PreRegisterNav
              pathname={components[step].pathname}
              isUnderline={components[step].isUnderline}
            />
            {components[step].component}
          </PreRegisterLayoutContext.Provider>
        )}
      </div>
    </Layout>
  );
};

export default PerRegister;

// dummy data
const singleData = {
  _id: "aksjdhiu8934jpdusdfmeh",

  email: "text@example.com",

  project_name: "Lorem ipsum dolor",
  asset_page: "https://www.lipsum.com/",
  client_name_position: "Lorem ipsum , Lorem ipsum dolor",
  project_pitch:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium mattis leo id sagittis. Fusce. ",
  project_planing:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla posuere diam, eu sollicitudin ante. Sed ac ipsum vel felis feugiat venenatis. Ut eu nisl bibendum, auctor velit in, ornare turpis. Aenean consectetur nisi ex, eget rutrum lacus suscipit id. Donec non iaculis est, sit amet hendrerit augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam at erat pretium, interdum lorem in, commodo eros. Morbi malesuada semper venenatis. Praesent nec neque porta velit accumsan auctor. Phasellus arcu mi, tristique a felis a, vestibulum aliquam tellus.",
  compaign_logo: [
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
  team_member_role:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa. Praesent sodales convallis tellus, non cursus dui molestie a. Mauris molestie in sapien congue venenatis. Sed nec blandit mi, vel pharetra ex.",
  team_member_linkedin:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa. Praesent sodales convallis tellus, non cursus dui molestie a. Mauris molestie in sapien congue venenatis. Sed nec blandit mi, vel pharetra ex.",
  project_website: "https://www.lipsum.com/",
  twitter: "https://www.twitter.com/lorem.1",
  linkedin: "https://www.linkedin.com/lorem.1",
  instagram: "https://www.instgram.com/lorem.1",
  facebook: "https://www.facebook.com/lorem.1",
  discord: "https://discordapp.com/lorem.1",
  project_whitepaper: "https://www.lipsum.com/test.pdf",
  roadmap_url: "https://www.lipsum.com/",

  roadmap_image: [
    {
      lastModified: 1664117025123,
      name: "placeholder.pdf",
      path: "placeholder.pdf",
      preview:
        "https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf",
      size: 525834,
      type: "application/pdf",
      webkitRelativePath: "",
    },
  ],

  position_on_roadmap:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa. Praesent sodales convallis tellus, non cursus dui molestie a. Mauris molestie in sapien congue venenatis. Sed nec blandit mi, vel pharetra ex.",

  // initial values for summary third step form
  bussiness_model:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa. Praesent sodales convallis tellus, non cursus dui molestie a. Mauris molestie in sapien congue venenatis. Sed nec blandit mi, vel pharetra ex. Aenean sit amet velit vel lorem cursus porttitor. Pellentesque ac erat nec tortor volutpat ultricies. Suspendisse at dui sed nisi lobortis commodo. Suspendisse potenti. Quisque egestas quam at ante luctus viverra. Duis non mattis ipsum. Nulla porttitor sem lectus, at gravida est congue id. Praesent sagittis tortor lorem, et placerat arcu commodo vitae. Sed commodo ultrices dui, ac lobortis nulla. ",
  bussiness_future:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa. Praesent sodales convallis tellus, non cursus dui molestie a. Mauris molestie in sapien congue venenatis. Sed nec blandit mi, vel pharetra ex. Aenean sit amet velit vel lorem cursus porttitor. Pellentesque ac erat nec tortor volutpat ultricies. Suspendisse at dui sed nisi lobortis commodo. Suspendisse potenti. Quisque egestas quam at ante luctus viverra. Duis non mattis ipsum. Nulla porttitor sem lectus, at gravida est congue id. Praesent sagittis tortor lorem, et placerat arcu commodo vitae. Sed commodo ultrices dui, ac lobortis nulla. ",
  // initial values for token and information and economic form
  token_name: "Lorem ipsum",
  token_symbol: "Lorem ipsum",
  smart_contract_audit: true,
  audit_link: "https://www.lipsum.com/",
  audit_pdf: [
    {
      lastModified: 1664117025123,
      name: "placeholder.pdf",
      path: "placeholder.pdf",
      preview:
        "https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf",
      size: 525834,
      type: "application/pdf",
      webkitRelativePath: "",
    },
  ],
  audit_down_road: true,
  utility_token: true,
  token_use_case:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa.",
  other_token_use_case:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa.",
  total_token_supply: "1000",
  circulating_token_supply: "9000",
  breakdown_token:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa.",
  breakdown_tokenomics:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa.",
  team_wallet:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa.",
  hold_lockup:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa.",
  running_network_currency: false,
  running_network_currency_type:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa.",
  currency_listed: true,
  exchange_name:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa.",
  // initial values for treasury form
  fundraising: false,
  fundraising_details:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa.",
  amount_raised:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa.",
  token_spent:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa.",
  project:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa.",
  currency_coin_token:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa.",
  policy:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa.",
  spendings:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa.",
  // initial values for develpoment form
  tech_innovation:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa.",
  code_repo_location: "https://www.lipsum.com/",
  product_demo:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa.",
  product_demo_image: [
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
  progress_plan:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa.",
  host_plan:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa.",
  // initial values for competitors form
  competitors_peers:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa.",
  competitive_adventage:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula nunc vitae risus iaculis tempor. Suspendisse a purus at justo viverra dapibus. Aenean dictum, diam vitae commodo fringilla, est tortor facilisis sapien, eget mollis neque nulla nec massa.",
};
// create dummy data
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
