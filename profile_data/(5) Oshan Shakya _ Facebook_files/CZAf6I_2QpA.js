if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("FBShopsLegacyUpgradeDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="3828079360630646"}),null);
__d("FBShopsLegacyUpgradeDialogQuery$Parameters",["FBShopsLegacyUpgradeDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("FBShopsLegacyUpgradeDialogQuery_facebookRelayOperation"),metadata:{},name:"FBShopsLegacyUpgradeDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("FBShopsLegacyUpgradeProductTaggingUtils_page.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"InlineDataFragment",name:"FBShopsLegacyUpgradeProductTaggingUtils_page"};e.exports=a}),null);
__d("CometStoryAggregatedUsersSuffixDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4788883384562781"}),null);
__d("CometStoryAggregatedUsersSuffixDialogQuery$Parameters",["CometStoryAggregatedUsersSuffixDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometStoryAggregatedUsersSuffixDialogQuery_facebookRelayOperation"),metadata:{},name:"CometStoryAggregatedUsersSuffixDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("FBShopsLegacyUpgradeDialog.entrypoint",["FBShopsLegacyUpgradeDialogQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c=a.adminHasPermissions,d=a.dialogType,e=a.loggingSurface,f=a.pageID,g=a.referralCode;a=a.referralSurface;var h=d==="product_tagging_friction"||d==="product_tagging_block";return{extraProps:{adminHasPermissions:c,dialogType:d,loggingSurface:e,referralCode:g,referralSurface:a},queries:{FBShopsLegacyUpgradeDialogQueryReference:{parameters:b("FBShopsLegacyUpgradeDialogQuery$Parameters"),variables:{adminHasPermissions:c,isProductTaggingModal:h,pageID:f}}}}},root:c("JSResourceForInteraction")("FBShopsLegacyUpgradeDialog.react").__setRef("FBShopsLegacyUpgradeDialog.entrypoint")};g["default"]=a}),98);
__d("FBShopsLegacyUpgradeProductTaggingUtils",["CometRelay","FBShopsLegacyUpgradeProductTaggingUtils_page.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){a=d("CometRelay").readInlineData(h!==void 0?h:h=b("FBShopsLegacyUpgradeProductTaggingUtils_page.graphql"),a);var c=a.legacy_shop_upgrade_admin_and_page_eligibility,e=c==="PAGE_AND_ADMIN_ELIGIBLE"||c==="PAGE_ELIGIBLE_ADMIN_NOT_ELIGIBLE";return!e?{adminHasPermissions:!1,dialogType:"product_tagging_friction",pageID:a.id,shouldShowModal:!1}:{adminHasPermissions:c==="PAGE_AND_ADMIN_ELIGIBLE",dialogType:"product_tagging_block",pageID:a.id,shouldShowModal:!0}}g.getProductTaggingLegacyUpgradeStatus=a}),98);
__d("CometPageLayoutWithComplementaryContent.react",["BaseRow.react","BaseRowItem.react","CometMediaViewerFullscreenContext","CometRouteRenderType","CometScrollView.react","MWChatOnMediaVisibilityOverrideContext","gkx","react","stylex","useMWIsCurrentRouteMediaViewerExperiment","useShouldShowMessagingEntrypointOnCurrentRoute"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j=c("gkx")("708253"),k=c("gkx")("1217157"),l=c("gkx")("2820"),m={chatSliver:{backgroundColor:"cwj9ozl2",boxShadow:"r28pvxcy",display:"j83agx80",height:"bkyfam09",top:"be9z9djy",width:"etr7akla",zIndex:"tkr6xdv7","@media (max-width: 899px)":{display:"hlyrhctz"}},container:{height:"bipmatt0",maxHeight:"qowsmv63",overflowX:"ni8dbmo4",overflowY:"stjgntxs","@media (max-width: 900px)":{flexDirection:"by9hw1fw"}},containerFullScreenInPushView:{minHeight:"h3gjbzrl"},containerInPushView:{minHeight:"sn7ne77z"},containerNotInPushView:{minHeight:"jgljxmt5"},contentAreaInPushView:{height:"nznu9b0o","@media (max-width: 900px)":{height:"q4kn84j7"}},contentAreaInPushViewUsesParentHeight:{height:"datstx6m","@media (max-width: 900px)":{height:"q4kn84j7"}},contentAreaNotInPushView:{height:"bkyfam09","@media (max-width: 900px)":{height:"q4kn84j7"}},defaultBackground:{backgroundColor:"hybvsw6c"},rightRail:{height:"bipmatt0",maxHeight:"nwf6jgls","@media (max-width: 900px)":{maxWidth:"dzul8kyi",minHeight:"s8zgqcqk"}},rightRailFixed:{backgroundColor:"hybvsw6c",maxHeight:"gitj76qy",minHeight:"dp1hu0rb","@media (max-width: 900px)":{maxHeight:"kelwmyms",maxWidth:"dzul8kyi",minHeight:"e69mrdg2"}},rightRailInner:{backgroundColor:"hybvsw6c",height:"bipmatt0",maxWidth:"rirtxc74",minWidth:"nnvw5wor","@media (max-width: 900px)":{minWidth:"jkusjiy0"}},rightRailOuter:{height:"datstx6m",maxHeight:"gitj76qy","@media (max-width: 900px)":{height:"ric4tfvp",maxHeight:"mq76vbym"}},rightRailOuterNoMaxHeight:{height:"datstx6m","@media (max-width: 900px)":{height:"ric4tfvp",maxHeight:"mq76vbym"}},shadowBar:{backgroundColor:"hybvsw6c",borderBottom:"ao6pnu53",minHeight:"gmxl693r",position:"lpgh02oy",top:"kr520xx4",zIndex:"tkr6xdv7"},shadowBarContentAreaResponsiveness:{display:"mkhogb32","@media (max-width: 900px)":{display:"au7jv34o"}},shadowBarRightRailResponsiveness:{"@media (max-width: 900px)":{display:"ahb00how"}}};function a(a){var b=a.children;b=b===void 0?null:b;var e=a.hideContainerBackground;e=e===void 0?!1:e;var f=a.isRightRailFixed;f=f===void 0?!1:f;var g=a.rightRail;g=g===void 0?null:g;var n=a.showChatSliverOverride;n=n===void 0?!0:n;var o=a.showShadowBar;o=o===void 0?!0:o;a=a.useParentHeight;a=a===void 0?!1:a;var p=d("CometRouteRenderType").useIsPushView(),q=c("useShouldShowMessagingEntrypointOnCurrentRoute")("CHAT")&&j,r=c("useMWIsCurrentRouteMediaViewerExperiment")();r=d("MWChatOnMediaVisibilityOverrideContext").useMWChatOnMediaVisibilityOverride(r);var s=i(c("CometMediaViewerFullscreenContext"));n=n&&q&&r;return h.jsxs(c("BaseRow.react"),{align:"start",xstyle:[m.container,!e&&m.defaultBackground,s&&p&&m.containerFullScreenInPushView,!s&&(p||a)&&m.containerInPushView,!p&&!a&&m.containerNotInPushView],children:[p&&!k&&!l?h.jsx("div",{className:c("stylex")(o&&m.shadowBar,o&&m.shadowBarContentAreaResponsiveness)}):null,h.jsx(c("BaseRowItem.react"),{expanding:!0,role:"main",xstyle:a?m.contentAreaInPushViewUsesParentHeight:p?m.contentAreaInPushView:m.contentAreaNotInPushView,children:b}),g!=null&&!s&&h.jsxs(c("BaseRowItem.react"),{role:"complementary",xstyle:f?m.rightRailFixed:m.rightRail,children:[p&&!k&&!l?h.jsx("div",{className:c("stylex")(o&&m.shadowBar,o&&m.shadowBarRightRailResponsiveness)}):null,h.jsxs(c("BaseRow.react"),{xstyle:a?m.rightRailOuterNoMaxHeight:m.rightRailOuter,children:[h.jsx(c("BaseRowItem.react"),{xstyle:m.rightRailInner,children:f?h.jsx(c("CometScrollView.react"),{"data-testid":void 0,showsHorizontalScrollIndicator:!1,children:g}):g}),n?h.jsx("div",{className:c("stylex")(m.chatSliver)}):null]})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometStoryAggregatedUsersSuffixDialog.entrypoint",["CometStoryAggregatedUsersSuffixDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c=a.storyID;a=a.storyRenderLocation;return{queries:{queryReference:{parameters:b("CometStoryAggregatedUsersSuffixDialogQuery$Parameters"),variables:{id:c,renderLocation:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("CometStoryAggregatedUsersSuffixDialog.react").__setRef("CometStoryAggregatedUsersSuffixDialog.entrypoint")};g["default"]=a}),98);
__d("useMediaViewerVPVDLogger",["CometInteractionSourceContext","WebSession","gkx","react","requireDeferred","useVPVDImpression"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useContext,j=c("requireDeferred")("CometMediaVpvdFalcoEvent").__setRef("useMediaViewerVPVDLogger");function a(a,b){var e=i(c("CometInteractionSourceContext")),f=a.authorId,g=a.createdTime,k=a.fbid,l=a.source,m=a.storyContainerId;b=h(function(a){var b,c;a.hiddenTime;var h=a.visibleDuration;a=a.visibleTime;if(k==null)return;b=(b=l)!=null?b:e;var i={a:(c=f)!=null?c:"",ct:(c=g)!=null?c:0,d:h,i:k,s:b,si:m,sid:d("WebSession").getId(),vst:a};j.onReady(function(a){a=a.log;return a(function(){return i})})},[f,g,k,e,l,m]);return c("useVPVDImpression")({onVPVDEnd:b})}g["default"]=a}),98);
__d("CometFeedStorySuffixAggregatedUsersRenderer",["CometEntryPointDialogTrigger.react","CometLink.react","CometStoryAggregatedUsersSuffixDialog.entrypoint","react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");a=function(a,b){return function(d){if(a==null||b==null){c("recoverableViolation")("story ID or render location were null when rendering aggregated users link in story title","comet_ui");return d}return h.jsx(c("CometEntryPointDialogTrigger.react"),{dialogEntryPoint:c("CometStoryAggregatedUsersSuffixDialog.entrypoint"),otherProps:{},preloadParams:{storyID:a,storyRenderLocation:b},children:function(a){return h.jsx(c("CometLink.react"),{onClick:a,children:d})}})}};g["default"]=a}),98);
__d("CometFeedStoryDropdownMenuLoggerContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({nodeID:null});g["default"]=b}),98);
__d("CometMediaSetViewerIndeterminateAdjoiningMediaURLMarker",[],(function(a,b,c,d,e,f){"use strict";a=typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():Object.freeze({});f.INDETERMINATE_ADJOINING_MEDIA_URL=a}),66);
__d("CometMediaViewerDispatcherContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(c("emptyFunction"));g["default"]=b}),98);
__d("CometMediaViewerNavigationTapTarget.react",["ix","CometMediaViewerDispatcherContext","CometPressable.react","CometProgressSkittleIndeterminate.react","CometSkittleIcon.react","CometTrackingNodeProvider.react","CometVisualCompletionAttributes","fbicon","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useContext,k={buttonContainerBackground:{backgroundColor:"r898ja9m"},buttonContainerHoverLeft:{opacity:"pedkr2u6",transform:"lhh4dqlf"},buttonContainerHoverRight:{opacity:"pedkr2u6",transform:"k9ht9y5y"},fullHeight:{height:"datstx6m"},invisible:{opacity:"b5wmifdl",transitionDuration:"ijkhr0an",transitionTimingFunction:"s13u9afw",visibility:"kr9hpln1"},navButton:{alignItems:"bp9cbjyn",display:"j83agx80",opacity:"l8rlqa9s",paddingTop:"discj3wi",paddingEnd:"hv4rvrfc",paddingBottom:"ihqw7lf3",paddingStart:"dati1w0a",position:"l9j0dhe7",transitionDuration:"ms05siws",transitionProperty:"pnx7fd3z",transitionTimingFunction:"msbwk0y7",willChange:"srfxjet1"},root:{alignItems:"bp9cbjyn",display:"j83agx80",justifyContent:"taijpn5t",opacity:"pedkr2u6",position:"l9j0dhe7",transitionDuration:"c5ndavph",transitionProperty:"l23jz15m",transitionTimingFunction:"ot9fgl3s",willChange:"ffxd5cwt",zIndex:"tkr6xdv7"},tapTargetOverlay:{height:"datstx6m"}};function a(a){var b=a.direction,e=a.hoverOverlayHeight,f=e===void 0?"default":e;e=a.invisible;e=e===void 0?!1:e;var g=a.isLoading,l=g===void 0?!1:g;g=a.label;var m=a.onClick,n=a.testid;n=a.trackingNode;var o=j(c("CometMediaViewerDispatcherContext"));a=function(){o({isHovered:!0,type:"SET_IS_HOVERED"})};var p=function(){o({isHovered:!1,type:"SET_IS_HOVERED"})};return i.jsx("div",babelHelpers["extends"]({},c("CometVisualCompletionAttributes").IGNORE_DYNAMIC,{className:c("stylex")(k.root,e&&k.invisible,f==="default"&&k.fullHeight),"data-testid":void 0,onMouseEnter:a,onMouseLeave:p,children:i.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:n,children:i.jsx(c("CometPressable.react"),{"aria-label":g,disabled:l,focusable:!1,onPress:m,testid:void 0,xstyle:f==="default"&&k.tapTargetOverlay,children:function(a){a=a.hovered;return i.jsx("div",{className:c("stylex")(k.navButton,f==="default"&&k.buttonContainerBackground,a&&!l&&(b==="previous"?k.buttonContainerHoverLeft:k.buttonContainerHoverRight)),children:l?i.jsx(c("CometProgressSkittleIndeterminate.react"),{size:48}):i.jsx(c("CometSkittleIcon.react"),{color:"gray",icon:b==="previous"?d("fbicon")._(h("492491"),24):d("fbicon")._(h("492539"),24),size:48})})}})})}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometMediaViewerViewStateContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({isHovered:!1,prevMouseX:0,prevMouseY:0,prevScale:1,scale:1,translateX:0,translateY:0});g["default"]=b}),98);
__d("CometMediaViewerStage.react",["fbt","CometFullScreen","CometKeys","CometMediaSetViewerIndeterminateAdjoiningMediaURLMarker","CometMediaViewerNavigationTapTarget.react","CometMediaViewerViewStateContext","CometProductTagFunnelIDContext","Locale","cometGetKeyCommandConfig","gkx","react","stylex","useCometRoute","useCometRouterDispatcher","useDebouncedComet","useLayerKeyCommands","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useContext,l=b.useEffect,m=b.useMemo,n=b.useRef,o=b.useState,p=c("gkx")("1299319"),q=c("gkx")("1745416"),r=c("gkx")("1333"),s=2e3;function a(a){var b=a.backgroundColor;b=b===void 0?"default":b;var e=a.initialTracePolicy,f=a.isPlayable;f=f===void 0?!1:f;var g=a.isUntagged,t=a.nextMediaURI,u=a.onNavigatePhoto,v=a.prevMediaURI,w=a.storyRenderLocation,x=a.subOrigin,y=a.useKeyCommands,z=y===void 0?!0:y,A=k(c("CometProductTagFunnelIDContext")),B=c("useCometRouterDispatcher")();y=o(!1);var C=y[0],D=y[1],E=k(c("CometMediaViewerViewStateContext")),F=n(!0);y=function(){return G.isPending()?H():G()};var G=c("useDebouncedComet")(function(){D(!1),H()},{leading:!0,wait:s}),H=c("useDebouncedComet")(function(){L==null&&!E.isHovered&&D(!0),F.current=!1},{leading:!1,wait:s}),I=n(null);c("useLayoutEffect_SAFE_FOR_SSR")(function(){H(),I.current&&F.current&&I.current.focus()});var J=j(function(){B!=null&&B.popPushView()},[B]),K=o(null),L=K[0],M=K[1],N=j(function(){if(t===d("CometMediaSetViewerIndeterminateAdjoiningMediaURLMarker").INDETERMINATE_ADJOINING_MEDIA_URL){M("next");return}if(B==null||typeof t!=="string")return;u&&u();B.go(t,{passthroughProps:{initialTracePolicy:e,isUntagged:g,productTagFunnelID:A,storyRenderLocation:w,subOrigin:x},target:"self",traceParams:{navigation_source:"CometMediaViewer_next"}})},[t,B,u,e,A,w,g,x]),O=j(function(){if(v===d("CometMediaSetViewerIndeterminateAdjoiningMediaURLMarker").INDETERMINATE_ADJOINING_MEDIA_URL){M("prev");return}if(B==null||typeof v!=="string")return;u&&u();B.go(v,{passthroughProps:{initialTracePolicy:e,isUntagged:g,productTagFunnelID:A,storyRenderLocation:w,subOrigin:x},target:"self",traceParams:{navigation_source:"CometMediaViewer_prev"}})},[v,B,u,e,A,g,w,x]);l(function(){switch(L){case"next":t!==d("CometMediaSetViewerIndeterminateAdjoiningMediaURLMarker").INDETERMINATE_ADJOINING_MEDIA_URL&&(M(null),H(),N());break;case"prev":v!==d("CometMediaSetViewerIndeterminateAdjoiningMediaURLMarker").INDETERMINATE_ADJOINING_MEDIA_URL&&(M(null),H(),O());break;default:break}},[N,O,H,t,L,v]);c("useCometRoute")(typeof v==="string"?v:null);c("useCometRoute")(typeof t==="string"?t:null);var P=h._(/*FBT_CALL*/"Previous photo"/*FBT_CALL*/),Q=h._(/*FBT_CALL*/"Next photo"/*FBT_CALL*/),R=j(function(){var a=d("CometFullScreen").getFullScreenElement();if(a==null){a=document.documentElement;a!=null&&d("CometFullScreen").requestFullScreen(a)}else d("CometFullScreen").exitFullScreen()},[]),S=t===d("CometMediaSetViewerIndeterminateAdjoiningMediaURLMarker").INDETERMINATE_ADJOINING_MEDIA_URL||typeof t==="string"&&t!=="",T=v===d("CometMediaSetViewerIndeterminateAdjoiningMediaURLMarker").INDETERMINATE_ADJOINING_MEDIA_URL||typeof v==="string"&&v!=="";K=!T||C||q||r;C=!S||C||q||r;var U=m(function(){if(!z||q||r)return[];var a=[];T&&(a.push({command:{key:c("CometKeys").PREVIOUS},description:P,handler:O}),a.push(d("cometGetKeyCommandConfig").getCometAndGeminiKeyCommandConfig("photoViewer","viewPrevious",O)));S&&(a.push({command:{key:c("CometKeys").NEXT},description:Q,handler:N}),a.push(d("cometGetKeyCommandConfig").getCometAndGeminiKeyCommandConfig("photoViewer","viewNext",N)));a.push(d("cometGetKeyCommandConfig").getCometAndGeminiKeyCommandConfig("photoViewer","fullscreen",R));return a},[N,O,S,T,Q,P,R,z]);c("useLayerKeyCommands")(U);U=i.jsx(c("CometMediaViewerNavigationTapTarget.react"),{direction:c("Locale").isRTL()?"next":"previous",hoverOverlayHeight:f?"auto":"default",invisible:K,isLoading:L==="prev",label:P,onClick:O,testid:void 0,trackingNode:143});K=i.jsx(c("CometMediaViewerNavigationTapTarget.react"),{direction:c("Locale").isRTL()?"previous":"next",hoverOverlayHeight:f?"auto":"default",invisible:C,isLoading:L==="next",label:Q,onClick:N,testid:void 0,trackingNode:142});return i.jsx("div",{className:c("stylex").dedupe({"display-1":"j83agx80","flex-direction-1":"cbu4d94t","flex-grow-1":"buofh1pr","height-1":"datstx6m","min-width-1":"p01isnhg","position-1":"l9j0dhe7","outline-8.1":"iqfcb0g7"},b==="default"?{"background-color-1":"tqsryivl"}:null,b==="dark"?{"background-color-1":"iuug3ofb"}:null),onMouseMove:y,ref:I,tabIndex:"0",children:i.jsxs("div",{className:"iqfcb0g7 l9j0dhe7 taijpn5t datstx6m buofh1pr j83agx80 bp9cbjyn",children:[i.jsxs("div",{className:"kr520xx4 j9ispegn pmk7jnqg i1fnvgqd n7fi1qx3 j83agx80 i09qtzwb bp9cbjyn","data-name":"media-viewer-nav-container",children:[!p&&i.jsx("div",{"aria-hidden":!0,className:"kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb","data-testid":void 0,onClick:J}),U,K]}),a.children]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometPhotoViewerAIProductTagReducer",["addToMap"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){switch(b.type){case"SET_KNOWN_AI_TAGS":var d;return babelHelpers["extends"]({},a,{knownAITags:c("addToMap")((d=a.knownAITags)!=null?d:new Map(),b.photoID,b.knownAITags)});case"SET_UNKNOWN_AI_TAGS":return babelHelpers["extends"]({},a,{unknownAITags:c("addToMap")((d=a.unknownAITags)!=null?d:new Map(),b.photoID,b.unknownAITags)});case"SET_IS_PRODUCT_TAGGING":return babelHelpers["extends"]({},a,{isProductTagging:b.isProductTagging});case"SET_TAG_MODE_ENABLED":return babelHelpers["extends"]({},a,{tagModeEnabled:b.tagModeEnabled});case"SET_HOVER_FOR_KNOWN_TAG":return babelHelpers["extends"]({},a,{highlightedKnownAITagID:b.hovering?b.id:null});case"REMOVE_KNOWN_AI_TAG":return babelHelpers["extends"]({},a,{knownAITags:c("addToMap")((d=a.knownAITags)!=null?d:new Map(),b.photoID,(d=a.knownAITags)==null?void 0:(d=d.get(b.photoID))==null?void 0:d.filter(function(a){return a.productID!==b.productID}))});case"UPDATE_TAG_DATA":return babelHelpers["extends"]({},a,{isProductTagging:b.tagData.isProductTagging,tagModeEnabled:b.tagData.tagModeEnabled})}return a}g["default"]=a}),98);
__d("CometPhotoViewerZoomUtils",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){return c[0]===0||c[1]===0?!1:c[1]<a.clientHeight*b||c[0]<a.clientWidth*b}f.isOverflown=a}),66);
__d("CometPhotoViewerZoom.react",["CometMediaViewerDispatcherContext","CometMediaViewerViewStateContext","CometPhotoViewerContainerContext","CometPhotoViewerZoomUtils","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useContext,k=b.useRef;function a(a){a=a.children;var b=j(c("CometMediaViewerViewStateContext")),e=j(c("CometMediaViewerDispatcherContext")),f=j(c("CometPhotoViewerContainerContext")),g=k(null),l=i(function(){if(f!=null&&f.current!=null){var a=f.current.getBoundingClientRect();return{height:a.height,left:a.left,top:a.top,width:a.width}}return null},[f]),m=i(function(a){var b;b=(b=g.current)==null?void 0:b.getBoundingClientRect();var c=l();b&&c&&e({clientX:a.clientX,clientY:a.clientY,currentRectCoord:[b.top,b.left],currentRectSize:[b.width,b.height],height:c.height,type:"DRAG",width:c.width})},[e,l]),n=i(function(){window.removeEventListener("mouseup",n),window.removeEventListener("mousemove",m)},[m]),o=i(function(a){if(b.scale<=1)return;var c=l();if(g&&g.current&&c&&!d("CometPhotoViewerZoomUtils").isOverflown(g.current,b.scale,[c.width,c.height]))return;a.preventDefault();e({clientX:a.clientX,clientY:a.clientY,type:"DRAG_START"});window.addEventListener("mouseup",n);window.addEventListener("mousemove",m)},[e,l,m,n,b.scale]);return h.jsx("div",{onMouseDown:o,children:h.jsx("div",{className:b.prevScale!==b.scale?"heur4gxb flx89l3n tn0ko95a":"",ref:g,style:{transform:"translate("+b.translateX+"px, "+b.translateY+"px) scale("+b.scale+")"},children:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometPhotoViewerResponsiveInnerWrapper.react",["CometPhotoViewerZoom.react","CometRouteRenderType","gkx","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={backgroundContainerDialog:{"@media (max-width: 899px)":{height:"nos9j3a5"}},backgroundContainerDialogWithFooter:{height:"n626y76b","@media (max-width: 899px)":{height:"aessy0lw"}},backgroundContainerResponsive:{alignItems:"bp9cbjyn",display:"j83agx80",position:"l9j0dhe7","@media (max-width: 899px)":{height:"spskuzq3"}},backgroundContainerTabs:{height:"bkyfam09","@media (max-width: 899px)":{height:"pw8zj2ei"}},backgroundContainerTabsWithFooter:{height:"bekozo2m","@media (max-width: 899px)":{height:"f6tgzqhp"}},ie11minHeight:{minHeight:"kltspiyx"},ie11PhotoWrapperWidth:{width:"k4urcfbm"},image:{maxWidth:"d2edcug0","@media (max-width: 899px)":{maxHeight:"r9f5tntg"}},maxImageHeightDialog:{maxHeight:"ji94ytn4","@media (max-width: 899px)":{maxHeight:"bnxxjg7g"}},maxImageHeightDialogWithFooter:{maxHeight:"nskh8ow2","@media (max-width: 899px)":{maxHeight:"dx5evmzu"}},maxImageHeightTabs:{maxHeight:"gitj76qy","@media (max-width: 899px)":{maxHeight:"bnxxjg7g"}},maxImageHeightTabsWithFooter:{maxHeight:"kgqd366c","@media (max-width: 899px)":{maxHeight:"a7lra598"}},passthroughImage:{backgroundPosition:"d2hbt3d9",backgroundRepeat:"qb00l2mb",backgroundSize:"gj6al65z",height:"datstx6m",width:"k4urcfbm"},photoWrapperPlaceholder:{height:"datstx6m",width:"k4urcfbm"},photoWrapperResponsive:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"cbu4d94t",justifyContent:"taijpn5t",position:"l9j0dhe7"},placeholderContainer:{height:"datstx6m",width:"k4urcfbm"}};function j(a,b){a===void 0&&(a=!1);b===void 0&&(b=!1);var e=d("CometRouteRenderType").useIsPushView();return c("stylex")(i.backgroundContainerResponsive,!a&&e&&i.backgroundContainerDialog,!a&&!e&&i.backgroundContainerTabs,a&&e&&i.backgroundContainerDialogWithFooter,a&&!e&&i.backgroundContainerTabsWithFooter,b&&i.placeholderContainer)}function k(a,b){var e=d("CometRouteRenderType").useIsPushView();return c("stylex")(!a&&e&&i.maxImageHeightDialog,!a&&!e&&i.maxImageHeightTabs,a&&e&&i.maxImageHeightDialogWithFooter,a&&!e&&i.maxImageHeightTabsWithFooter,b&&i.passthroughImage,!b&&i.image,c("gkx")("1299319")&&i.ie11minHeight)}function l(a,b){var e=d("CometRouteRenderType").useIsPushView();return[!a&&e&&i.maxImageHeightDialog,!a&&!e&&i.maxImageHeightTabs,a&&e&&i.maxImageHeightDialogWithFooter,a&&!e&&i.maxImageHeightTabsWithFooter,b&&i.passthroughImage,!b&&i.image,c("gkx")("1299319")&&i.ie11minHeight]}function a(a,b){var d=a.height,e=a.imageUri,f=a.showPlaceholderImage;f=f===void 0?!0:f;var g=a.width;a=a.withFooter;a=a===void 0?!1:a;a=k(a,!0);var l=j(!1,!0);return h.jsx("div",{className:l,ref:(l=b)!=null?l:null,children:e!=null&&f&&h.jsx("div",{className:c("stylex")(i.photoWrapperResponsive,i.photoWrapperPlaceholder),children:h.jsx("div",{className:a,style:d!=null&&g!=null?{backgroundImage:"url("+e+")",maxHeight:d,maxWidth:g}:{backgroundImage:"url("+e+")"}},e)})})}a.displayName=a.name+" [from "+f.id+"]";function b(a,b){var d=a.imageComponent,e=a.imageComponentWithXStyle;a=a.withFooter;a=a===void 0?!1:a;var f=k(a,!1);a=l(a,!1);b=h.jsx("div",{className:c("stylex")(i.photoWrapperResponsive,c("gkx")("1299319")&&i.ie11PhotoWrapperWidth),ref:b,children:d!=null?d(f):e!=null?e(a):null});return h.jsx(c("CometPhotoViewerZoom.react"),{children:b})}b.displayName=b.name+" [from "+f.id+"]";e=h.forwardRef(b);f=h.forwardRef(a);g.useCometPhotoViewerContainerStyles=j;g.CometPhotoViewerImageWrapper=e;g.CometPhotoViewerPlaceholderWrapper=f}),98);
__d("CometPhotoRoot.react",["CometFeedStoryClickLoggerImpl.react","CometMediaViewerStage.react","CometPageLayoutWithComplementaryContent.react","CometPhotoViewerAIProductTagReducer","CometPhotoViewerResponsiveInnerWrapper.react","CometPhotoViewerViewStateContext","CometPhotoViewerViewStateDispatcherContext","CometPlaceholder.react","CometProductTagFunnelIDContext","CometProductTagReferralCodeContext","CometRouteParams","CometTrackingCodeContext","CometTrackingNodeProvider.react","HoveredProductIDContext","RelayUFI2CommentsKeyContext","StoryRenderLocation","cr:1689664","deferredLoadComponent","react","requireDeferredForDisplay","unrecoverableViolation","useCurrentRoute","useRoutePassthroughProps","validateAggregatedStoryTrackingNodeIndex","validateTrackingCode"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");e=d("react");var i=e.useMemo,j=e.useReducer,k=e.useState,l=c("deferredLoadComponent")(c("requireDeferredForDisplay")("CometPhotoRootContent.react").__setRef("CometPhotoRoot.react"));function a(a){var e=d("CometRouteParams").useRouteParams(),f=c("useRoutePassthroughProps")(),g=c("validateTrackingCode")(f==null?void 0:f.trackingCode),m=(f==null?void 0:f.origSrc)!=null?String(f==null?void 0:f.origSrc):null,n=(f==null?void 0:f.origWidth)!=null?Number(f==null?void 0:f.origWidth):null,o=(f==null?void 0:f.origHeight)!=null?Number(f==null?void 0:f.origHeight):null,p=(f==null?void 0:f.origOverlayShown)!=null?Boolean(f==null?void 0:f.origOverlayShown):null,q=(f==null?void 0:f.productTagReferralCode)!=null?String(f==null?void 0:f.productTagReferralCode):null,r=(f==null?void 0:f.productTagFunnelID)!=null?String(f==null?void 0:f.productTagFunnelID):null,s=c("useCurrentRoute")();s=(s=s==null?void 0:s.transparent)!=null?s:!1;var t=k(null),u=t[0],v=t[1];t=i(function(){return{hoveredProductID:u,setHoveredProductID:v}},[u,v]);var w=j(function(a,b){a=a;var d=[c("CometPhotoViewerAIProductTagReducer")];for(var e=0;e<d.length;e++){var f=d[e];a=f(a,b)}return a},{highlightedKnownAITagID:null,isProductTagging:!1,knownAITags:null,tagModeEnabled:!1,unknownAITags:null}),x=w[0];w=w[1];var y=e==null?void 0:e.fbid;e=e==null?void 0:e.set;var z=c("validateAggregatedStoryTrackingNodeIndex")(f==null?void 0:f.index),A=f==null?void 0:f.storyRenderLocation,B=void 0;typeof A==="string"&&(B=c("StoryRenderLocation")[A.toUpperCase()]);A=Boolean(f==null?void 0:f.isUntagged);if(y==null||typeof y!=="string")throw c("unrecoverableViolation")("Invalid fbid parameter","comet_ui");if(e!=null&&typeof e!=="string")throw c("unrecoverableViolation")("Invalid set parameter","comet_ui");f=s?{backgroundColor:"dark"}:null;x=h.jsx(c("CometPhotoViewerViewStateContext").Provider,{value:x,children:h.jsx(c("CometPhotoViewerViewStateDispatcherContext").Provider,{value:w,children:h.jsx(c("HoveredProductIDContext").Provider,{value:t,children:h.jsx(c("RelayUFI2CommentsKeyContext").Provider,{value:"CometPhotoRootQuery",children:h.jsx(c("CometTrackingNodeProvider.react"),{index:z,trackingNode:82,children:h.jsx(c("CometProductTagReferralCodeContext").Provider,{value:q,children:h.jsxs(c("CometProductTagFunnelIDContext").Provider,{value:r,children:[h.jsx(c("CometPlaceholder.react"),{fallback:h.jsx(c("CometPageLayoutWithComplementaryContent.react"),{hideContainerBackground:s,isRightRailFixed:!0,rightRail:h.jsx("div",{}),children:h.jsx(c("CometMediaViewerStage.react"),babelHelpers["extends"]({},f,{isUntagged:A,storyRenderLocation:B,useKeyCommands:!1,children:h.jsx(d("CometPhotoViewerResponsiveInnerWrapper.react").CometPhotoViewerPlaceholderWrapper,{height:o,imageUri:m,showPlaceholderImage:m!=null&&n!=null&&o!=null&&p!==!0,width:n})}))}),children:h.jsx(l,babelHelpers["extends"]({hideContainerBackground:s,isUntagged:A,mediasetToken:e,origHeight:o,origOverlayShown:p,origSrc:m,origWidth:n,photoID:y,storyRenderLocation:B},a.queries))}),b("cr:1689664")&&a.queries.loggedOutCTAfooterDataQueryReference&&h.jsx(b("cr:1689664"),{footerDataQueryReference:a.queries.loggedOutCTAfooterDataQueryReference})]})})})})})})});if(g)return h.jsx(c("CometTrackingCodeContext").Provider,{value:g,children:h.jsx(c("CometFeedStoryClickLoggerImpl.react"),{children:x})});else return x}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometMediaViewerRightRailUFIGlimmer.react",["BaseGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(){return h.jsxs("div",{className:"dati1w0a ihqw7lf3 hv4rvrfc discj3wi kwzhilbh j83agx80",children:[h.jsx(c("BaseGlimmer.react"),{className:"a12rg87m bsodd3zb mwvzfrdb kxcb68kb kgjeooe1 dwerhba3",index:1}),h.jsx(c("BaseGlimmer.react"),{className:"a12rg87m bsodd3zb mwvzfrdb kxcb68kb kgjeooe1 dwerhba3",index:2}),h.jsx(c("BaseGlimmer.react"),{className:"a12rg87m bsodd3zb mwvzfrdb kxcb68kb kgjeooe1 dwerhba3",index:3})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);