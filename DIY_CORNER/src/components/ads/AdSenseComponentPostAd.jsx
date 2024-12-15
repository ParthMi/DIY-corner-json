import React, { useEffect } from 'react';

const AdSenseComponentPostAd = () => {
  useEffect(() => {
    // Load AdSense script
    // const script = document.createElement('script');
    // script.async = true;
    // script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    // script.crossOrigin = 'anonymous';
    // document.head.appendChild(script);

    // Initialize ads
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8094818668032079"
        data-ad-slot="9341384617"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSenseComponentPostAd;
