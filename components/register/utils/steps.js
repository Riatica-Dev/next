import SelectCompaignTypeForm from "@/components/register/selectCompaignTypeForm";
import PersonalDetialsForm from "@/components/register/personalDetailsForm";
import HomeAddressForm from "@/components/register/homeAddressForm";
import RoleCompanyForm from "@/components/register/roleCompanyForm";
import BusienssAddressForm from "@/components/register/businessAddressFrom";
import MoneyWarpForm from "@/components/register/moneyWarpForm";
import RaisePeriodForm from "@/components/register/raisePeriodForm";
import YieldPeriodForm from "@/components/register/yieldPeriodForm";
import VerifyIdentityForm from "@/components/register/verifyIdentityForm";
import BusinessRecords from "@/components/register/businessRecords";
import TelegramAccount from "@/components/register/telegramAccount";
import TokensGiven from "@/components/register/tokensGiven";
import CompanyDetailsForm from "@/components/register/companyDetails.js";
import {
  MessageOne,
  MessageTwo,
  MessageThree,
  MessageFour,
  Messagefive,
} from "@/components/register/messages";
import HelperUser from "@/components/register/helperUser";
import MoreServices from "../moreServices";

const stepContentArray = [
  <MessageOne key="MessageOne" />,
  <SelectCompaignTypeForm key="selectCompaignTypeForm" />,
  <MessageFour key="MessageFour" />,
  <CompanyDetailsForm key="CompanyDetailsForm" />,
  <BusinessRecords key="businessRecords" />,
  <BusienssAddressForm key="busienssAddressForm" />,
  <RoleCompanyForm key="roleCompanyForm" />,
  <TelegramAccount key="telegramAccount" />,
  <PersonalDetialsForm key="personalDetialsForm" />,
  <HomeAddressForm key="homeAddressForm" />,
  <VerifyIdentityForm key="verifyIdentityForm" />,
  <MessageTwo key="messagesTwo" />,
  <MoneyWarpForm key="moneyWarpForm" />,
  <RaisePeriodForm key="raisePeriodForm" />,
  <YieldPeriodForm key="yieldPeriodForm" />,
  <TokensGiven key="tokensGiven" />,
  <HelperUser key="helperUser" />,
  <MoreServices key="moreServices" />,
  <MessageThree key="messageThree" />,
  <Messagefive key="messageFive" />,
];

export default stepContentArray;
