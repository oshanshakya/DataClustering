if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("DiscoveryHubCometContentQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5145950432094047"}),null);
__d("DiscoveryHubCometContentQuery$Parameters",["DiscoveryHubCometContentQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("DiscoveryHubCometContentQuery_facebookRelayOperation"),metadata:{},name:"DiscoveryHubCometContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("DiscoveryHubCometFooterQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4754483337935639"}),null);
__d("DiscoveryHubCometFooterQuery$Parameters",["DiscoveryHubCometFooterQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("DiscoveryHubCometFooterQuery_facebookRelayOperation"),metadata:{},name:"DiscoveryHubCometFooterQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("DiscoveryHubCometHeaderQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5052779434745546"}),null);
__d("DiscoveryHubCometHeaderQuery$Parameters",["DiscoveryHubCometHeaderQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("DiscoveryHubCometHeaderQuery_facebookRelayOperation"),metadata:{},name:"DiscoveryHubCometHeaderQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("DiscoveryHubCometStickyHeaderQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4618272538260623"}),null);
__d("DiscoveryHubCometStickyHeaderQuery$Parameters",["DiscoveryHubCometStickyHeaderQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("DiscoveryHubCometStickyHeaderQuery_facebookRelayOperation"),metadata:{},name:"DiscoveryHubCometStickyHeaderQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("DiscoveryHubCometFeed.variables",["WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";var h={UFI2CommentsProvider_commentsKey:"DiscoveryHubCometRootQuery",displayCommentsContextEnableComment:!0,displayCommentsContextIsAdPreview:!1,displayCommentsContextIsAggregatedShare:!1,displayCommentsContextIsStorySet:!1,displayCommentsFeedbackContext:null,feedbackSource:93,feedLocation:"COMET_RACIAL_JUSTICE_HUB_FEED",focusCommentID:null,privacySelectorRenderLocation:"COMET_RACIAL_JUSTICE_HUB",renderLocation:"discovery_hub_feed",scale:d("WebPixelRatio").get(),useDefaultActor:!1};function a(a,b){return babelHelpers["extends"]({},h,{feedLocation:b,renderLocation:a})}g.variables=h;g.getFeedVariables=a}),98);
__d("DiscoveryHubCometRoot.entrypoint",["DiscoveryHubCometContentQuery$Parameters","DiscoveryHubCometFeed.variables","DiscoveryHubCometFooterQuery$Parameters","DiscoveryHubCometHeaderQuery$Parameters","DiscoveryHubCometStickyHeaderQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.routeProps;var b=a.feed_location,e=a.hoisted_content_ids,f=a.hoisted_fav,g=a.hoisted_unit_ids,h=a.hub,i=a.state,j=a.state_override;a=a.story_render_location;var k=d("WebPixelRatio").get();a=d("DiscoveryHubCometFeed.variables").getFeedVariables(a,b);return{queries:{contentQuery:{environmentProviderOptions:{ssrBoundary:"root"},parameters:c("DiscoveryHubCometContentQuery$Parameters"),variables:babelHelpers["extends"]({},a,{hoisted_content_ids:e,hoisted_fav:f,hoisted_unit_ids:g,hub:h,scale:k,state:i,stateOverride:j})},footerQuery:{environmentProviderOptions:{ssrBoundary:"root"},parameters:c("DiscoveryHubCometFooterQuery$Parameters"),variables:{hub:h,scale:k}},headerQuery:{environmentProviderOptions:{ssrBoundary:"root"},parameters:c("DiscoveryHubCometHeaderQuery$Parameters"),variables:{hub:h,scale:k}},stickyHeaderQuery:{environmentProviderOptions:{ssrBoundary:"root"},parameters:c("DiscoveryHubCometStickyHeaderQuery$Parameters"),variables:{hub:h,scale:k}}}}},root:c("JSResourceForInteraction")("DiscoveryHubCometRoot.react").__setRef("DiscoveryHubCometRoot.entrypoint")};g["default"]=a}),98);