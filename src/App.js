import "./App.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import React from "react";

const discordInvite = `https://discord.gg/geUvTyn55S`;

const Arrow = () => {
  return (
    <span className="ArrowContainer" aria-hidden="true">
      <svg
        className="Arrow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        aria-hidden="true"
      >
        <path
          d="M7 1.167L12.833 7 7 12.833M12.25 7H1.167"
          fill="transparent"
          strokeWidth="2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
};

const Link = ({ href, text }) => {
  return (
    <a className="Link" href={href}>
      <motion.div
        whileHover={{
          opacity: 0.6,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        {text}
        <Arrow />
      </motion.div>
    </a>
  );
};

const SectionPadding = (props) => {
  return (
    <div className="SectionPadding" style={{ ...props.style }}>
      {props.children}
    </div>
  );
};

const TitleSection = () => {
  return (
    <div
      className="Background"
      style={{
        width: "100%",
      }}
    >
      <motion.div
        className="Title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
      >
        <div className="Header">
          <div className="Gradient">Eternal</div>
          <div className="Default">RP</div>
        </div>
        <div className="Description">
          A fully made-from-scratch FiveM roleplay server. Daily updates, great
          performance and countless features!
        </div>
        <div className="Links">
          <Link href={discordInvite} text="Join our discord" />
        </div>
      </motion.div>
    </div>
  );
};

const Offer = (props) => {
  return (
    <motion.div
      className="Offer"
      whileHover={{ scale: 1.01 }}
      style={{
        ...props.style,
      }}
    >
      <div
        style={{
          padding: "8px",
        }}
      >
        <div className="OfferImage">
          <div
            className={props.image}
            style={{
              height: "100%",
              width: "100%",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "8px",
          width: "100%",
        }}
      >
        <div style={{ width: "100%" }} className="OfferTitle">
          {props.title}
        </div>
        <div style={{ marginTop: "8px" }} className="OfferDesc">
          {props.desc}
        </div>
      </div>
    </motion.div>
  );
};

const Background = ({ color, children }) => {
  return (
    <div
      className={`bg-${color}`}
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

const WhatWeOfferSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <Background color="purple">
      <div className="Section">
        <motion.div
          className="Container"
          ref={ref}
          animate={{ opacity: inView ? 1 : 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="SectionTitle">TOP FEATURES</div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Offer
              image="image-cars"
              title={`100+ CUSTOM & MANUALLY TUNED VEHICLES`}
              desc={`Our city has a wide selection of custom vehicles. Each and every vehicle is manually tuned for realism and balance by our expert developer. Vehicles are divided into classes (S, A, B, C, etc) to ensure balance for chases and races!`}
            />
            <Offer
              image="image-apartments"
              title={`1000+ PROPERTIES`}
              desc={`Almost every apartment and house in the city is able to be purchased and owned by a player. If you wish to play in the criminal side of the city, you can also rob them. ;)`}
            />
            <Offer
              image="image-performance"
              title={`BEST PERFORMANCE`}
              desc={`Thanks to our server being developed from scratch by a great developer with years of experience, you can always expect high framerates and low latency, even on a potato! We can achieve this basically by not being idiots and actually making our server instead of copy pasting ESX.`}
            />
            <Offer
              image="image-criminals"
              title={`COUNTLESS ACTIVITIES`}
              desc={`Our city offers 100+ unique, engaging and fun activities for criminals, civilians and law enforcement! Work as a garbage man, start your own driving school business or become the crime kingpin!`}
            />
            <Offer
              image="image-mdt"
              title={`LAW ENFORCEMENT SYSTEMS`}
              desc={`We always work hard to make our UI intuitive and great to use. Law enforcement are equipped with a modern, well designed and intuitive MDT system, enabling for complex and in-depth RP!`}
            />
            <Offer
              image="image-factions"
              title={`FACTIONS & GANGS`}
              desc={`Creating a business is fast and easy. Take advantage of our factions system to start your own legal business, crime organization or even a law enforcement firm. Hire members, purchase a safe, purchase a garage, purchase a business bank account, and many more! Your creativity is the limit.`}
            />
          </div>
        </motion.div>
      </div>
    </Background>
  );
};

const AboutUsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <Background color="blue">
      <div
        style={{
          width: "100%",
        }}
      >
        <div className="Section">
          <motion.div
            className="Container"
            style={{ width: "auto", marginLeft: "8px", marginRight: "8px" }}
            ref={ref}
            animate={{ opacity: inView ? 1 : 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="SectionTitle">FOR PLAYERS. BY PLAYERS.</div>
            <div
              className="About"
              style={{ marginTop: "32px", width: "100%", maxWidth: "500px" }}
            >
              EternalRP was created, because there is basically only 1 actually
              good roleplay server. Our goal was to provide a fun and well made
              server with great performance and tons of content.
              <br />
              <br />
              I've personally spent over 1000h developing this server from
              scratch and making it what it is since 2020.
            </div>
            <div className="AboutButton">
              <a className="Link" href={discordInvite}>
                <motion.div
                  style={{
                    backgroundColor: "var(--primary)",
                    padding: "12px",
                    borderRadius: "8px",
                  }}
                  whileHover={{
                    opacity: 0.6,
                    transition: { duration: 0.1 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join our discord
                  <Arrow />
                </motion.div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Background>
  );
};

function App() {
  return (
    <div className="App">
      <SectionPadding />
      <TitleSection />
      <SectionPadding />
      <WhatWeOfferSection />
      <SectionPadding />
      <AboutUsSection />
    </div>
  );
}

export default App;
