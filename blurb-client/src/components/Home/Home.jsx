import React from 'react';

// import components
import Blurb from '../Blurb/Blurb';

// import custom hooks
import useDocumentTitle from '../../CustomHook/useDocumentTitle';

const Home = props => {
  useDocumentTitle(props.title);

  return <Blurb />;
};

export default Home;
