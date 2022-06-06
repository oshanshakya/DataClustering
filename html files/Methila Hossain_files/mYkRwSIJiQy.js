if (self.CavalryLogger) { CavalryLogger.start_js(["7IA4dbD"]); }

__d("CometInstantGamesPlayerRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6985905258087965"}),null);
__d("CometInstantGamesPlayerRootQuery$Parameters",["CometInstantGamesPlayerRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometInstantGamesPlayerRootQuery_facebookRelayOperation"),metadata:{},name:"CometInstantGamesPlayerRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometInstantGamesPlayerRHCQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4837119596331228"}),null);
__d("CometInstantGamesPlayerRHCQuery$Parameters",["CometInstantGamesPlayerRHCQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometInstantGamesPlayerRHCQuery_facebookRelayOperation"),metadata:{},name:"CometInstantGamesPlayerRHCQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("InstantApplicationContextTokenInputCreator.entrypointutils",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){var d=null;switch(c){case"THREAD":d={thread_id:b};break;case"STORY":d={story_token:b};break;case"GROUP":d={group_id:b};break;case"LINK":d={link_fragment:b};break;default:d=Object.freeze({});break}return{app_id:a,context_source_id:b,key:d}}f.getTokenInput=a}),66);
__d("InstantGameEnvironmentType.facebook",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum").Mirrored(["CANVAS","COPLAY","STANDARD","VIDEO_PLUGIN"]);c=a;f["default"]=c}),66);
__d("InstantGameEnvironmentType",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({STANDARD:"standard",COPLAY:"coplay",CANVAS:"canvas",VIDEO_PLUGIN:"video_plugin"});c=a;f["default"]=c}),66);
__d("InstantGameEnvironmentTypeUtils.facebook",["$InternalEnumUtils","InstantGameEnvironmentType"],(function(a,b,c,d,e,f,g){a=d("$InternalEnumUtils").createToJSEnum(c("InstantGameEnvironmentType"));b=d("$InternalEnumUtils").createFromJSEnum(c("InstantGameEnvironmentType"));g.toJSEnum=a;g.fromJSEnum=b}),98);
__d("CometInstantGamesPlayerRoot.entrypoint",["CometInstantGamesPlayerRHCQuery$Parameters","CometInstantGamesPlayerRootQuery$Parameters","InstantApplicationContextTokenInputCreator.entrypointutils","InstantGameEnvironmentTypeUtils.facebook","JSResourceForInteraction","WebPixelRatio","gkx"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var e;e=(e=d("InstantGameEnvironmentTypeUtils.facebook").fromJSEnum(a.routeProps.environmentType))!=null?e:"STANDARD";var f=!c("gkx")("3103")||e==="CANVAS",g=f&&e!=="CANVAS"&&c("gkx")("4478");return{extraProps:babelHelpers["extends"]({},a.routeParams,{hasRHC:f}),queries:{instantGamesPlayerRHCQuery:{options:{},parameters:b("CometInstantGamesPlayerRHCQuery$Parameters"),variables:{app_id:a.routeProps.appID,has_community:g,has_rhc:f,scale:d("WebPixelRatio").get()}},instantGamesPlayerRootQuery:{options:{},parameters:b("CometInstantGamesPlayerRootQuery$Parameters"),variables:{app_id:a.routeProps.appID,cloud_binary_id:a.routeParams.cloud_binary_id,context_source_id:a.routeParams.context_source_id,entry_point_video_id:a.routeParams.entrypoint_video_id,environment_type:e,game_id:a.routeProps.appID,is_comet_on_mobile:a.routeProps.isCometOnMobile,ota_update:a.routeParams.ota_update,session_id:(g=a.routeParams.session_id)!=null?g:(f=a.timeSpentMetaData)==null?void 0:(e=f.session_ids)==null?void 0:e.cg_session_id,source:a.routeProps.source,token_input:d("InstantApplicationContextTokenInputCreator.entrypointutils").getTokenInput(a.routeProps.appID,a.routeParams.context_source_id,(g=a.routeParams.context_type)!=null?g:"GENERIC"),useExperimentalInstantGamesContextualPlayerPresentation:c("gkx")("1301")}}}}},root:c("JSResourceForInteraction")("CometInstantGamesPlayerRoot.react").__setRef("CometInstantGamesPlayerRoot.entrypoint")};g["default"]=a}),98);
__d("GamesServiceOauthDialogLoadingComponent.react",["cx","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.render=function(){return i.jsx("div",{className:"_7taz"})};return b}(i.PureComponent);g["default"]=a}),98);
__d("QPLE2ESessionMarkers",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({NONE:"none",START:"start",END:"end"});c=a;f["default"]=c}),66);
__d("QPLE2E",["QuickPerformanceLogger"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(){}var b=a.prototype;b.logPoint=function(a,b,d,e){var f,g;e===void 0&&(e={});f=(f=e.timestamp)!=null?f:c("QuickPerformanceLogger").currentTimestamp();var h=babelHelpers["extends"]({},e.pointData);g=(g=e.action)!=null?g:12524;e.secondaryOrder!=void 0&&(h.string||(h.string={}),h.string.qpl_e2e__secondary_order=e.secondaryOrder);if(e.sessionMarker&&e.sessionMarker!=="none"){var i;h.bool||(h.bool={});h.bool=babelHelpers["extends"]({},h.bool,(i={},i.qpl_e2e__session_marker_start_point=e.sessionMarker==="start",i.qpl_e2e__session_marker_end_point=e.sessionMarker==="end",i))}c("QuickPerformanceLogger").markerStart(a,void 0,f,{samplingBasis:d});c("QuickPerformanceLogger").markerPoint(a,b,{data:h,timestamp:f*2});e.annotations&&c("QuickPerformanceLogger").markerAnnotate(a,e.annotations);c("QuickPerformanceLogger").markerAnnotate(a,{string:(i={},i.join_id=d,i.source="client",i),bool:(b={},b.qpl_e2e__align_points=!0,b)});c("QuickPerformanceLogger").markerEnd(a,g,void 0,f)};return a}();b=new a();g["default"]=b}),98);
__d("InstantGamesGameShareDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6125385204202905"}),null);