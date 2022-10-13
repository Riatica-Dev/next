import * as Yup from "yup";
import {
  wordCounter,
  imageValidator,
  twitterValidator,
  pdfValidator,
} from "@/components/utils/logic/validationFunction";
const validationSchemaArray = [
  // email address form validation schema
  Yup.object({
    email: Yup.string()
      .email("Please enter a valid email.")
      .required("Please enter your email."),
  }),
  // confirmation number validation schema
  Yup.object({
    validation_email_number: Yup.string().required(
      "Please enter a confirmation number."
    ),
  }),
  // password form validation schema
  Yup.object({
    password: Yup.string()
      .matches(/[a-zA-Z]/, " ")
      .matches(/[0-9]/, " ")
      .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, " ")
      .min(8, " ")
      .required("Please enter a password."),
  }),

  // empty schema object
  Yup.object({}),

  // summary form first step validation schema
  Yup.object({
    project_name: Yup.string().required("Please enter the project's name."),
    asset_page: Yup.string()
      .url("Please enter a valid link")
      .required("Please enter a link to your asset page."),
    client_name_position: Yup.string().required(
      "Please enter your name and position"
    ),
    project_pitch: Yup.string()
      .required("Please enter your project pitch.")
      .test("max_word", "20 words at most.", (value) => {
        return value && wordCounter(value) <= 20;
      }),
    project_planing: Yup.string()
      .required("Please enter your goal for your project.")
      .test("min_word", "20 words at least", (value) => {
        return value && wordCounter(value) >= 20;
      })
      .test("max_word", "150 words at most", (value) => {
        return value && wordCounter(value) <= 150;
      }),
    compaign_logo: imageValidator,
  }),

  // summary form secondary step validation schema
  Yup.object({
    team_member_role: Yup.string().required(
      "Please enter your team members and roles."
    ),
    team_member_linkedin: Yup.string().required("This field is required."),
    project_website: Yup.string()
      .url("Please enter a valid website url.")
      .required("Please enter a link to your project's website."),
    twitter: twitterValidator,
    linkedin: Yup.string().url("Please enter a correct linkedin url!"),
    instagram: Yup.string().url("Please enter a correct instagram url!"),
    facebook: Yup.string().url("Please enter a correct facebook url!"),
    discord: Yup.string().url("Please enter a correct discord url!"),
    project_whitepaper: Yup.string()
      .url("Please enter a valid link.")
      .required("Please enter a link to your project's whitepaper."),
    position_on_roadmap: Yup.string().required(
      "Please share your progress on the roadmap."
    ),
  }).shape(
    {
      roadmap_url: Yup.string()
        .ensure()
        .when("roadmap_image", {
          is: (roadmap_image) => {
            return roadmap_image.length == 0;
          },
          then: Yup.string()
            .url("Please enter your roadmap url.")
            .required("Please enter a link to  your roadmap."),
        }),
      roadmap_image: Yup.array()
        .ensure()
        .when("roadmap_url", {
          is: (roadmap_url) => {
            return roadmap_url == "";
          },
          then: imageValidator,
        }),
    },
    [["roadmap_image", "roadmap_url"]]
  ),

  // summary from step three validation schema
  Yup.object({
    bussiness_model: Yup.string()
      .required("Please enter your business model.")
      .test("max_word", "150 words at most", (value) => {
        return value && wordCounter(value) <= 150;
      }),
    bussiness_future: Yup.string()
      .required("Please enter the potential user base and market opportunity.")
      .test("max_word", "150 words at most", (value) => {
        return value && wordCounter(value) <= 150;
      }),
  }),

  // token information and economic validation schema
  Yup.object({
    utility_token: Yup.boolean().test(
      "is_true",
      "Please provide a utility token to finish the pre-registration process.",
      (value) => {
        return value == true;
      }
    ),
    token_use_case: Yup.string()
      .required("Please enter the primary use case, the utility of your token.")
      .test("max_word", "100 words at most", (value) => {
        return value && wordCounter(value) <= 100;
      }),
    other_token_use_case: Yup.string()
      .required("Please enter the other utilities your token has.")
      .test("max_word", "100 words at most", (value) => {
        return value && wordCounter(value) <= 100;
      }),
    total_token_supply: Yup.number()
      .positive("Please enter a positive number.")
      .required("Please enter the total supply of your token."),
    circulating_token_supply: Yup.number()
      .positive("Please enter a positive number.")
      .required("Please enter the circulating supply of your token."),
    breakdown_token: Yup.string()
      .required(
        "Please enter the the breakdown of the current token allocation, tokenomics."
      )
      .test("max_word", "50 words at most", (value) => {
        return value && wordCounter(value) <= 50;
      }),
    breakdown_tokenomics: Yup.string()
      .required("Please enter the specific breakdown of the tokenomics.")
      .test("max_word", "50 words at most", (value) => {
        return value && wordCounter(value) <= 50;
      }),
    team_wallet: Yup.string()
      .required("Please enter the list of team wallets that hold your token.")
      .test("max_word", "50 words at most", (value) => {
        return value && wordCounter(value) <= 50;
      }),
    hold_lockup: Yup.string()
      .required(
        "Please enter all lockups in place for any holders, future holders of the token."
      )
      .test("max_word", "50 words at most", (value) => {
        return value && wordCounter(value) <= 50;
      }),
    running_network_currency_type: Yup.string().when(
      "running_network_currency",
      {
        is: (running_network_currency) => running_network_currency == true,
        then: Yup.string()
          .required(
            "Please enter the network(s) that the token is currently running on."
          )
          .test("max_word", "30 words at most", (value) => {
            return value && wordCounter(value) <= 30;
          }),
      }
    ),
    exchange_name: Yup.string().when("currency_listed", {
      is: (currency_listed) => currency_listed == true,
      then: Yup.string()
        .required("Please enter the exchange(s) the token is listed on.")
        .test("max_word", "30 words at most", (value) => {
          return value && wordCounter(value) <= 30;
        }),
    }),
  }).shape(
    {
      audit_link: Yup.string()
        .ensure()
        .when(["audit_pdf", "smart_contract_audit"], {
          is: (audit_pdf, smart_contract_audit) => {
            return audit_pdf.length == 0 && smart_contract_audit == true;
          },
          then: Yup.string()
            .url("Please enter your audit pdf url.")
            .required("Please enter your audit pdf link."),
        }),
      audit_pdf: Yup.array()
        .ensure()
        .when(["audit_link", "smart_contract_audit"], {
          is: (audit_link, smart_contract_audit) => {
            return audit_link == "" && smart_contract_audit == true;
          },
          then: pdfValidator,
        }),
    },
    [
      ["audit_pdf", "audit_link"],
      ["audit_link", "smart_contract_audit"],
      ["audit_pdf", "smart_contract_audit"],
    ]
  ),
  // treasury form validation schema
  Yup.object({
    fundraising_details: Yup.string().when("fundraising", {
      is: (fundraising) => fundraising == true,
      then: Yup.string()
        .required("Please enter the date of the previous fundraising.")
        .test("max_word", "50 words at most", (value) => {
          return value && wordCounter(value) <= 50;
        }),
    }),
    amount_raised: Yup.string().when("fundraising", {
      is: (fundraising) => fundraising == true,
      then: Yup.string()
        .required("Please enter the total amount raised and the currency.")
        .test("max_word", "50 words at most", (value) => {
          return value && wordCounter(value) <= 50;
        }),
    }),
    token_spent: Yup.string().when("fundraising", {
      is: (fundraising) => fundraising == true,
      then: Yup.string()
        .required("Please enter the total spent and where you've spent it.")
        .test("max_word", "50 words at most", (value) => {
          return value && wordCounter(value) <= 50;
        }),
    }),
    project: Yup.string()
      .required("Please enter how much runway your project requires.")
      .test("max_word", "50 words at most", (value) => {
        return value && wordCounter(value) <= 30;
      }),
    currency_coin_token: Yup.string()
      .required("Please enter a number of tokens.")
      .test("max_word", "20 words at most", (value) => {
        return value && wordCounter(value) <= 20;
      }),
    policy: Yup.string()
      .required("Please enter your policy.")
      .test("max_word", "20 words at most", (value) => {
        return value && wordCounter(value) <= 20;
      }),
    spendings: Yup.string()
      .required("Please share your plan with us.")
      .test("max_word", "20 words at most", (value) => {
        return value && wordCounter(value) <= 20;
      }),
  }),
  // develpoment form form validation schema
  Yup.object({
    tech_innovation: Yup.string()
      .required("Please enter your project's technological innovations.")
      .test("max_word", "100 words at most", (value) => {
        return value && wordCounter(value) <= 100;
      }),
    code_repo_location: Yup.string()
      .url("Please enter a valid url of your project on github")
      .required("Please enter a link to your project on github"),
    product_demo: Yup.string().required(
      "Please enter your product ui if you have it."
    ),
    progress_plan: Yup.string()
      .required(
        "Please confirm if you are happy to release progress updates on our website."
      )
      .test("max_word", "100 words at most", (value) => {
        return value && wordCounter(value) <= 100;
      }),
    host_plan: Yup.string()
      .required(
        "Please confirm if you are happy to host monthly or bi-monthly AMAs on our channel."
      )
      .test("max_word", "50 words at most", (value) => {
        return value && wordCounter(value) <= 50;
      }),
  }),

  // competitors form validation schema
  Yup.object({
    competitors_peers: Yup.string()
      .required("Please enter your current competitors/peers")
      .test("max_word", "100 words at most", (value) => {
        return value && wordCounter(value) <= 100;
      }),
    competitive_adventage: Yup.string()
      .required("Please enter your project’s competitive advantages.")
      .test("max_word", "100 words at most", (value) => {
        return value && wordCounter(value) <= 100;
      }),
  }),
];

export default validationSchemaArray;
