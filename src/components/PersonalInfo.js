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
            icon: 'archive',
            items: [
              {
                title: 'Vue.js Developer',
                company: 'Pratt & Whitney',
                description: 'I leveraged Vue.js and ag-Grid to design new components allowing analysts to view and interact with data on aircraft and engine profiles',
                companyWebSite: 'https://prattwhitney.com/en',
                companyMeta: 'Aerospace engine design and maintainence.',
                datesBetween: '2019.10 - 2020.04',
                descriptionTags: ['Javascript', 'Vue.js', 'TypeScript', 'ScSS', 'Web APIs', 'JIRA']
              },
              {
                title: 'React.js Software Developer',
                company: 'Direct Wines Inc.',
                description: 'At this short term contract, I was on boarded to accelerate front-end development in order to meet the deadline for a new release.',
                companyWebSite: 'https://www.directwinesinc.com/',
                companyMeta: 'Wholesale wine distributor',
                datesBetween: '2019.08 - 2019.09',
                descriptionTags: ['Javascript', 'React', 'Web APIs']
              },
              {
                title: 'Web Application Architect',
                company: 'Crates Media Inc.',
                description: 'I utilized React and Redux to refactor a quiz application for a major New York healthcare provider.',
                companyWebSite: 'https://crates.media/',
                companyMeta: 'Digital Design and Marketing',
                datesBetween: '2019.05 - 2019.08',
                descriptionTags: ['Javascript', 'React', 'Redux', 'Node', 'Web APIs']
              },
              {
                title: 'React.js Software Developer',
                company: 'Athames.com',
                description: 'I was the lead developer in the migration from a legacy PHP cart, to a React front-end utilizing Google cloud on the back-end.',
                companyWebSite: 'athames.com',
                companyMeta: 'Niche online retail storefront',
                datesBetween: '2012.06 - 2012.10'
              }
            ]
          },
          {
            type: 'tag-list',
            title: 'Technologies & Processes',
            icon: 'rocket',
            items: ['JavaScript', 'TypeScript', 'React JS', 'Redux', 'Vue JS', 'Node', 'NPM', 'Yarn', 'Express', 'Next.js', 'Google Material UI', 'jQuery', 'Backbone', 'Bootstrap', 'Knockout', 'Mocha', 'Chai', 'Jest', 'Cypress', 'Underscore / LoDash', 'HTML5 / CSS3 / ScSS', 'Git / GitHub / GitFlow', 'RESTful API Integration', 'NoSQL / GraphQL / Apollo', 'SOLID Development Principles'
]
          },
          {
            type: 'common-list',
            title: 'Soft Skills & Competencies',
            icon: 'tasks',
            items: [
              { authority: 'Skilled in Scrum & agile methodology' },
              { authority: 'Standards-driven development practices' },
              { authority: 'Test Driven Development experience' },
              { authority: 'Creative solutions; thinking around corners' },
              { authority: 'Trained in full-stack JavaScript' }
            ]
          },
          {
            type: 'common-list',
            title: 'Referneces',
            icon: 'comments',
            items: [
              { 
                authority: 'Michael McDade - Manager:',
                authorityMeta: '316-453-6238'
              },
              { 
                authority: 'Elliot Gallagher - Co-worker:',
                authorityMeta: '508-685-4142'
              },
              { 
                authority: 'Libby Corcoran - Co-worker:',
                authorityMeta: '203-919-6852'
              }
            ]
          },
          {
            type: 'tag-list',
            title: 'Hobbies & Interests',
            icon: 'cubes',
            items: ['Music Production', 'Guitar', 'Sketch Art', 'Flow Arts', 'Reading']
          }
        ]}
        branding={false} // or false to hide it.
      />
    )
  }
}