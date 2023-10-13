import Link from '@docusaurus/Link';
import IconFont from '@site/src/components/IconFont';
import PageModule from '@site/src/components/PageModule';
import clsx from 'clsx';
import React from 'react';
import styles from './style.module.css';

type SupportItem = {
  id: string;
  Image: React.ComponentType<React.ComponentProps<'svg'>>;
  link: string;
};

const jsEnvList: SupportItem[] = [
  {
    id: 'Vue3',
    Image: require('@site/static/img/vue.svg').default,
    link: 'https://vuejs.org'
  },
  {
    id: 'React',
    Image: require('@site/static/img/react.svg').default,
    link: 'https://react.dev/'
  },
  {
    id: 'Svelte',
    Image: require('@site/static/img/svelte.svg').default,
    link: 'https://svelte.dev'
  },
  {
    id: 'Vue options',
    Image: require('@site/static/img/vue.svg').default,
    link: 'tutorial/framework/vue-options'
  },
  {
    id: 'Next',
    Image: require('@site/static/img/next.svg').default,
    link: 'tutorial/next-step/ssr'
  },
  {
    id: 'Nuxt',
    Image: require('@site/static/img/nuxt.svg').default,
    link: 'tutorial/next-step/ssr'
  },
  {
    id: 'Solid',
    Image: require('@site/static/img/solid.svg').default,
    link: 'tutorial/framework/solid'
  },
  {
    id: 'Mini program(China)',
    Image: require('@site/static/img/miniprogram.svg').default,
    link: 'tutorial/framework/native-mp'
  },
  {
    id: 'uniapp',
    Image: ({ className }) => (
      <img
        src={require('@site/static/img/uniapp.png').default}
        className={className}
      />
    ),
    link: 'https://uniapp.dcloud.net.cn/'
  },
  {
    id: 'Taro',
    Image: ({ className }) => (
      <img
        src={require('@site/static/img/taro.png').default}
        className={className}
      />
    ),
    link: 'https://taro.jd.com/'
  },
  {
    id: 'Angular',
    Image: require('@site/static/img/angular.svg').default,
    link: 'tutorial/framework/angular'
  },
  {
    id: 'Preact',
    Image: require('@site/static/img/preact.svg').default,
    link: 'tutorial/framework/preact'
  },
  {
    id: 'Qwik',
    Image: require('@site/static/img/qwik.svg').default,
    link: 'tutorial/framework/qwik'
  },
  {
    id: 'Lit',
    Image: require('@site/static/img/lit.svg').default,
    link: 'tutorial/framework/lit'
  },
  {
    id: 'Stencil',
    Image: require('@site/static/img/stencil.svg').default,
    link: 'tutorial/framework/stencil'
  }
];

const requestTools: SupportItem[] = [
  {
    id: 'Fetch Api',
    Image: require('@site/static/img/fetchapi.svg').default,
    link: 'tutorial/learning/method-instance/#set-the-parameters-supported-by-the-request-adapter'
  },
  {
    id: 'Axios',
    Image: require('@site/static/img/axios.svg').default,
    link: 'tutorial/extension/alova-adapter-axios'
  },
  {
    id: 'XMLHttpRequest',
    Image: require('@site/static/img/xhr.svg').default,
    link: 'tutorial/extension/alova-adapter-xhr'
  },
  {
    id: 'GraphQL',
    Image: require('@site/static/img/graphql.svg').default,
    link: 'https://graphql.org/'
  },
  {
    id: 'SuperAgent',
    Image: require('@site/static/img/superagent.svg').default,
    link: 'https://github.com/ladjs/superagent'
  }
];

export default function Support(): JSX.Element {
  const ListView = (list: SupportItem[], colSpan = 7) => (
    <div className={`col col--${colSpan} flex-row justify-center flex-wrap`}>
      {list.map(({ id, Image, link }) => (
        <Link
          to={link}
          key={id || link}
          className={clsx('flex-col align-center', styles.framework)}>
          <Image className={styles.icon} />
          <strong>{id}</strong>
        </Link>
      ))}
    </div>
  );

  return (
    <PageModule
      text="Runs in any JS environment with any request tool"
      textTransId="homepage.support.title"
      desc="alova is innovatively compatible with options-style and class-style UI frameworks. Not limited by JS environments and UI frameworks, and can be used with your familiar request tools"
      descTransId="homepage.support.subtitle"
      align="center">
      <div className={clsx('row align-center', styles.wrapper)}>
        {ListView(jsEnvList)}
        <div className={clsx('col col--1', styles.iconPlus)}>
          <IconFont
            name="plus"
            size={40}></IconFont>
        </div>
        {ListView(requestTools, 4)}
      </div>
    </PageModule>
  );
}