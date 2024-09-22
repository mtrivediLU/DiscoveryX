document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname.split('/').pop();

  if (currentPage === 'welcome.html') {
      document.getElementById('start-button').addEventListener('click', function () {
          window.location.href = 'industry-list.html';
      });
  }

  if (currentPage === 'industry-list.html') {
      const industries = [
          'Financial Services', 'AI Tech', 'Education', 'Insurance',
          'Real Estate', 'Clean Energy', 'Legal Services', 'Government',
          'Biotech', 'Retail', 'Logistics', 'Agriculture'
      ];

      const industryList = document.getElementById('industry-list');
      industries.forEach(industry => {
          const li = document.createElement('li');
          li.textContent = industry;
          li.addEventListener('click', function () {
              window.location.href = `company-list.html?industry=${encodeURIComponent(industry)}`;
          });
          industryList.appendChild(li);
      });

      document.getElementById('back-to-welcome').addEventListener('click', function () {
          window.location.href = 'welcome.html';
      });
  }

  if (currentPage === 'company-list.html') {
      const urlParams = new URLSearchParams(window.location.search);
      const industry = urlParams.get('industry');
      document.getElementById('industry-title').textContent = industry;

      const companies = {
          'Financial Services': [
              { name: 'FinServe Corp', services: 'Financial services', mission: 'Empower finance', location: 'New York' },
              { name: 'SecureBank', services: 'Banking services', mission: 'Secure the future', location: 'San Francisco' }
          ],
          'AI Tech': [
              { name: 'AI Innovators', services: 'AI Solutions', mission: 'AI transformation', location: 'Boston' },
              { name: 'SmartAI', services: 'ML and AI', mission: 'Smarter solutions', location: 'Austin' }
          ]
      };

      const companyList = document.getElementById('company-list');
      const selectedCompanies = companies[industry] || [];
      selectedCompanies.forEach(company => {
          const li = document.createElement('li');
          li.textContent = company.name;
          li.addEventListener('click', function () {
              window.location.href = `company-details.html?name=${encodeURIComponent(company.name)}&industry=${encodeURIComponent(industry)}`;
          });
          companyList.appendChild(li);
      });

      document.getElementById('back-to-industries').addEventListener('click', function () {
          window.location.href = 'industry-list.html';
      });
  }

  if (currentPage === 'company-details.html') {
      const urlParams = new URLSearchParams(window.location.search);
      const companyName = urlParams.get('name');
      const industry = urlParams.get('industry');

      const companies = {
          'Financial Services': [
              { name: 'FinServe Corp', services: 'Financial services', mission: 'Empower finance', location: 'New York' },
              { name: 'SecureBank', services: 'Banking services', mission: 'Secure the future', location: 'San Francisco' }
          ],
          'AI Tech': [
              { name: 'AI Innovators', services: 'AI Solutions', mission: 'AI transformation', location: 'Boston' },
              { name: 'SmartAI', services: 'ML and AI', mission: 'Smarter solutions', location: 'Austin' }
          ]
      };

      const selectedCompany = companies[industry].find(company => company.name === companyName);
      if (selectedCompany) {
          document.getElementById('company-name').textContent = selectedCompany.name;
          document.getElementById('company-services').textContent = selectedCompany.services;
          document.getElementById('company-mission').textContent = selectedCompany.mission;
          document.getElementById('company-location').textContent = selectedCompany.location;
      }

      document.getElementById('back-to-companies').addEventListener('click', function () {
          window.location.href = `company-list.html?industry=${encodeURIComponent(industry)}`;
      });
  }
});
