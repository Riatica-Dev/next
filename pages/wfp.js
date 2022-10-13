import React from "react";
import Link from "next/link";
import Title from "@/components/utils/title";
import Footer from "@/components/surfaces/footer";
import styles from "@/styles/wfp.module.css";
import Nav from "@/components/surfaces/navbar";

const Faq = () => {
  return (
    <>
      <Title pageName="WFP" />
      <Nav black="true" />
      <div className={`${styles.section}`}>
        <div className="container py-2">
          <div className="row">
            <div className="col-lg-7 col-sm-12">
              <div className="">
                <p className="text-bodoni text-uppercase h2">
                  Our Commitment to the WFP
                </p>
                <p className={`${styles.text} my-2 me-auto`}>
                  This platform, delivered by Lena Instruments and owned by the
                  community, is committed to donating to the causes of the World
                  Food Programme.
                </p>
                <p className={`${styles.text} my-2 me-auto`}>
                  <br />
                  &quot;The World Food Programme is the world&apos;s largest
                  humanitarian organization, saving lives in emergencies and
                  using food assistance to build a pathway to peace, stability
                  and prosperity for people recovering from conflict, disasters
                  and the impact of climate change.
                  <br />
                </p>
                <p className={`${styles.text} my-2 me-auto mt-2`}>
                  In a world of plenty, where enough food is produced to feed
                  everyone on the planet, hunger should be a thing of the past.
                  However,{" "}
                  <span className="fw-bold">
                    conflict, climate change, disasters, inequality
                  </span>{" "}
                  and – most recently –{" "}
                  <span className="fw-bold">the COVID-19 pandemic</span> mean
                  <span className="fw-bold"> one in nine people</span> globally
                  is still<span className="fw-bold"> going to bed hungry</span>{" "}
                  and
                  <span className="fw-bold"> famine looms for millions.</span>
                </p>
                <p className={`${styles.text} my-2 me-auto mt-2`}>
                  Powered by the passion, dedication and professionalism of
                  almost 21,000 staff worldwide, the World Food Programme (WFP)
                  works in over 120 countries and territories to bring
                  life-saving food to people displaced by conflict and made
                  destitute by disasters, and help individuals and communities
                  find life-changing solutions to the multiple challenges they
                  face in building better futures.
                </p>
                <p className={`${styles.text} my-2 me-auto`}>
                  We work to enhance nutrition in women and children, support
                  smallholder farmers in improving productivity and reducing
                  losses, help countries and communities prepare for and cope
                  with climate-related shocks, and boost human capital through
                  school feeding programmes.
                </p>
                <p className={`${styles.text} me-auto`}>
                  In conflict situations, we bring relief to exhausted
                  populations and use food assistance to build pathways to peace
                  and stability – work for which WFP was awarded the Nobel Peace
                  Prize in 2020.&quot;
                </p>{" "}
                <br></br>
                <p className={`${styles.text} me-auto`}>
                  You can donate directly to them by clicking{" "}
                  <Link
                    href="https://donatenow.wfp.org/mae/~my-donation?context_form_id=form_0236ceb69631d3d660b158ef67080c96000823a5_630ced9a3bb021.76355649"
                    passHref
                  >
                    <a
                      className={`${styles.href} text-blue  text-uppercase`}
                      target="_blank"
                    >
                      here
                    </a>
                  </Link>
                </p>{" "}
                <br></br>
                <p className={`${styles.text} me-auto`}>
                  CloudFunding, aiming to become one of the largest community
                  driven and decentralized launchpad platforms, will work hard
                  to lower its costs and every year increase its contribution to
                  noble causes all over the world, and that also goes for more
                  humble sized NGOs. Two of them were brought to our attention
                  by Lena Instruments:
                </p>
                <p className={`${styles.text} me-auto`}>
                  The first one is local to them - <strong>Arud</strong> is a Swiss NGO working
                  in Switzerland and abroad to support and fight addictions of
                  alcohol, drugs, medication, gambling, and the internet,
                  amongst other things. &quot;We offer individual support and
                  treatment for any dependence as well as for hepatitis C –
                  open-minded and unbiased. Professionals from different
                  specialist fields will work with you to improve your physical
                  and mental health.&quot;
                </p>
                <br />
                <p className={`${styles.text} me-auto mt-4`}>
                  Here&apos;s their website to learn more:{" "}
                  <Link href="https://arud.ch/en/" passHref>
                    <a className={`${styles.href} text-blue`} target="_blank">
                      https://arud.ch/en/
                    </a>
                  </Link>
                </p>{" "}
                <br></br>
                <p className={`${styles.text} me-auto mt-4`}>
                  The second NGO is <strong>Algorithmwatch</strong>, a Germany-based research and
                  advocacy organization that is committed to watching, unpacking
                  and analyzing automated decision-making (ADM) systems and
                  their impact on society. They have released alarming reports
                  about how large tech companies are utilizing their algorithms.
                  Some members of the younger generation have developed lower
                  attention spans, addictive behavior, and mental and physical
                  distress, and many young adults even decide to undertake
                  surgery to alter their physical appearance. The social media
                  we are exposed to is becoming less and less authentic, and
                  what was intended to connect us is now instead setting us
                  apart. <strong>Algorithmwatch</strong> shed light on the algorithms that are
                  causing such large changes in our societies and behavior.
                  <br />
                  <br />
                  <div className="mt-4">
                  </div> Here&apos;s their website to learn more about their mission:{" "}
                  <Link href="https://algorithmwatch.org/en/" passHref>
                    <a className={`${styles.href} text-blue`} target="_blank">
                      https://algorithmwatch.org/en/
                    </a>
                  </Link>
                </p>
                <br />
                <p className={`${styles.text} me-auto mt-4`}>
                  Every month we will write about a new NGO that we think is
                  worth finding out about and donating to.
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
