import React from 'react';

// import customHook
import useDynamicTitle from '../../CustomHook/useDynamicTitle';

const BlurbEdit = props => {
  useDynamicTitle(props.title);
  return <h1>Blurb Edit</h1>;
};

export default BlurbEdit;
