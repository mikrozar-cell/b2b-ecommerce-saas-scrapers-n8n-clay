(function () {
  !function(t,e){var o,n,p,r;e.__SV||(window.posthog && window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}p||((p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",p.onerror=function(){p=null},(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r));var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],Object.defineProperty(u,"toString",{configurable:!0,enumerable:!0,writable:!0,value:function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e}}),Object.defineProperty(u.people,"toString",{configurable:!0,enumerable:!0,writable:!0,value:function(){return u.toString(1)+".people (stub)"}}),o="Eh Rh Ph Oh Dh qh init yd bd dd fd Sd wc md xd ad Ed Ad Rd Pd Od Fd capture getExtension gr pd gd calculateEventProperties Dd register register_once register_for_session unregister unregister_for_session zd hd jd getFeatureFlag getFeatureFlagPayload getFeatureFlagResult getAllFeatureFlags isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys onActiveMatchingSurveysChanged renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync Hd identify setPersonProperties unsetPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset Ud shutdown setIdentity clearIdentity get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException addExceptionStep captureLog startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty qd Td createPersonProfile setInternalOrTestUser Bd Uh zh opt_in_capturing opt_out_capturing Hh has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing $d debug kc Ds getPageViewId captureTraceFeedback captureTraceMetric rd".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

  window.posthog.init('phc_AirGtCDy2W7FwWGE8RbWxz95ZDRx3MHgEhhQPeCLG5Hm', {
    api_host: 'https://eu.i.posthog.com',
    defaults: '2026-05-30',
    person_profiles: 'identified_only',
    persistence: 'memory',
  });

  function classifyOutbound(href) {
    if (!href) return null;
    var url = href.toLowerCase();
    if (url.indexOf('.csv') !== -1) return 'csv_download';
    if (url.indexOf('gumroad.com') !== -1) return 'gumroad';
    if (url.indexOf('chromewebstore.google.com') !== -1) return 'chrome_extension';
    if (url.indexOf('microsoftedge.microsoft.com') !== -1) return 'edge_extension';
    if (url.indexOf('apify.com') !== -1) return 'apify';
    if (url.indexOf('n8n.io') !== -1) return 'n8n';
    if (url.indexOf('github.com') !== -1) return 'github';
    if (url.indexOf('cab2web.com') !== -1) return 'shopify_app';
    return null;
  }

  document.addEventListener('click', function (e) {
    var link = e.target && e.target.closest ? e.target.closest('a[href], button[onclick*="openOrderModal"]') : null;
    if (!link || !window.posthog) return;

    var page = window.location.pathname || '/';
    var text = (link.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 120);

    if (link.tagName === 'BUTTON') {
      window.posthog.capture('order_modal_opened', {
        button_text: text,
        page: page,
      });
      return;
    }

    var href = link.getAttribute('href') || '';
    var category = classifyOutbound(href);
    if (!category) return;

    if (category === 'csv_download') {
      var parts = href.split('/');
      window.posthog.capture('csv_download', {
        file: parts[parts.length - 1] || href,
        url: href,
        label: text,
        page: page,
      });
    } else {
      window.posthog.capture('cta_click', {
        category: category,
        url: href,
        label: text,
        page: page,
      });
    }
  });

  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (!form || form.id !== 'orderForm' || !window.posthog) return;
    var pkgEl = document.getElementById('orderPackage');
    window.posthog.capture('order_form_submitted', {
      package: pkgEl ? pkgEl.value : 'unknown',
      page: window.location.pathname || '/',
    });
  });
})();
