import favicon from '../images/favicon.png';

<Helmet
    title="..."
    meta={[
        { name: 'description', content: '...' },
        { name: 'keywords', content: '....' },
    ]}
    link={[
        { rel: 'shortcut icon', type: './src/bungosquare.png', href: `${favicon}` }
    ]}
/>