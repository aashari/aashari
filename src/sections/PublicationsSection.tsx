"use client";

import { HiSparkles } from "react-icons/hi";
import { FaBook } from "react-icons/fa";
import Section from "../components/Section";
import SocialLink from "../components/SocialLink";

export default function PublicationsSection() {
  return (
    <Section title="Publications" icon={<HiSparkles className="icon-primary mr-2" size={24} />} id="publications">
      <div className="space-y-6 grid grid-cols-1">
        <div className="card w-full">
          <h3 className="text-xl mb-4 flex items-center gap-2"><FaBook className="icon-primary" size={24} /> A Design of Crowd-Based Corruption Prevention System in Indonesia</h3>
          <p className="mb-4">2019 International Conference on Information Management and Technology (ICIMTech) · Aug 1, 2019</p>
          <p className="mb-4">Combatting corruption requires not only centralized and institution-based strategy, but must be met with distributive effort supported by abundance of data and technological advancement. This work tackles the issue of decentralized corruption prevention by describing the method of doing heuristic analysis based on multiple data regarding corruption.</p>
          <div className="mt-4">
            <SocialLink href="https://ieeexplore.ieee.org/document/8843839" icon={<FaBook size={18} />} label="Show publication" ariaLabel="Read A Design of Crowd-Based Corruption Prevention System in Indonesia" />
          </div>
        </div>

        <div className="card w-full">
          <h3 className="text-xl mb-4 flex items-center gap-2"><FaBook className="icon-primary" size={24} /> Systematic literature review on corruption prevention efforts towards sustainable economy in Indonesia</h3>
          <p className="mb-4">IOP Conference Series: Earth and Environmental Science · Dec 14, 2018</p>
          <p className="mb-4">Corruption is an extraordinary crime and must be eradicated not only as fast as possible, but also as efficient and as effective as possible as it hinders the process of achieving sustainable economy. In current modern society, information technology exists as a multidisciplinary tool to solve lingering problems that could not be solved by traditional efforts.</p>
          <div className="mt-4">
            <SocialLink href="https://iopscience.iop.org/article/10.1088/1755-1315/195/1/012051" icon={<FaBook size={18} />} label="Show publication" ariaLabel="Read Systematic literature review on corruption prevention efforts towards sustainable economy in Indonesia" />
          </div>
        </div>

        <div className="card w-full">
          <h3 className="text-xl mb-4 flex items-center gap-2"><FaBook className="icon-primary" size={24} /> Development of a Web Based Corruption Case Mapping Using Machine Learning with Artificial Neural Network</h3>
          <p className="mb-4">2018 International Conference on Information Management and Technology (ICIMTech) · Sep 1, 2018</p>
          <p className="mb-4">This work focuses on the development of a web application aimed to provide insight to corruption case per province in Indonesia. The web application was developed using Machine Learning, specifically Backpropagation Artificial Neural Network (ANN). Web crawling and web scraping techniques are used to gather news content from 7 major news portal in Indonesia.</p>
          <div className="mt-4">
            <SocialLink href="https://ieeexplore.ieee.org/document/8528150" icon={<FaBook size={18} />} label="Show publication" ariaLabel="Read Development of a Web Based Corruption Case Mapping Using Machine Learning with Artificial Neural Network" />
          </div>
        </div>

        <div className="card w-full">
          <h3 className="text-xl mb-4 flex items-center gap-2"><FaBook className="icon-primary" size={24} /> Indonesian teacher engagement index (ITEI): Decision support system for education</h3>
          <p className="mb-4">2017 5th International Conference on Cyber and IT Service Management (CITSM) · Aug 1, 2017</p>
          <p className="mb-4">Indonesian Teacher Engagement Index (ITEI) is an instrument designed to help teachers to detect themselves through self diagnostic. The results of self-diagnostic is then systemally developed with the goal of becoming a decision support system for the central government to the areas in the field of education.</p>
          <div className="mt-4">
            <SocialLink href="https://ieeexplore.ieee.org/document/8089321" icon={<FaBook size={18} />} label="Show publication" ariaLabel="Read Indonesian teacher engagement index (ITEI): Decision support system for education" />
          </div>
        </div>

        <div className="card w-full">
          <h3 className="text-xl mb-4 flex items-center gap-2"><FaBook className="icon-primary" size={24} /> Corruption Cases Mapping Based on Indonesia&apos;s Corruption Perception Index</h3>
          <p className="mb-4">Journal of Physics: Conference Series · Jan 1, 2017</p>
          <p className="mb-4">Government plays an important role in nation economic growth. Nevertheless, there are still many occurrences of government officers abusing their offices to do an act of corruption. To develop the mapping system, researchers use Naïve Bayes Classifier to classify which news articles talk about corruption and which news articles are not.</p>
          <div className="mt-4">
            <SocialLink href="http://iopscience.iop.org/article/10.1088/1742-6596/801/1/012019" icon={<FaBook size={18} />} label="Show publication" ariaLabel="Read Corruption Cases Mapping Based on Indonesia&apos;s Corruption Perception Index" />
          </div>
        </div>

        <div className="card w-full">
          <h3 className="text-xl mb-4 flex items-center gap-2"><FaBook className="icon-primary" size={24} /> Corruption Early Prevention: Decision Support System for President of the Republic of Indonesia</h3>
          <p className="mb-4">Journal of Physics: Conference Series · Jan 1, 2017</p>
          <p className="mb-4">Corruption is an extraordinary crime, and then the prevention must also be extraordinary, simultaneously (national) in the form of early warning that involves all elements; government, industry, and society. To realize it the system needs to be built which in this study is called the Corruption Early Prevention (CEP) as a Decision Support System for President of the Republic of Indonesia.</p>
          <div className="mt-4">
            <SocialLink href="http://iopscience.iop.org/article/10.1088/1742-6596/801/1/012028" icon={<FaBook size={18} />} label="Show publication" ariaLabel="Read Corruption Early Prevention: Decision Support System for President of the Republic of Indonesia" />
          </div>
        </div>
      </div>
    </Section>
  );
} 
