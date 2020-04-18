window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', '{{ site.texture.analytics_id }}', {'anonymize_ip' : true } );
