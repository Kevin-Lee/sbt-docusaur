import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easy to Setup</>,
    imageUrl: 'img/docusaurus.svg',
    description: (
      <>
        sbt-docusaur was designed to publish website built with Docusaurus
        to GitHub Pages with minimal effort.
      </>
    ),
  },
  {
    title: <>Works Well with GitHub Actions</>,
    imageUrl: 'img/github.svg',
    description: (
      <>
        Easy to publish Docusaurus website to GitHub Pages through GitHub Actions.
      </>
    ),
  },
  {
    title: <>Written in FP Scala</>,
    imageUrl: 'img/lambda.svg',
    description: (
      <>
        Written in FP Scala yet you probably don't care. 🙂
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}, sbt plugin for Docusaurus`}
      description={`${siteConfig.title}, an easy way to publish your Docusaurus website`}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img src={`${useBaseUrl('img/')}/poster.png`} alt="Project Logo" />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
