import Head from 'next/head'

export default ({ title = 'This is the default title' }) => (
  <div>
        <Head>
        <title>{ title }</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
         <link rel='stylesheet' href='/static/react-md.light_blue-yellow.min.css'  rel="stylesheet" />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'  rel="stylesheet"/>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Material+Icons'  rel="stylesheet" />
        </Head>
    </div>
);