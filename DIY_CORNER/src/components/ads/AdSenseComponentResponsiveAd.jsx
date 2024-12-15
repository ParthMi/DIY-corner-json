import React, { useEffect } from 'react';

const AdSenseComponentResponsiveAd = () => {
  useEffect(() => {
    // Push the AdSense ad when the script is loaded
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div>
      {/* Responsive_ad */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8094818668032079"
        data-ad-slot="5703493095"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSenseComponentResponsiveAd;
