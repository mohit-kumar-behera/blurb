import React from 'react';

// import customHook
import useDynamicTitle from '../../CustomHook/useDynamicTitle';

// import stylesheets
import '../Layout/OvenLayout.css';

const BlurbDetail = props => {
  useDynamicTitle(props.title);

  return (
    <div className="ovenlayout-detail-wrapper">
      <div className="ovenlayout-detail-header">
        <h1 className="blurb-header">apostle of worship</h1>
      </div>
      <div className="ovenlayout-detail-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum
          mattis ullamcorper velit sed ullamcorper morbi tincidunt. Id volutpat
          lacus laoreet non curabitur. Accumsan lacus vel facilisis volutpat est
          velit egestas. Sed felis eget velit aliquet sagittis. At imperdiet dui
          accumsan sit amet nulla facilisi morbi. Odio aenean sed adipiscing
          diam. Nulla aliquet porttitor lacus luctus accumsan. Nunc mi ipsum
          faucibus vitae aliquet nec ullamcorper sit amet. Ultrices dui sapien
          eget mi proin sed. Odio euismod lacinia at quis risus sed vulputate
          odio. Phasellus faucibus scelerisque eleifend donec pretium vulputate.
          Velit euismod in pellentesque massa placerat. In mollis nunc sed id.
          Neque convallis a cras semper. In pellentesque massa placerat duis.
          Vel quam elementum pulvinar etiam non quam lacus. Malesuada
          pellentesque elit eget gravida cum sociis natoque penatibus et. Metus
          vulputate eu scelerisque felis imperdiet proin. Faucibus nisl
          tincidunt eget nullam non nisi est sit amet. In hac habitasse platea
          dictumst vestibulum rhoncus est. Cursus in hac habitasse platea.
          Consequat interdum varius sit amet mattis vulputate. In hendrerit
          gravida rutrum quisque non tellus. Pellentesque adipiscing commodo
          elit at imperdiet dui. Nec ultrices dui sapien eget mi proin sed
          libero. In eu mi bibendum neque. Aliquam vestibulum morbi blandit
          cursus risus at ultrices. Nisi lacus sed viverra tellus. Ipsum
          faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Sit amet
          commodo nulla facilisi nullam vehicula ipsum. Facilisis mauris sit
          amet massa vitae. Pellentesque sit amet porttitor eget.
        </p>
      </div>
    </div>
  );
};

export default BlurbDetail;
