import EmailAddressForm from "@/components/before_register/emailAddressForm";
import PasswordForm from "@/components/before_register/passwordForm";
import SummaryFormStepOne from "@/components/before_register/summaryFormStepOne";
import SummaryFormStepTwo from "@/components/before_register/summaryFormStepTwo";
import SummaryFormStepThree from "@/components/before_register/summaryFormStepThree";
import TokenInformationEconomics from "@/components/before_register/tokenInformationEconomics";
import FundForm from "@/components/before_register/fundForm";
import DevelpomentForm from "@/components/before_register/develpomentForm";
import CompetitorsForm from "@/components/before_register/competitorsForm";
import EmailConfrimationForm from "@/components/before_register/emailConfrimationForm";
import {
  MessagesOne,
  MessagesTwo,
} from "@/components/before_register/messages";

const stepsContentArray = [
  {
    component: <EmailAddressForm key="EmailAddressForm" />,
    title: "Where can we reach you?",
    description: "Please provide us with your email address.",
  },
  {
    component: <EmailConfrimationForm key="EmailConfrimationForm" />,
    title: "Confirm your email address",
    description:
      "Please confirm your email address by entering the verification code we just sent to you.",
  },
  {
    component: <PasswordForm key="PasswordForm" />,
    title: "Create a password for your account",
    description: "",
  },
  {
    component: <MessagesOne key="MessagesOne" />,
    title: "",
    description: "",
  },
  {
    component: <SummaryFormStepOne key="SummaryFormStepOne" />,
    title: "Project Summary",
    description: "Introduce us to your project.",
  },
  {
    component: <SummaryFormStepTwo key="SummaryFormStepTwo" />,
    title: "Project Summary",
    description: "Introduce us to your project.",
  },
  {
    component: <SummaryFormStepThree key="SummaryFormStepThree" />,
    title: "Project Summary",
    description: "Introduce us to your project.",
  },
  {
    component: <TokenInformationEconomics key="TokenInformationEconomics" />,
    title: "Token Information & Economics",
    description: "Let’s talk about your token.",
  },
  {
    component: <FundForm key="FundForm" />,
    title: "Treasury",
    description:
      "We're almost there, guide us through your financials the best you can.",
  },
  {
    component: <DevelpomentForm key="DevelpomemtForm" />,
    title: "Development",
    description: "Let us know more about what you've achieved so far.",
  },
  {
    component: <CompetitorsForm key="CompetitorsForm" />,
    title: "Competitors",
    description: "Last few questions, this time regarding competition…",
  },
  {
    component: <MessagesTwo key="MessagesTwo" />,
    title: "",
    description: "",
  },
];

export default stepsContentArray;
