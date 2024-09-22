// Data for company lists per industry
const industryData = {
  "Financial Services": [
    {
      name: "Goldman Sachs",
      description: "A leading global investment banking, securities, and investment management firm.",
      logo: "../images/Goldman Sachs.png",
      website: "https://www.goldmansachs.com"
    },
    {
      name: "JP Morgan Chase",
      description: "One of the largest financial services firms offering investment banking and financial services.",
      logo: "../images/JP Morgan Chase.png",
      website: "https://www.jpmorganchase.com"
    },
    {
      name: "Goldman Sachs",
      description: "A leading global investment banking, securities, and investment management firm.",
      logo: "../images/Goldman Sachs.png",
      website: "https://www.goldmansachs.com"
    },
    {
      name: "JP Morgan Chase",
      description: "One of the largest financial services firms offering investment banking and financial services.",
      logo: "../images/JP Morgan Chase.png",
      website: "https://www.jpmorganchase.com"
    }
    // Add more companies as needed
  ],
  "AI Tech": [
    {
      name: "OpenAI",
      description: "An AI research and deployment company.",
      logo: "../images/openAi.png",
      website: "https://openai.com"
    },
    {
      name: "Google DeepMind",
      description: "A British AI research laboratory.",
      logo: "../images/Google DeepMind.png",
      website: "https://Google DeepMind.com"
    },
    {
      name: "OpenAI",
      description: "An AI research and deployment company.",
      logo: "../images/openAi.png",
      website: "https://openai.com"
    },
    {
      name: "Google DeepMind",
      description: "A British AI research laboratory.",
      logo: "../images/Google DeepMind.png",
      website: "https://deepmind.com"
    }
    
  ],
  // Add more industries and companies
};

// Function to get companies by industry
function getCompaniesByIndustry(industryName) {
  return industryData[industryName] || [];
}
