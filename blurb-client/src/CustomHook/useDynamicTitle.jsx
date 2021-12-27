import { useParams } from 'react-router-dom';
import useDocumentTitle from './useDocumentTitle';

const useDynamicTitle = docTitle => {
  const params = useParams();

  const slugFromParam = params.slug;
  const titleFromSlug = slugFromParam.replace(/-/g, ' ');

  useDocumentTitle(`${docTitle} | ${titleFromSlug}`);
};

export default useDynamicTitle;
