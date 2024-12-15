import React, { useEffect } from 'react';

const AdSenseComponentSideAd = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8094818668032079"
        data-ad-slot="7513917144"
        data-ad-format="autorelaxed"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSenseComponentSideAd;
