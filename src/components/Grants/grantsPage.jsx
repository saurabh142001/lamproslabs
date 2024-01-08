// GrantApp.js
import React from "react";
import "../Grants/grants.css";

const GrantCard = ({
  grantName,
  grantApplicationSite,
  ecosystem,
  platform,
  pastPerformance,
  expectedGrantSize,
  kycRequired,
  shortDescription,
  logoUrl,
  imageUrl,
}) => {
  return (
    <div className="grant-card">
      <div className="grant-card-header">
        <div className="grant-card-logo">
          <img src={logoUrl} alt={`${grantName} Logo`} loading="lazy" />
        </div>
      </div>

      <div className="grant-card-body">
        <div className="grant-card-details">
          <h3>{grantName}</h3>

          <p>
            <strong>Ecosystem:</strong> {ecosystem}
          </p>
          <p>
            <strong>Platform:</strong> {platform}
          </p>
          <p>
            <strong>Past Performance:</strong> {pastPerformance}
          </p>
          <p>
            <strong>Expected Grant Size:</strong> {expectedGrantSize}
          </p>
          <p>
            <strong>KYC Required:</strong> {kycRequired ? "Yes" : "No"}
          </p>
          <div className="description-container">
            <p className="description">{shortDescription}</p>
          </div>
        </div>
      </div>
      <div className="grant-card-footer">
        <a
          href={grantApplicationSite}
          target="_blank"
          rel="noopener noreferrer"
          className="apply-now-button"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

const GrantApp = () => {
  const grantData = [
    {
      grantName: "Space ID",
      grantApplicationSite:
        "https://docs.google.com/forms/d/e/1FAIpQLSde9ztQXGArzVdkdoep0ZzrHGv7xMytZO0Bb9YPYDVJOFJvKA/viewform?pli=1",
      ecosystem: "Blockchain",
      platform: "Artibtrum",
      pastPerformance: "High",
      expectedGrantSize: " $200 to $10,000",
      kycRequired: true,
      shortDescription:
        "SPACE ID Grant Program, a long-term funding initiative designed to support and enrich the blockchain community. Our goal is to empower developers and entrepreneurs to launch innovative projects and spread your visions with us. Through this program, we aim to facilitate the growth of the blockchain community and advance the frontier of blockchain technology.",
      logoUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAk1BMVEUe76T///8AAAAe8qYWsHkA7p0f96kA7p8e7KIRiF0Yw4YYvYIObksFKRwJQi0U76Ls/faZ9s72/vvD+eGi99KJ9cZs87tT8rM88azT++lc8rV69MDl/PK1+NrO++cc4psMX0EPd1IHNiUb2JQJSjMSkGMTmWkazY0QgVkVqHMEGxMEIRYLWDwNaEgDFg8GLyABDgrPXwTdAAAEKElEQVRogbWaW2OqMAyAq4WClw2Yd3GiQ8VNPWf//9edchWbtKV6mqc9tB9ZmqRJKul1kI/NZDqbL5Y+If5yMZ9NJ5uPLvuIdsUqWhPX9YIgIIXwPzzXJeto9Sp8G3ucSxDhX/Di7fPwMPJdFNx8wPWj8Cn4JpboLOgfb4zhYaxWuq1+LNNeAo88rxs6F8+LDOBb3wBd4H30aDH4rKtF7hK4s07wcGmodqX8EloewFeBsdqV8gGIKhH+6T6HzsX9VMOnL7A5faqCRy+xOT2Sw1/TG+rehr9i74b+icNX/4HN6SsMHuIuSOWC04MQgS8ROGU0yUYOKqMsYQz5QLCE8BmMS8rS43tfIYdTguC9mQjfQoOzdKcil7JPGNjobgW4D4zCTnp0Lt+AHviP8Eg0CqXXbux+fwzodX4v4SEwOD10Zff7O2B3L2zBYxHOOpj7LntRdy++wzfiabJjs/F9MMLFOX81i4Dd3U0Dj4XTpGm96yvjri4RRoc/9bpEsEwQ1/AQKF4f5gCLkpYSbC87VDes4KKrNIoPoA+LauwlqhcOQxAfr3fstGy+tvKqo7C28HWCBCeTaINJ/V9egF22BRwcZyZxMFz1q/xIORwE53e5POugOF/tlKtH4movh4M7gg3K5X4XNqGJzNVXHA7SChuXLt6JzXuNH9yzuL+Q3lrMhxX8XW4VynKp4W84PFj3yAfYqoWzdLDb3U4+VcIJR4O8ooWzYeV9pYNI4e6GTIzhSZ1QDkwNn5ApSOUaeO17XFKqgntTMoP3mxreSsdDJTyYkbk9+JwsXoBnaviCLOFujc2HDbyIYbkrLgkMcq0r1oXSWe0tCFoPp/61xVbAUc10EUppOnJGaUVTwc3NQqrStwYozGJ8oAChOFBjV+wM565oHES55DlXaxYeRMbhz9HEOR6PI6ZJuTz8jRNXc+G/+2o4T1zmKZdcqiC6aVOu8WXRSrmJMrfwy8L4muucFTna+ILuCs8vaOPSAsD/4PCitJAWRQkOb9uc6IoiWM45Lb0weavYRVEuXe3hhWja9jRE9bSssQ6Fn9c1tKQQlZbQqcwZaR6hw+LbdUn8V1JCw+L/XG44SPP/PbfQr3LtSVL8y9sWfYXetJTi6TdtC2y4bjVdNveo1tGafZY2XPBIm4rt1yFM0isy5n83TineZ/dWEWly70OFy/iEz1tOt6YL7TuKJhdpz8d9AxFbuYf2HBssGDT/8NwfBgswwdzbV60g18TDSAQd5jh6LpffkXaYg46hkrOeffQ7jKGwARrhzna9yMGXHXdUuAsO0PDRH3dyP82GqGSJj840sNGfbGipmFri69GhpdVxq91Bsd0Rt93hvN1nBbsPInafcuw+QvWsPp/17D789aw+WfbsPrb2rD4TF9rbe+AuxN7TfCn2flRQyrM/h/gHlBFOPjEFD2MAAAAASUVORK5CYII=",
    },
    {
      grantName: "Uniswap Foundation",
      grantApplicationSite:
        "https://www.uniswapfoundation.org/apply-for-a-grant",
      ecosystem: "Blockchain",
      platform: "Uniswap Foundation",
      pastPerformance: "Medium",
      expectedGrantSize: "$75,000",
      kycRequired: false,
      shortDescription:
        "If you’re building public goods and interested in additional support, apply for a grant. There are two types of grants: Open applications for contributors who have their own idea (accepted on a rolling basis), or Requests for Proposal (RFPs), which are ideas we’re actively looking to fund. ",
      logoUrl:
        "data:image/png;base64,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",
    },
    {
      grantName: "Solana Grants",
      grantApplicationSite: "https://solana.org/grants#criteria_for_evaluation",
      ecosystem: "Blockchain",
      platform: "Solana Foundation",
      pastPerformance: "Medium",
      expectedGrantSize: "$55,000",
      kycRequired: false,
      shortDescription:
        "The Solana Foundation Grants Program supports projects working on the Solana blockchain ecosystem. In addition to funding, the program offers dedicated technical support, recruiting assistance, and more to help teams bring their innovative ideas to life. Solana's high-performance blockchain is designed to enable scalable and secure decentralized applications",
      logoUrl:
        "data:image/jpeg;base64,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",
    },
    {
      grantName: "Gitcoin Grants",
      grantApplicationSite: "https://gitcoin.co/grants/",
      ecosystem: "Blockchain and Humanities",
      platform: "Gitcoin Platform",
      pastPerformance: "Medium",
      expectedGrantSize: "$75,000",
      kycRequired: false,
      shortDescription:
        "Gitcoin is a platform that connects developers with open-source projects in need of funding. Through its Grants Community, Gitcoin enables blockchain and web3 projects to receive funding from a pool of grants contributed by companies, organizations, and the broader community.",
      logoUrl:
        "data:image/jpeg;base64,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",
    },
    {
      grantName: "Optimism",
      grantApplicationSite:
        "https://foul-porch-0eb.notion.site/Optimism-Grants-Council-090bb648d1854136b9630c608da7a8bc",
      ecosystem: "Blockchain",
      platform: "Optimism",
      pastPerformance: "Medium",
      expectedGrantSize: "$75,000",
      kycRequired: false,
      shortDescription:
        "Optimism is a Layer 2 scaling solution for Ethereum, designed to improve transaction throughput and reduce gas fees. Optimism has a grant program called 'Optimism PBC Grants' that supports projects working on tooling, infrastructure, research, and education related to the Optimism ecosystem.",
      logoUrl:
        "data:image/jpeg;base64,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",
    },
    {
      grantName: "Ethereum Grants",
      grantApplicationSite: "https://ethereum.org/en/community/grants/",
      ecosystem: "Blockchain",
      platform: "Ethereum Networks",
      pastPerformance: "Medium",
      expectedGrantSize: "$75,000",
      kycRequired: false,
      shortDescription:
        "The Ethereum Foundation offers grants to projects working on Ethereum and its ecosystem, including web3 startups. Ethereum's Network Grant program aims to support projects that enhance the platform's scalability, security, and usability.",
      logoUrl:
        "data:image/jpeg;base64,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",
    },
    // Add four more grant data as needed
  ];

  return (
    <div className="grant-app">
      <h1>Grants Page</h1>
      <div className="grant-card-container">
        {grantData.map((grant, index) => (
          <GrantCard key={index} {...grant} />
        ))}
      </div>
    </div>
  );
};

export default GrantApp;
