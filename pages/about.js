import React from "react";
import Title from "@/components/utils/title";
import Navbar from "@/components/surfaces/navs";
import Footer from "@/components/surfaces/footer";
import styles from "@/styles/about.module.css";
import { faqArrayOne, faqArrayTwo } from "assets/faqArrays";
const Faq = () => {
  return (
    <>
      <Title pageName="FAQ" />
      <Navbar />

      <div className={`${styles.sectionOne}`}>
        <div className="container">
          <div className="text-white">
            <p className={`${styles.titleRotation} text-bodoni`}>
              PRESENTATION
            </p>
            <p className={`${styles.text} my-2`}>
              Lena Instruments is pleased to announce its new Flare product,
              CloudFunding®.
            </p>
            <p className={`${styles.text} my-2`}>
              CloudFunding will bring a whole new dimension to the concept of
              crowdfunding and will provide an unprecedented experience for both
              contributors and projects that choose Flare as a Layer 1
              Blockchain.
            </p>
            {faqArrayOne.map((p, index) => (
              <p className={`${styles.text} my-2`} key={index}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className={`${styles.sectionTwo}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5">
              <div className={`${styles.backgroundImage}`}></div>
            </div>
            <div className="col-lg-7 col-sm-12">
              <div className={`${styles.fullText}`}>
                <p className={`${styles.titleRotation} text-bodoni mx-md-4`}>
                  PROJECTS
                </p>
                <div className="mx-auto">
                  <p className={`${styles.text} my-2 ms-auto fw-bold h5`}>
                    CloudFunding offers projects…
                  </p>

                  {faqArrayTwo.map((p, index) => (
                    <p className={`${styles.text} my-2 ms-auto`} key={index}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.sectionThree}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 col-sm-12">
              <div className="">
                <p className={`${styles.titleRotation} text-bodoni mx-md-4`}>
                  RULES OF THE GAME
                </p>

                <p className={`${styles.text} my-2 me-auto fw-bold h5`}>
                  What are the rules of the game?
                </p>
                <p> TIMELINE HERE</p>
                <p className={`${styles.text} my-2 me-auto`}>
                  The CloudFunding Period is divided into two separate
                  sub-periods: the Raise Period and the Yield Period.
                </p>
                <p className={`${styles.text} my-2 me-auto`}>
                  <span className="fw-bold h5"> 1. The Raise Period</span>
                  <br />
                  The Raise Period is the period during which the community is
                  asked to show its interest to the project by wrapping and
                  locking in the smart contract (audited by Omniscia, a third
                  party auditing firm that confirms the system operates
                  according to our public announcements), and for their SGB
                  and/or FLR to try and meet the Target Amount set by the
                  project&apos;s team. These wrapped and delegated WFLR and/or
                  WSGB will constitute the principal, from which rewards will be
                  generated and contributed to the project.
                  <br />
                </p>
                <p className={`${styles.text} my-2 me-auto mt-2`}>
                  It&apos;s up to the project to set the deadline for the Raise
                  Period, which can be anything between one hour (minimum) and
                  one month (maximum). If the Target Amount is reached before
                  the end of the deadline set by the project, the Raise Period
                  ends.
                </p>
                <p className={`${styles.text} my-2 me-auto mt-2`}>
                  <span className="fw-bold">1.1. The Target Amount </span>
                  The Project needs to set the Target Amount; in the case of
                  CloudFunding, it would be the amount of FLR or SGB the
                  community needs to wrap and delegate on the platform so that
                  the rewards from this{" "}
                  <span className="fw-bold">Target Amount</span> will accrue for
                  the project.
                </p>

                <p className={`${styles.text} my-2 me-auto`}>
                  Here is an example to help you better understand CloudFunding:{" "}
                  <br />
                  &quot;Gunter&quot; is launching a new project called &quot;Tea
                  House&quot; and wants to receive the rewards of 1000 WFLR. In
                  other words, Gunter wants his community to wrap and delegate
                  1000 FLR so that the new project accrues the rewards from
                  those 1000 WFLR.
                  <br />
                  Rachelle, who has 600 FLR, decides to wrap all of them but
                  only wants to give 50% of the rewards to Gunter&apos;s
                  project. Hence only 300 WFLR from the 600 WFLR of
                  Rachelle&apos;s capital will generate rewards which are put
                  towards Gunter&apos;s project. <br />
                  Rosse, who has 1200 FLR, is not a keen fan of Gunter like
                  Rachelle, but still wants to chip in, maybe because Rachelle
                  kindly asked him to do so. Rosse, who is wrapping his total
                  1200 FLR on a weekly basis anyway, decides that only 150 WFLR
                  of his total 1200 WFLR should generate rewards towards
                  Gunter&apos;s project. He sets the cursor on the CloudFunding
                  platform&apos;s contract to wrap his FLR to 12.5%, allowing
                  the smart contract to give 12.5% of the rewards of his total
                  1200 WFLR. This means that the rewards of 150 WFLR will go
                  towards Gunter&apos;s project, whilst the remaining 1050 WFLR
                  (1200-150) generate rewards which go directly to his wallet.
                  <br />
                  Shandler decides to deviate 100% of the rewards of his 350
                  WFLR towards Gunter&apos;s project <br />
                  Monika decides to deviate 100% of the rewards of her 200 WFLR
                  towards Gunter&apos;s project.
                  <br />
                  Phebo heard that the Raise Deadline set up by Gunter was in
                  five days, and so as it was still the second day, she decided
                  to give herself more time to think about whether she wanted to
                  chip in or not.
                  <br />
                  Additionally, on the first day of the Raise Period, Joel
                  decided to chip in 100% of his 10 WFLR but realised the same
                  day that 10 WFLR were needed to pay for his rent. He therefore
                  withdrew from the raise on Day One, which can still be done if
                  the target amount has not yet been met.
                  <br />
                  To find out if Gunter managed to reach his Target amount, we
                  need to add up the WFLR that are effectively generating
                  rewards towards his project. This would be calculated by: 300
                  WFLR + 150 WFLR + 350 WFLR + 200 WFLR = 1000 WFLR. Therefore
                  Gunter did indeed meet his target.
                  <br />
                  Since Gunter met his target on Day Two, well before the Raise
                  Deadline which was set by Gunter to five days, the Raise
                  Period is over. This means that Phebo missed the raise and is
                  now unable to contribute. The Raise Period is always less than
                  or equal to the Raise Deadline (set by the project).
                  <br />
                  At the end of the Raise Period, the Platform will immediately
                  issue IOUs of Gunter&apos;s token to the contributors.
                  <br />
                  Now Gunter can enjoy the rewards generated by his community
                  throughout the <span className="fw-bold">Yield Period.</span>
                  <br />
                  Gunter will have to distribute his tokens according to the
                  tokenomics plan shared with the community by the end of the
                  Yield Period.
                </p>
                <p className={`${styles.text} my-2 me-auto fw-bold h5`}>
                  2. The Yield Period
                </p>
                <p className={`${styles.text} me-auto`}>
                  The Yield Period is a period set up by the project and made
                  public before any contribution from the community is made. It
                  is the period during which the rewards generated from the now
                  reached Target Amount WFLR/WSGB will go to the project epoch
                  after epoch. This period can last for a maximum of five months
                  (this is hardcoded in the platform, but each project is free
                  to set it up based on their preferences). If the raise is
                  successful, the Yield Period starts immediately after the
                  Raise Period ends. If the raise was not successful and the
                  Target Amount was not met before the Raise Deadline, then the
                  project won&apos;t be CloudFunded and has to be taken down
                  from the platform. All the rewards accrued up to that point
                  will be returned to the Community.
                  <br />
                  If the project doesn&apos;t have its tokens available once the
                  Yield Period starts, the community will receive an IOU of the
                  tokens, and the actual tokens will be distributed later on.
                  This means that contributors can already start to enjoy
                  trading it on our partnering DEXs.
                  <br />
                  The projects are required to issue their tokens and audit
                  their smart contracts one month before the end of the Yield
                  Period at the latest.
                  <br />
                  The token distribution (and exchanging and burn of the IOUs)
                  must happen at the end of the Yield Period at the latest.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className={`${styles.backgroundImage}`}></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
