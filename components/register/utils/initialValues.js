// all fields names for regsiter page
const initialValues = {
  // initial values for select company type
  company_type: "company_campany",
  country_legal_register: "",

  // initial values for company details form
  company_webpage: "",
  company_objective: "",
  jurisdictions_compliance: "",
  legal_opinion_switch: true,
  legal_opinion_pdf: [],
  legal_opinion_down_road: true,

  // initial values for bussiness records
  business_country_record: "",
  legal_bussiness_name: "",
  bussiness_name: "",
  house_registeration_number: "",
  incorporation_date: "",
  business_type: "",

  // initial value for business address
  business_address_one: "",
  business_address_two: "",
  business_city: "",
  business_zip_code: "",

  // initial value for role company form
  company_role: "only_director_and_significant_shareholder",

  // initial value for telegram account form
  telegram_account: "",

  // initial value for personal details form
  first_name: "",
  last_name: "",
  date_birthday: "",

  // initial value for home address form
  home_country: "",
  home_zip_code: "",
  home_address_one: "",
  home_address_two: "",
  home_city: "",

  // initial value for verify identity form
  identity_country: "",
  identity_type: "",
  id_image: {
    side_1: [],
    side_2: [],
  },
  selfie_image: [],

  // initial value for money warp form
  crypto_fund: "SGB",
  money_fund_by_sgb: "",
  money_fund_by_flr: "",

  // initial value for raise period form
  raise_period: "",

  // initial value for yield period form
  yield_period: "",

  // initial value yield for tokens given
  tokens_given: "",

  // initial value for help user form
  legal_opinion_hepler: false,
  smart_contract_hepler: false,

  // initial value for service form
  service_one: false,
  client_needs: "",
  service_two: false,
};

export default initialValues;
