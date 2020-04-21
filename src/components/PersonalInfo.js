import React, { Component } from 'react'

import CV from 'react-cv'

export default class PersonalInfo extends Component {
  render () {
    return (
      <CV
        personalData={
          {
            name: 'Robert Giovinozzo',
            title: 'Web Applicaiton Developer',
            image: 'https://bulma.io/images/placeholders/128x128.png',
            contacts: [
              { type: 'email', value: 'guivinozz0@gmail.com' },
              { type: 'phone', value: '+1 (707) 797-7610' },
              { type: 'location', value: 'Norwalk, CT' },
              // { type: 'website', value: 'example.com' },
              { type: 'linkedin', value: 'linkedin.com/in/rpgio/' },
              { type: 'github', value: 'github.com/RPGi0' }
            ]
          }
        }
        sections= {[
          {
            type: 'text',
            title: 'About Me',
            content: "Hi! I’m Gio, your new favorite UI Developer! Innovative, creative and driven, I'm dedicated to crafting the highest quality, bug-free software solutions possible while fostering cooperative team relationships. With my experience in web-based technologies, I'm certain you'll be excited to have me on your team.",
            icon: 'usertie'
          },
          {
            type: 'experiences-list',
            title: 'Experiences',
            description: 'Optional',
            icon: 'archive',
            items: [
              {
                title: 'Vue.js Developer',
                company: 'Pratt & Whitney',
                description: 'I leveraged Vue.js and ag-Grid to design new components allowing analysts to view and interact with data on aircraft and engine profiles',
                companyWebSite: 'https://prattwhitney.com/en',
                companyMeta: 'Pratt & Whitney strives to design, build, and service the world’s most advanced and unrelenting aircraft engines.',
                datesBetween: '2019.10 - 2020.04',
                descriptionTags: ['Javascript', 'Vue,js', 'TypeScript', 'ScSS', 'Web APIs', 'JIRA']
              },
              {
                title: 'React.js Software Developer',
                company: 'Direct Wines Inc.',
                description: 'At this short term contract, I was on boarded to accelerate front-end development in order to meet the deadline for a new release.',
                companyWebSite: 'https://www.directwinesinc.com/',
                companyMeta: 'Direct Wines, Inc. is a dynamic, innovative, wine-loving company that helps consumers across the U.S. discover exciting wines that are perfectly suited to their tastes – all with the convenience of home delivery.',
                datesBetween: '2019.08 - 2019.09',
                descriptionTags: ['Javascript', 'React', 'Web APIs']
              },
              {
                title: 'Web Application Architect',
                company: 'Crates Media Inc.',
                description: 'I utilized React and Redux to refactor a quiz application for a major New York healthcare provider.',
                companyWebSite: 'https://crates.media/',
                companyMeta: 'Crates Media is a Digital Design and Marketing company dedicated to creating bug-free, besoke software soultions; as well as providing web analytics, search engine optimization, and online marketing stratagy services.',
                datesBetween: '2019.05 - 2019.08',
                descriptionTags: ['Javascript', 'React', 'Redux', 'Node', 'Web APIs']
              },
              {
                title: 'React.js Software Developer',
                company: 'Athames.com',
                description: 'I was the lead developer in the migration from legacy PHP systems, to a React front-end utilizing Google cloud on the back-end.',
                companyWebSite: 'athames.com',
                companyMeta: 'Athames is a niche online retailer, catering to products such as clothing, jewlery, candles, incents, accessories and more.',
                datesBetween: '2012.06 - 2012.10'
              }
            ]
          }
        ]}
        branding={true} // or false to hide it.
      />
    )
  }
}