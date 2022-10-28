(function(){
  Yo.rum.initialize("https://qoe-1.yottaa.net/log-nt/event", false, "zWzcqvCmPhRSyQ", true);
  // Using Profile: Default Profile

  Yo.rum.set("profileId", 15321);

  // Optimization Status

  Yo.rum.set("optState", "active");

  // Action Sequence google-analytics

  Yo.sequence.resource(Yo.utils.decodeSafeString("google-analytics")).none();

  // Action Sequence iFrames

  Yo.sequence.resource(Yo.utils.decodeSafeString("about:blank")).none();

  Yo.sequence.resource(Yo.utils.decodeSafeString("javascript:")).none();

  // Action Sequence jQuery

  Yo.sequence.resource(Yo.utils.decodeSafeString("jquery")).none();

  // Action Sequence Google Tag Manager

  Yo.sequence.resource(Yo.utils.decodeSafeString("googletagmanager")).none();

  // Action Sequence Google Analytics Universal

  Yo.sequence.resource(Yo.utils.decodeSafeString("analytics.js")).none();

  // Action Sequence First Parties

  Yo.sequence.resource("//" + window.location.hostname).none();

  // Action Insert JavaScript

Yo.pubsub.subscribe({topic: 'core/load', callback: function(){
Yo.sequence.node(document.body);
}});
  // Action Advanced Scheduling

Yo.schedule.spread(10);
})();
