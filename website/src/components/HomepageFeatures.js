import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Curated for CSS Students',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default, // image removed in HomePageFeatures()
    description: (
      <>
        This guide shares perspectives from CSS students on preparing for internships, as well as student clubs and resources (on and off-campus) to check out!
      </>
    ),
  },
  {
    title: 'Hosted by the Student Advisory Council and Computing Careers Club',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
               The <a href="https://csssac.org/">Student Advisory Council</a> is a student organization focused on student curricular feedback and connecting with faculty to improve the CSS curriculum and program. In Spring 2022, the <a href="https://cscareersuwb.netlify.app/">Computing Careers Club</a> was formed to encompass SAC's student-facing projects, including managing this guide. 
      </>
    ),
  },
  {
    title: 'Open to Contributions',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We are currently accepting contributions on our <a href="https://github.com/CSS-Student-Advisory-Council/css-career-guide"> GitHub </a>. Check out or create an issue about topics to expand on in the guide!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
{/*       <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
