import favicon from '../src/favicon.png';

<Helmet
    title="..."
    meta={[
        { name: 'description', content: '...' },
        { name: 'keywords', content: '....' },
    ]}
    link={[
        { rel: 'shortcut icon', type: 'favicon.png', href: `${favicon}` }
    ]}
/>