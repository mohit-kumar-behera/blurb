import React from 'react';

// import customHook
import useDynamicTitle from '../../CustomHook/useDynamicTitle';

const BlurbDelete = props => {
  useDynamicTitle(props.title);

  return <h1>Blurb Delete</h1>;
};

export default BlurbDelete;
