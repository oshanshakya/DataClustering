if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("BaseSlider.react",["fbt","CometComponentWithKeyCommands.react","CometKeys","Locale","Pressable.react","react","recoverableViolation","stylex","useCometUniqueID"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useEffect,l=b.useMemo,m=b.useRef,n={rail:{backgroundColor:"pwoa4pd7",borderTopStartRadius:"s8bnoagg",borderTopEndRadius:"bn9qtmzc",borderBottomEndRadius:"hp05c5td",borderBottomStartRadius:"b6jg2yqc",display:"a8c37x1j",height:"mw227v9j",position:"pmk7jnqg",width:"k4urcfbm"},root:{boxSizing:"cjfnh4rs",cursor:"nhd2j8a9",display:"q9uorilb",height:"mw227v9j",paddingBottom:"sj5x9vvc",paddingTop:"cxgpxx05",position:"l9j0dhe7",touchAction:"gokke00a",width:"k4urcfbm"},thumb:{backgroundColor:"q2y6ezfg",borderTopColor:"qbxu24ho",borderEndColor:"bxzzcbxg",borderBottomColor:"lxuwth05",borderStartColor:"h2mp5456",borderTopStartRadius:"s45kfl79",borderTopEndRadius:"emlxlaya",borderBottomEndRadius:"bkmhp75w",borderBottomStartRadius:"spb7xbtv",borderTopStyle:"goun2846",borderEndStyle:"ccm00jje",borderBottomStyle:"s44p3ltw",borderStartStyle:"mk2mc5f4",borderTopWidth:"frvqaej8",borderEndWidth:"ed0hlay0",borderBottomWidth:"afxsp9o4",borderStartWidth:"jcgfde61",bottom:"i09qtzwb",boxShadow:"ibrqsekg",boxSizing:"rq0escxv",cursor:"nhd2j8a9",height:"jnigpg78",marginStart:"e5bbllhu",outline:"lzcic4wl",position:"pmk7jnqg",top:"kr520xx4",width:"odw8uiq3"},thumbFocusVisible:{borderTopColor:"ng4oes9w",borderEndColor:"epui8hbc",borderBottomColor:"nxp5a7ae",borderStartColor:"og13rbbo",boxShadow:"gxj1dplq"},thumbWrapper:{marginEnd:"o3lre8g0",marginStart:"gu00c43d",marginTop:"sv5sfqaa",position:"l9j0dhe7"},track:{backgroundColor:"is6700om",borderTopStartRadius:"s8bnoagg",borderTopEndRadius:"bn9qtmzc",borderBottomEndRadius:"hp05c5td",borderBottomStartRadius:"b6jg2yqc",display:"a8c37x1j",height:"mw227v9j",position:"pmk7jnqg"}};function o(a,b){a=a.reduce(function(a,c,d){c=Math.abs(b-c);return a==null||c<a.distance||c===a.distance?{distance:c,index:d}:a},null);return(a=a==null?void 0:a.index)!=null?a:0}function p(a,b,c){return(a-b)*100/(c-b)}function q(a,b,c){return Math.min(Math.max(a,b),c)}function r(a){return a.toString()}function s(a,b){return a+b}function t(a){var b=m(a);k(function(){b.current=a});return j(function(a){return b.current(a)},[])}function u(a,b){a=a.changedTouches;if(b==null||!a)return null;for(var c=0;c<a.length;++c){var d=a[c];if(d.identifier===b)return d.pageX}return null}function a(a,b){var e,f=a.ariaLabel,g=a.ariaLabelledBy,v=a.ariaValueText,w=v===void 0?r:v;v=a.disabled;var x=v===void 0?!1:v;v=a.max;var y=v===void 0?100:v;v=a.min;var z=v===void 0?0:v,A=a.onChange,B=a.onChangeSettled;v=a.step;var C=v===void 0?1:v,D=a.values;v=a.xstyleRail;var E=a.xstyleRoot,F=a.xstyleThumb;a=a.xstyleTrack;var G=c("useCometUniqueID")(),H=m(null),I=m(0),J=m(null),K=m(null),L=l(function(){var a=typeof D==="number"?[D]:[].concat(D);a.sort(function(a,b){return a-b});return a},[D]),M=p(L.length>1?L[0]:z,z,y),N=p(L[L.length-1],z,y)-M;M=(e={},e[d("Locale").isRTL()?"right":"left"]=M+"%",e.width=N+"%",e);var O=j(function(){if(I.current!=null&&H.current){var a=H.current.querySelector("#"+s(G,I.current));a!=null&&a.focus()}},[G]),P=j(function(a){var b,e=a.eventX;a=a.isMove;a=a===void 0?!1:a;var f=H.current;if(f==null){c("recoverableViolation")("Slider Ref should have been set","comet_ui");return null}if(x)return null;b=(b=f.ownerDocument.defaultView)!=null?b:window;f=f.getBoundingClientRect();var g=f.left;f=f.width;e=(e-g-b.pageXOffset)/f;d("Locale").isRTL()&&(e=1-e);g=q(Math.round(((y-z)*e+z)/C)*C,z,y);b=a?I.current:o(L,g);f=L;if(L[b]!==g){e=[].concat(L);e[b]=g;e.sort(function(a,b){return a-b});f=e}I.current=f.indexOf(g);return f},[x,y,z,C,L]),Q=t(function(a){a=P({eventX:a.pageX,isMove:!0});a!=null&&A&&A(a);O()}),R=t(function(a){a=P({eventX:a.pageX});a!=null&&B&&B(a);window.removeEventListener("mousemove",Q,!0);window.removeEventListener("mouseup",R,!0)});N=t(function(a){if(x)return;var b=window.navigator.userAgent.indexOf("MSIE")>=0;b||a.preventDefault();b=P({eventX:a.pageX});b!=null&&A&&A(b);O();window.addEventListener("mousemove",Q,!0);window.addEventListener("mouseup",R,!0)});var S=t(function(a){a=u(a,J.current);if(a==null)return;a=P({eventX:a,isMove:!0});a!=null&&A&&A(a);O()}),T=t(function(a){a=u(a,J.current);if(a==null)return;a=P({eventX:a});a!=null&&B&&B(a);window.removeEventListener("touchmove",S,!0);window.removeEventListener("touchend",T,!0)});e=t(function(a){if(x)return;a.preventDefault();var b=a.changedTouches[0];b!=null&&(J.current=b.identifier);b=u(a,J.current);if(b==null)return;a=P({eventX:b});a!=null&&A&&A(a);O();window.addEventListener("touchmove",S,!0);window.addEventListener("touchend",T,!0)});k(function(){if(x)return;return function(){window.removeEventListener("mousemove",Q,!0),window.removeEventListener("mouseup",R,!0),window.removeEventListener("touchmove",S,!0),window.removeEventListener("touchend",T,!0)}},[x,Q,R,T,S,e]);var U=j(function(a){var b=K.current;if(b!=null){a=q(Math.round(a/C)*C,z,y);if(L[b]!==a){var c=[].concat(L);c[b]=a;c.sort(function(a,b){return a-b});A&&A(c);B&&B(c)}}},[y,z,A,B,C,L]),V=(y-z)/10,W=l(function(){return[{command:{key:c("CometKeys").HOME},description:h._(/*FBT_CALL*/"Sets slider to its minimum value."/*FBT_CALL*/),handler:function(){K.current!=null&&U(z)}},{command:{key:c("CometKeys").END},description:h._(/*FBT_CALL*/"Sets slider to its maximum value."/*FBT_CALL*/),handler:function(){K.current!=null&&U(y)}},{command:{key:c("CometKeys").PAGE_DOWN},description:h._(/*FBT_CALL*/"Decreases slider value multiple steps. In this slider, jumps ten percent."/*FBT_CALL*/),handler:function(){K.current!=null&&U(L[K.current]-V)}},{command:{key:c("CometKeys").PAGE_UP},description:h._(/*FBT_CALL*/"Increases slider value multiple steps. In this slider, jumps ten percent."/*FBT_CALL*/),handler:function(){K.current!=null&&U(L[K.current]+V)}},{command:{key:c("CometKeys").LEFT},description:h._(/*FBT_CALL*/"Decreases slider value one step."/*FBT_CALL*/),handler:function(){K.current!=null&&U(L[K.current]-C)}},{command:{key:c("CometKeys").DOWN},description:h._(/*FBT_CALL*/"Decreases slider value one step."/*FBT_CALL*/),handler:function(){K.current!=null&&U(L[K.current]-C)}},{command:{key:c("CometKeys").RIGHT},description:h._(/*FBT_CALL*/"Increases slider value one step."/*FBT_CALL*/),handler:function(){K.current!=null&&U(L[K.current]+C)}},{command:{key:c("CometKeys").UP},description:h._(/*FBT_CALL*/"Increases slider value one step."/*FBT_CALL*/),handler:function(){K.current!=null&&U(L[K.current]+C)}}]},[y,z,U,C,V,L]);return i.jsx(c("CometComponentWithKeyCommands.react"),{commandConfigs:W,children:i.jsxs("div",{className:c("stylex")([n.root,E]),onMouseDown:N,onTouchStart:e,ref:H,role:"none",children:[i.jsx("div",{className:c("stylex")([n.rail,v]),ref:b}),i.jsx("div",{className:c("stylex")([n.track,a]),style:M}),i.jsx("div",{className:c("stylex")(n.thumbWrapper),children:L.map(function(a,b){var e=p(a,z,y),j=f;f!=null&&L.length>1&&(b===0?j=h._(/*FBT_CALL*/"{slider label}, minimum value"/*FBT_CALL*/,[h._param("slider label",f)]):b===L.length-1&&(j=h._(/*FBT_CALL*/"{slider label}, maximum value"/*FBT_CALL*/,[h._param("slider label",f)])));return i.jsx(c("Pressable.react"),{accessibilityLabel:j,accessibilityRelationship:{labelledby:g},accessibilityRole:"slider",accessibilityState:{disabled:x,orientation:"horizontal"},accessibilityValue:{max:y,min:z,now:a,text:w(a)},disabled:x,nativeID:s(G,b),onBlur:function(){K.current=null},onFocus:function(){K.current=b},style:(j={},j[d("Locale").isRTL()?"right":"left"]=e+"%",j),xstyle:function(a){return[n.thumb,a.focusVisible&&n.thumbFocusVisible,typeof F==="function"?F(a):F]}},b)})})]})})}a.displayName=a.name+" [from "+f.id+"]";e=i.forwardRef(a);g["default"]=e}),98);
__d("CometSlider.react",["BaseSlider.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.disabled,d=a.getRangeLabel,e=a.label,f=a.max,g=a.min,i=a.onChange,j=a.onChangeSettled,k=a.step;a=a.value;return h.jsx(c("BaseSlider.react"),{ariaLabel:e,ariaValueText:d,disabled:b,max:f,min:g,onChange:function(a){i(a[0])},onChangeSettled:function(a){j&&j(a[0])},step:k,values:[a]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("LWICometDropdownMenuGlimmer.react",["BaseGlimmer.react","CometRowItem.react","LWICometRow.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsx(c("LWICometRow.react"),{paddingTop:a.paddingTop,children:h.jsx(c("CometRowItem.react"),{children:h.jsx(c("BaseGlimmer.react"),{className:"du4w35lb k4urcfbm i1ao9s8h l9j0dhe7 a8nywdso qt6c0cv9 rz4wbd8a jb3vyjys hcukyx3x oygrvhab cxmmr5t8 kvgmc6g5 e5d9fub0 rq0escxv mk2mc5f4 s44p3ltw ccm00jje goun2846 kzx2olss aot14ch1 p86d2i9g beltcj47 aypy0576 s1tcr66n maa8sdkg l6v480f0 g5ia77u1 dwo3fsh8",index:0})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useLWICometImpressionLogger",["LWICometProductUtils","react","requireDeferred","useLWILoggerContext"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback,i=c("requireDeferred")("LWICometFalcoEvent").__setRef("useLWICometImpressionLogger");function a(a){var b=c("useLWILoggerContext")(),e=b.entryPoint,f=b.flow,g=b.flowID,j=b.pageID,k=b.product,l=b.targetID;return h(function(){i.onReady(function(b){b.log({entry_point:e,event:a,flow:f,flow_id:g,page_id:j,post_id:l,product:d("LWICometProductUtils").productFromGraphQLEnumToJSEnumStrict(k),side:"client_side"})})},[e,a,f,g,j,k,l])}g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("CometPhotoEditLocationDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4050647598357047"}),null);
__d("CometPhotoEditLocationDialogQuery$Parameters",["CometPhotoEditLocationDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometPhotoEditLocationDialogQuery_facebookRelayOperation"),metadata:{},name:"CometPhotoEditLocationDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometMediaViewerDownloadPhotoMenuItem_storyMenuItem$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b=[a];return{kind:"SplitOperation",metadata:{},name:"CometMediaViewerDownloadPhotoMenuItem_storyMenuItem$normalization",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"download_link",storageKey:null}],type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:b,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:b,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:b,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:b,type:"MontageVideo",abstractKey:null}],storageKey:null}],storageKey:null},a],storageKey:null}]}}();e.exports=a}),null);
__d("CometMediaViewerDownloadPhotoMenuItem_storyMenuItem.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometMediaViewerDownloadPhotoMenuItem_storyMenuItem",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"download_link",storageKey:null}],type:"Photo",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"PhotoDownloadMenuItem",abstractKey:null};e.exports=a}),null);
__d("CometMediaViewerFullscreenMenuItem_storyMenuItem$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"CometMediaViewerFullscreenMenuItem_storyMenuItem$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}]};e.exports=a}),null);
__d("CometMediaViewerFullscreenMenuItem_storyMenuItem.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometMediaViewerFullscreenMenuItem_storyMenuItem",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],type:"MediaFullscreenMenuItem",abstractKey:null};e.exports=a}),null);
__d("ProfileCometProfilePictureEditPreviewDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4476862909029651"}),null);
__d("ProfileCometProfilePictureEditPreviewDialogQuery$Parameters",["ProfileCometProfilePictureEditPreviewDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("ProfileCometProfilePictureEditPreviewDialogQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometProfilePictureEditPreviewDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometMakeProfilePictureMenuItem_storyMenuItem$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b=[a];return{kind:"SplitOperation",metadata:{},name:"ProfileCometMakeProfilePictureMenuItem_storyMenuItem$normalization",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[a,{alias:null,args:[{kind:"Literal",name:"height",value:500},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:500}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null}],type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:b,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:b,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:b,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:b,type:"MontageVideo",abstractKey:null}],storageKey:null}],storageKey:null},a],storageKey:null}]}}();e.exports=a}),null);
__d("ProfileCometMakeProfilePictureMenuItem_storyMenuItem.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"ProfileCometMakeProfilePictureMenuItem_storyMenuItem",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:500},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:500}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null}],type:"Photo",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"PhotoMakeProfilePictureMenuItem",abstractKey:null};e.exports=a}),null);
__d("CometMediaViewerDownloadPhotoMenuItem.react",["fbt","ix","CometMediaViewerDownloadPhotoMenuItem_storyMenuItem.graphql","CometMenuItem.react","CometRelay","fbicon","react","recoverableViolation"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");function a(a,e){var f=a.onClick;a=a.storyMenuItem;a=d("CometRelay").useFragment(j!==void 0?j:j=b("CometMediaViewerDownloadPhotoMenuItem_storyMenuItem.graphql"),a);a=a==null?void 0:(a=a.story)==null?void 0:(a=a.attachments[0])==null?void 0:(a=a.media)==null?void 0:a.download_link;if(a==null){c("recoverableViolation")("download link cannot be null for this attachment to be downloaded","comet_ui");return null}return k.jsx(c("CometMenuItem.react"),{download:!0,href:a,icon:d("fbicon")._(i("489719"),20),onClick:f,primaryText:h._(/*FBT_CALL*/"Download"/*FBT_CALL*/),ref:e})}a.displayName=a.name+" [from "+f.id+"]";e=k.forwardRef(a);g["default"]=e}),98);
__d("CometMediaViewerFullscreenMenuItem.react",["fbt","ix","CometFullScreen","CometMediaViewerFullscreenContext","CometMediaViewerFullscreenMenuItem_storyMenuItem.graphql","CometMenuItem.react","CometRelay","CometSetMediaViewerFullscreenContext","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react"),l=d("react").useContext;function a(a,e){var f=a.onClick;a=a.storyMenuItem;d("CometRelay").useFragment(j!==void 0?j:j=b("CometMediaViewerFullscreenMenuItem_storyMenuItem.graphql"),a);a=d("CometFullScreen").getFullScreenElement();var g=l(c("CometSetMediaViewerFullscreenContext")),m=l(c("CometMediaViewerFullscreenContext")),n=function(){f&&f(),g(!m)};return k.jsx(c("CometMenuItem.react"),{icon:a!=null?d("fbicon")._(i("528442"),20):d("fbicon")._(i("595830"),20),onClick:n,primaryText:a!=null?h._(/*FBT_CALL*/"Exit Fullscreen"/*FBT_CALL*/):h._(/*FBT_CALL*/"Enter Fullscreen"/*FBT_CALL*/),ref:e})}a.displayName=a.name+" [from "+f.id+"]";e=k.forwardRef(a);g["default"]=e}),98);
__d("CometPhotoEditLocationDialog.entrypoint",["CometPhotoEditLocationDialogQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.mediaID;return{queries:{dialogQueryReference:{parameters:b("CometPhotoEditLocationDialogQuery$Parameters"),variables:{mediaID:a}}}}},root:c("JSResourceForInteraction")("CometPhotoEditLocationDialog.react").__setRef("CometPhotoEditLocationDialog.entrypoint")};g["default"]=a}),98);
__d("ProfileCometProfilePictureEditPreviewDialog.entrypoint",["JSResourceForInteraction","ProfileCometProfilePictureEditPreviewDialogQuery$Parameters","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){return{queries:{queryReference:{parameters:c("ProfileCometProfilePictureEditPreviewDialogQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("ProfileCometProfilePictureEditPreviewDialog.react").__setRef("ProfileCometProfilePictureEditPreviewDialog.entrypoint")};g["default"]=a}),98);
__d("useProfileCometProfilePictureEditPreviewDialog",["fbt","CometCardedDialogLoadingState.react","ProfileCometProfilePictureEditPreviewDialog.entrypoint","react","useCometEntryPointDialog"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useRef;function a(a,b,d){var e=function(){return i.jsx(c("CometCardedDialogLoadingState.react"),{onClose:d,size:"medium",title:h._(/*FBT_CALL*/"Update profile picture"/*FBT_CALL*/),withCloseButton:!0})},f=k(null);e=c("useCometEntryPointDialog")(c("ProfileCometProfilePictureEditPreviewDialog.entrypoint"),{},"button",e);var g=e[0],l=e[1],m=e[2];e=e[3];return[j(function(){g({onClose:d,photo:a,source:b})},[g,d,a,b]),f,l,m,e]}g["default"]=a}),98);
__d("ProfileCometMakeProfilePictureMenuItem.react",["fbt","ix","CometMenuItem.react","CometRelay","ProfileCometMakeProfilePictureMenuItem_storyMenuItem.graphql","fbicon","react","unrecoverableViolation","useProfileCometProfilePictureEditPreviewDialog"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react"),l=d("react").useCallback;function a(a,e){var f,g,m=a.onClick;a=a.storyMenuItem;a=d("CometRelay").useFragment(j!==void 0?j:j=b("ProfileCometMakeProfilePictureMenuItem_storyMenuItem.graphql"),a);a=(a=a.story)==null?void 0:(a=a.attachments[0])==null?void 0:a.media;var n=a==null?void 0:a.id;f=a==null?void 0:(f=a.image)==null?void 0:f.height;g=a==null?void 0:(g=a.image)==null?void 0:g.width;a=a==null?void 0:(a=a.image)==null?void 0:a.uri;if(n==null||f==null||g==null||a==null)throw c("unrecoverableViolation")("Unable to render Make Profile Picture menu item with null photo fields","profile_comet");f=c("useProfileCometProfilePictureEditPreviewDialog")({height:f,id:n,isProfilePicture:!1,uri:a,width:g},"PHOTO_VIEW",function(){});var o=f[0];f[1];n=f[2];a=f[3];g=f[4];f=l(function(){m&&m(),o()},[m,o]);return k.jsx(c("CometMenuItem.react"),{icon:d("fbicon")._(i("558623"),20),onClick:f,onHoverIn:n,onHoverOut:a,onPressIn:g,primaryText:h._(/*FBT_CALL*/"Make Profile Picture"/*FBT_CALL*/),ref:e})}a.displayName=a.name+" [from "+f.id+"]";e=k.forwardRef(a);g["default"]=e}),98);
__d("useCometMediaViewerDelete",["CometCardedDialogLoadingState.react","react","requireDeferred","useCometDeferredDialog"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");a=d("react");var i=a.useCallback,j=a.useRef,k=c("requireDeferred")("CometMediaViewerDeleteConfirmationDialog.react").__setRef("useCometMediaViewerDelete");b=function(){var a=i(function(){return h.jsx(c("CometCardedDialogLoadingState.react"),{})},[]),b=j(null),d=c("useCometDeferredDialog")(k,a);a=i(function(a,b,c){b===void 0&&(b=function(){}),c===void 0&&(c=function(){}),d(a,function(a){a?b():c()})},[d]);return[a,b]};e=b;g["default"]=e}),98);
__d("FXIMRemindersLogger",["FxIdentityProductFalcoEvent"],(function(a,b,c,d,e,f,g){"use strict";function h(a){c("FxIdentityProductFalcoEvent").log(function(){return babelHelpers["extends"]({flow_type:"reminders"},a)})}function a(a,b){h({fx_im_logger_events:"reminder_shown",reminder_referral:b,type_of_reminder:a})}function b(a,b){h({fx_im_logger_events:"reminder_confirm",reminder_referral:b,type_of_reminder:a})}function d(a,b){h({fx_im_logger_events:"reminder_cancel",reminder_referral:b,type_of_reminder:a})}function e(a,b){h({fx_im_logger_events:"reminder_manage_settings",reminder_referral:b,type_of_reminder:a})}g.fximRemindersLogShown=a;g.fximRemindersLogConfirmClick=b;g.fximRemindersLogCancelClick=d;g.fximRemindersLogManageSettingsClick=e}),98);
__d("CometChangeAltTextDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="3745762758867972"}),null);/*FB_PKG_DELIM*/
__d("FriendingCometDeactivatedUserDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="3437622122967204"}),null);
__d("FriendingCometDeactivatedUserDialogQuery$Parameters",["FriendingCometDeactivatedUserDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("FriendingCometDeactivatedUserDialogQuery_facebookRelayOperation"),metadata:{},name:"FriendingCometDeactivatedUserDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometAppCollectionItemHovercardWrapper_timelineAppCollectionItem.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometAppCollectionItemHovercardWrapper_timelineAppCollectionItem",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"Entity",abstractKey:"__isEntity"}],storageKey:null}],type:"TimelineAppCollectionItem",abstractKey:null};e.exports=a}),null);
__d("ProfileCometAppSectionNonSelfFriendsActionRenderer_actionsRenderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"ProfileCometAppSectionNonSelfFriendsActionRenderer_actionsRenderer$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}]};e.exports=a}),null);
__d("ProfileCometAppSectionNonSelfFriendsActionRenderer_actionsRenderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometAppSectionNonSelfFriendsActionRenderer_actionsRenderer",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],type:"TimelineAppSectionFriendsNonSelfActionRenderer",abstractKey:null};e.exports=a}),null);
__d("useFxIdentityProductFalcoEventLogger",["Actor","FXUtils","promiseDone","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback,i=c("requireDeferred")("FxIdentityProductFalcoEvent").__setRef("useFxIdentityProductFalcoEventLogger");function a(){var a=d("Actor").useActor(),b=a[0];return h(function(a){c("promiseDone")(i.load(),function(c){c.log(function(){return babelHelpers["extends"]({},a,{initiator_account_id:b,initiator_account_type:d("FXUtils").getFXClientActorAccountType()})})})},[b])}g["default"]=a}),98);
__d("useFXIMImpressionLoggingV2",["react","useFxIdentityProductFalcoEventLogger","usePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useRef;function a(a){var b=a.isVisible,d=b===void 0?!0:b,e=a.loggingParams,f=c("useFxIdentityProductFalcoEventLogger")(),g=i(!1);h(function(){!d&&g.current&&(g.current=!1)},[d]);b=function(){d&&!g.current&&(f(e),g.current=!0)};return c("usePartialViewImpression")({onImpressionStart:b})}g["default"]=a}),98);
__d("FriendingCometDeactivatedUserDialog.entrypoint",["FriendingCometDeactivatedUserDialogQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{queryReference:{parameters:b("FriendingCometDeactivatedUserDialogQuery$Parameters"),variables:{id:a.userID}}}}},root:c("JSResourceForInteraction")("FriendingCometDeactivatedUserDialog.react").__setRef("FriendingCometDeactivatedUserDialog.entrypoint")};g["default"]=a}),98);
__d("FXIMCometPageEditingBCIReminder.react",["ix","CometContextualMessage.react","TetraIcon.react","fbicon","react","useFXIMImpressionLoggingV2"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.hasBottomPadding;b=b===void 0?!0:b;var e=a.header,f=a.pageID,g=a.reminderType,j=a.text;f=c("useFXIMImpressionLoggingV2")({isVisible:!0,loggingParams:{flow_type:"business_reminders",fx_im_logger_events:"reminder_shown",target_identity_id:f,target_identity_info:a.isPageReminder===!0?(a={},a[f]="fb_page",a):null,type_of_reminder:g}});return i.jsx("div",{className:b?"dati1w0a ihqw7lf3 hv4rvrfc discj3wi":"discj3wi dati1w0a hv4rvrfc",ref:f,children:i.jsx(c("CometContextualMessage.react"),{body:j,headline:e,icon:i.jsx(c("TetraIcon.react"),{color:"blueLink",icon:d("fbicon")._(h("538038"),24)}),type:"secondary"})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometAppCollectionContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={collectionID:null};c=a.createContext(b);g["default"]=c}),98);
__d("ProfileCometAppCollectionNullState.react",["TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.message;return h.jsx("div",{className:"bjjx79mm bq3qbged",children:h.jsx(c("TetraText.react"),{align:"center",color:"tertiary",type:"headlineEmphasized2",children:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometAppCollectionItemHovercardWrapper.react",["ActorHovercard.react","CometRelay","ProfileCometAppCollectionItemHovercardWrapper_timelineAppCollectionItem.graphql","canRenderHovercardForGraphQLEntityType","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e,f=a.children;a=a.timelineAppCollectionItem;a=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometAppCollectionItemHovercardWrapper_timelineAppCollectionItem.graphql"),a);e=(e=a.node)!=null?e:{};var g=e.id;e=e.url;return g!=null&&e!=null&&e!==""&&c("canRenderHovercardForGraphQLEntityType")((e=a.node)==null?void 0:e.__typename)?i.jsx(c("ActorHovercard.react"),{actorID:g,children:f}):f(null)}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometAppSectionSearchControl.react",["fbt","ix","CometRoundedTextInput.react","ProfileCometAppSectionSearchContext","TetraIcon.react","fbicon","react","useDebouncedComet"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");b=d("react");var k=b.useCallback,l=b.useContext,m=b.useState;function a(){var a=l(c("ProfileCometAppSectionSearchContext")),b=a.isSearchEnabled;a=a.setSearchQuery;var e=m(""),f=e[0],g=e[1],n=c("useDebouncedComet")(a?a:function(){},{wait:100});e=k(function(a){a.target instanceof HTMLInputElement&&(g(a.target.value),n(a.target.value))},[g,n]);return!b?null:j.jsx(c("CometRoundedTextInput.react"),{icon:j.jsx(c("TetraIcon.react"),{color:"tertiary",icon:d("fbicon")._(i("491282"),16)}),label:"Label for text input",onChange:e,placeholder:h._(/*FBT_CALL*/"Search"/*FBT_CALL*/),value:f})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometAppSectionNonSelfFriendsActionRenderer.react",["CometRelay","CometRow.react","CometRowItem.react","ProfileCometAppSectionNonSelfFriendsActionRenderer_actionsRenderer.graphql","ProfileCometAppSectionSearchControl.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){a=a.actionsRenderer;d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometAppSectionNonSelfFriendsActionRenderer_actionsRenderer.graphql"),a);return i.jsx(c("CometRow.react"),{paddingHorizontal:0,paddingTop:0,spacing:8,verticalAlign:"center",children:i.jsx(c("CometRowItem.react"),{children:i.jsx(c("ProfileCometAppSectionSearchControl.react"),{})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FxIdentityProductFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1749696");c=b("FalcoLoggerInternal").create("fx_identity_product",a);e.exports=c}),null);