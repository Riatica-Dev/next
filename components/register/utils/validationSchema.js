import * as Yup from "yup";
import {
  wordCounter,
  imageValidator,
  pdfValidator,
} from "@/components/utils/logic/validationFunction";

const validationSchemaArray = [
  // empty schema object
  Yup.object({}),

  // confirmation number validation schema
  Yup.object({
    company_type: Yup.string().required("Please choose the type of company."),
    country_legal_register: Yup.string().required(
      "Please select your country."
    ),
  }),

  // empty schema object
  Yup.object({}),

  // company details form validation schema
  Yup.object({
    company_webpage: Yup.string()
      .url("Please enter a valid company url.")
      .required("Please enter the company webpage."),
    company_objective: Yup.string().required(
      "Please enter the company objective."
    ),
    jurisdictions_compliance: Yup.string().required(
      "Please enter whether you are compliant in all jurisdictions."
    ),
    legal_opinion_pdf: Yup.array().when("legal_opinion_switch", {
      is: (legal_opinion_switch) => legal_opinion_switch == true,
      then: pdfValidator,
    }),
  }),

  // bussiness records form validation schema
  Yup.object({
    business_country_record: Yup.string().required(
      "Please select your country."
    ),

    legal_bussiness_name: Yup.number("Please enter only number.").when(
      "company_type",
      {
        is: (company_type) => company_type == "non_profit_company",
        then: Yup.number().required("Please enter your charity number."),
      }
    ),

    house_registeration_number: Yup.string().when("company_type", {
      is: (company_type) => company_type == "company_campany",
      then: Yup.string().required(
        "Please enter your government registration number."
      ),
    }),

    bussiness_name: Yup.string().required(
      "Please enter your business's public name."
    ),
    incorporation_date: Yup.date().required(
      "The incorporation date is required."
    ),
    business_type: Yup.string().when("company_type", {
      is: (company_type) => company_type == "company_campany",
      then: Yup.string().required("Please select your business type."),
    }),
  }),
  // businss address from valdaition schema
  Yup.object({
    business_address_one: Yup.string().required("Please enter your address."),
    business_address_two: Yup.string(),
    business_city: Yup.string().required("Please enter your city."),
    business_zip_code: Yup.string().required(
      "Please enter your zip code number."
    ),
  }),

  // role company from validation schema
  Yup.object({
    company_role: Yup.string().required("Please enter your company role."),
  }),

  // telegram account from validation schema
  Yup.object({
    telegram_account: Yup.string().required(
      "Please enter your telegram account."
    ),
  }),

  // personal details from validation schema
  Yup.object({
    first_name: Yup.string().required("Please enter your first name"),
    last_name: Yup.string().required("Please enter your last name"),
    date_birthday: Yup.date()
      .transform(function (value, originalValue) {
        if (this.isType(value)) {
          return value;
        }
        const result = parse(originalValue, "dd.MM.yyyy", new Date());
        return result;
      })
      .typeError("Please enter a valid date")
      .required("Please enter your date of birth.")
      .min("1942-11-13", "Date is too early."),
  }),

  // home address form validation schema
  Yup.object({
    home_country: Yup.string().required("Please choose your country."),
    home_zip_code: Yup.string().required("Please enter your zip code."),
    home_address_one: Yup.string().required("Please enter your address"),
    home_address_two: Yup.string(),
    home_city: Yup.string().required("Please enter your city"),
  }),

  // verify identity form validation schema
  Yup.object({
    identity_country: Yup.string().required("Please choose your country."),
    identity_type: Yup.string().required(
      "Please choose how you want to verify your identity."
    ),
    id_image: Yup.object().when("identity_type", {
      is: (identity_type) => identity_type == "passport",
      then: Yup.object({
        side_1: imageValidator,
        side_2: Yup.array(),
      }),
      otherwise: Yup.object({
        side_1: imageValidator,
        side_2: imageValidator,
      }),
    }),
    selfie_image: imageValidator,
  }),

  // empty schema object
  Yup.object({}),

  // money warp form validation schema
  Yup.object({
    crypto_fund: Yup.string().required("Your must choose the compaign type."),
    money_fund_by_sgb: Yup.number().when("crypto_fund", {
      is: (crypto_fund) => crypto_fund == "SGB",
      then: Yup.number().required("Please enter a number"),
      otherwise: Yup.number().when("crypto_fund", {
        is: (crypto_fund) => crypto_fund == "SGB/FLR",
        then: Yup.number().required("Please enter a number"),
      }),
    }),
    money_fund_by_flr: Yup.number().when("crypto_fund", {
      is: (crypto_fund) => crypto_fund == "FLR",
      then: Yup.number().required("Please enter a number"),
      otherwise: Yup.number().when("crypto_fund", {
        is: (crypto_fund) => crypto_fund == "SGB/FLR",
        then: Yup.number().required("Please enter a number"),
      }),
    }),
  }),

  // raise period form validation schema
  Yup.object({
    raise_period: Yup.number()
      .min(1, "Your must between 1 and 30 days")
      .max(30, "Your must between 1 and 30 days")
      .required("Please enter how long you want the Raise Period to be."),
  }),

  // yield period form validation schema
  Yup.object({
    yield_period: Yup.number()
      .min(1, "Your must between 1 and 90 days")
      .max(90, "Your must between 1 and 90 days")
      .required("Please enter how long you want the Yield Period to be."),
  }),

  // tokens given form validation schema
  Yup.object({
    tokens_given: Yup.number().required("Please enter a number of tokens."),
  }),

  // empty schema object
  Yup.object({}),

  // services form validation schema
  Yup.object({
    client_needs: Yup.string().when("service_one", {
      is: (service_one) => service_one == true,
      then: Yup.string()
        .required("Please enter the services you need.")
        .test("max_word", "100 words at most.", (value) => {
          return value && wordCounter(value) <= 100;
        }),
    }),
  }),
];

export default validationSchemaArray;
