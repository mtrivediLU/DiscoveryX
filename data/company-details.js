// Data for company details
const companyDetailsData = {
  "Goldman Sachs": {
    name: "Goldman Sachs",
    description: "A leading global investment banking, securities, and investment management firm.",
    logo: "../images/Goldman Sachs.png",
    website: "https://www.goldmansachs.com",
    details: {
      about: "Founded in 1869, Goldman Sachs helps companies raise capital and provides financial advisory services to corporations and governments worldwide. With a strong presence in global markets, the company is known for its work in mergers and acquisitions, asset management, and investment banking.",
      team: "The executive team is led by David Solomon (CEO) with a focus on financial services, innovation, and leadership in global markets. Other key members include Stephen Scherr (CFO) and John Waldron (COO).",
      contact: "For inquiries, contact support@goldmansachs.com or call +1 212-902-1000. Headquarters: 200 West Street, New York, NY 10282."
    }
  },
  "JP Morgan Chase": {
    name: "JP Morgan Chase",
    description: "One of the largest financial services firms offering investment banking and financial services.",
    logo: "../images/JP Morgan Chase.png",
    website: "https://www.jpmorganchase.com",
    details: {
      about: "Founded in 1799, JP Morgan Chase serves millions of consumers, small businesses, and corporations worldwide, providing a range of services from banking and investments to risk management and financial consulting.",
      team: "Jamie Dimon serves as the CEO, along with key leaders such as Jennifer Piepszak (CFO) and Daniel Pinto (Co-President). They are committed to financial innovation and global leadership in banking.",
      contact: "For inquiries, contact info@jpmorganchase.com or call +1 212-270-6000. Headquarters: 270 Park Avenue, New York, NY 10017."
    }
  },
  // Add similar data for other companies...
};

// Function to get company details by name
function getCompanyDetailsByName(companyName) {
  return companyDetailsData[companyName] || null;
}
