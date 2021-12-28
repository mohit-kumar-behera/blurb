import { useParams } from 'react-router-dom';
import useDocumentTitle from './useDocumentTitle';

import URL_TYPE from './urlType';

const useDynamicTitle = (docTitle, type = URL_TYPE.BLURB) => {
  const params = useParams();
  let titleFromSlug = '';

  if (type === URL_TYPE.BLURB) {
    console.log('i m blurb');
    const slugFromParam = params.slug;
    titleFromSlug = slugFromParam.replace(/-/g, ' ');
  } else if (type === URL_TYPE.PROFILE) {
    const slugFromParam = params.username;
    titleFromSlug = slugFromParam;
  }

  useDocumentTitle(`${docTitle} | ${titleFromSlug}`);
};

export default useDynamicTitle;
