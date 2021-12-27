import React from 'react';

// import customHook
import useDynamicTitle from '../../CustomHook/useDynamicTitle';

const BlurbDetail = props => {
  useDynamicTitle(props.title);
  return <h1>Blurb Detail</h1>;
};

export default BlurbDetail;
