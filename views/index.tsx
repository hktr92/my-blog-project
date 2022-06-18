import { Fragment, useState } from 'react';
import { Head } from '@react-ssr/express';

const Index = (props) => {
  const [message, setMessage] = useState('waiting...');

  const onClick = () => setMessage('This is a react-ssr!');

  return (
    <Fragment>
      <Head>
        <title>custom-document - @react-ssr/express</title>
      </Head>
      <p>{props.user.name}!</p>
      <button onClick={onClick}>Click Me</button>
      <p>Message from state: {message}</p>
      <p>random message to see if index.tsx is duplicated in _document.tsx</p>
    </Fragment>
  );
};

export default Index;
