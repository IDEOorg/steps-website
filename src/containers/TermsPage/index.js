import React from 'react';
import './index.less';
import content from './content.md';
import Footer from '../../components/Footer';

const TermsPage = () => {
  return (
    <div className="terms">
      <div className="terms_style" dangerouslySetInnerHTML={{__html: content}} />
      <Footer />
    </div>
  );
};

export default TermsPage;
