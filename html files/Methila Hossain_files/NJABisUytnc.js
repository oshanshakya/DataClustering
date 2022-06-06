if (self.CavalryLogger) { CavalryLogger.start_js(["Zgr96\/A"]); }

__d("ProfileCometHeaderPrimaryActionBar_actor.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"entityID"},{defaultValue:"WWW_COMET_PROFILE",kind:"LocalArgument",name:"userActionBarRenderLocation"}],kind:"Fragment",metadata:null,name:"ProfileCometHeaderPrimaryActionBar_actor",selections:[{alias:"primaryActions",args:[{kind:"Variable",name:"associated_entity_id",variableName:"entityID"},{kind:"Variable",name:"render_location",variableName:"userActionBarRenderLocation"},{kind:"Literal",name:"subsurface_type",value:"PRIMARY_SURFACE"}],concreteType:null,kind:"LinkedField",name:"profile_actions",plural:!0,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometHeaderActionBarButton_action"},{args:null,kind:"FragmentSpread",name:"ProfileCometActionTrigger_action"}],storageKey:null},{args:null,kind:"FragmentSpread",name:"useEntityRecommendationsUnitTriggerButton_node"}],type:"ActorWithActionBar",abstractKey:"__isActorWithActionBar"};e.exports=a}),null);
__d("useProfileCometFacepileItems_users.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:{plural:!0},name:"useProfileCometFacepileItems_users",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:32},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:32}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"User",abstractKey:null}}();e.exports=a}),null);
__d("EntityRecommendationsUnitQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6177385018998139"}),null);
__d("EntityRecommendationsUnitQuery$Parameters",["EntityRecommendationsUnitQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("EntityRecommendationsUnitQuery_facebookRelayOperation"),metadata:{},name:"EntityRecommendationsUnitQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("useEntityRecommendationsUnitTriggerButton_node.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useEntityRecommendationsUnitTriggerButton_node",selections:[{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"supported_entities",value:["FriendableProfileEntity"]}],concreteType:"XFBEntityRecommendations",kind:"LinkedField",name:"entity_recommendations",plural:!1,selections:[{args:null,documentName:"useEntityRecommendationsUnitTriggerButton_node",fragmentName:"EntityRecommendationsUnitTriggerButton_entityRecommendations",fragmentPropName:"entityRecommendations",kind:"ModuleImport"}],storageKey:'entity_recommendations(supported_entities:["FriendableProfileEntity"])'}],type:"HasEntityRecommendationsUnit",abstractKey:"__isHasEntityRecommendationsUnit"}],type:"Node",abstractKey:"__isNode"};e.exports=a}),null);
__d("CometTextColorEntityRenderer_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"CometTextColorEntityRenderer_entity",selections:[{alias:null,args:null,kind:"ScalarField",name:"hex_rgb_color_with_pound_key",storageKey:null}],type:"ColorAtRange",abstractKey:null};e.exports=a}),null);
__d("EntityRecommendationsUnit.entrypoint",["EntityRecommendationsUnitQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.entityID;return{queries:{queryReference:{parameters:c("EntityRecommendationsUnitQuery$Parameters"),variables:{entityID:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("EntityRecommendationsUnit.react").__setRef("EntityRecommendationsUnit.entrypoint")};b=a;g["default"]=b}),98);
__d("EntityRecommendationsUnitCardGlimmer.react",["BaseGlimmer.react","CometAspectRatioContainer.react","CometCard.react","CometColumn.react","CometColumnItem.react","react","stylex","useVisibilityObserver"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={buttonGlimmer:{borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",height:"tv7at329"},contentColumn:{maxWidth:"d2edcug0"},contentRoot:{display:"j83agx80",height:"datstx6m"},imageGlimmer:{height:"datstx6m",width:"k4urcfbm"},root:{display:"j83agx80",flexGrow:"buofh1pr",height:"datstx6m"},subtitleGlimmer:{borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",height:"gl3lb2sf",width:"r1eg49ei"},titleGlimmer:{borderTopStartRadius:"fni8adji",borderTopEndRadius:"hgaippwi",borderBottomEndRadius:"fykbt5ly",borderBottomStartRadius:"ns4ygwem",height:"jnigpg78",width:"eq70wtua"}},j=function(){};function a(a){var b=a.index;a=a.onVisible;a=a===void 0?j:a;a=c("useVisibilityObserver")({onVisible:a,options:{rootMargin:200}});return h.jsx("div",{className:c("stylex")(i.root),children:h.jsx(c("CometCard.react"),{background:"white",border:"solid",dropShadow:2,expanding:!0,ref:a,children:h.jsx("div",{className:c("stylex")(i.contentRoot),children:h.jsxs(c("CometColumn.react"),{expanding:!0,spacing:16,xstyle:i.contentColumn,children:[h.jsx(c("CometColumnItem.react"),{children:h.jsx(c("CometAspectRatioContainer.react"),{aspectRatio:1.5,children:h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.imageGlimmer),index:b})})}),h.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,children:h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.titleGlimmer),index:b})}),h.jsx(c("CometColumnItem.react"),{expanding:!0,paddingHorizontal:16,children:h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.subtitleGlimmer),index:b})}),h.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,paddingVertical:16,verticalAlign:"bottom",children:h.jsx(c("BaseGlimmer.react"),{className:c("stylex")(i.buttonGlimmer),index:b})})]})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("EntityRecommendationsUnitGlimmer.react",["BaseGlimmer.react","CometHScroll.react","CometRow.react","CometRowItem.react","EntityRecommendationsUnitCardGlimmer.react","gkx","range","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=c("gkx")("1296384")?196:150;function a(){var a=c("range")(0,5).map(function(a){return h.jsx(d("CometHScroll.react").Child,{children:h.jsx(c("EntityRecommendationsUnitCardGlimmer.react"),{index:a})},a)});return h.jsxs("div",{className:"dati1w0a e5nlhep0 hv4rvrfc pybr56ya aov4n071 ibutc8p7 l82x9zwi uo3d90p7 pw54ja7n ue3kfks5 t63ysoy8 linmgsc8 hop1g133 opwvks06",children:[h.jsxs(c("CometRow.react"),{paddingHorizontal:0,paddingTop:0,spacingVertical:0,children:[h.jsx(c("CometRowItem.react"),{children:h.jsx(c("BaseGlimmer.react"),{className:"k6hq67h2 jnigpg78 lsl2245n hqlzco19 o3c63hce lit7pgxp",index:0})}),h.jsx(c("CometRowItem.react"),{children:h.jsx(c("BaseGlimmer.react"),{className:"gjzvkazv tvmbv18p jnigpg78 lsl2245n hqlzco19 o3c63hce lit7pgxp",index:0})})]}),h.jsx(d("CometHScroll.react").Container,{cardWidth:{minWidth:i,type:"responsive"},gap:8,children:a})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("EntityRecommendationsUnitContext",["CometPlaceholder.react","CometRelay","EntityRecommendationsUnit.entrypoint","EntityRecommendationsUnitGlimmer.react","react","useCometRelayEntrypointContextualEnvironmentProvider"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useMemo,j=b.useState;e=function(){};var k=h.createContext({isRecommendationsUnitExpanded:!1,recommendationsUnitEntryPointContainer:null,setIsRecommendationsUnitExpanded:e,toggleIsRecommendationsUnitExpanded:e});function a(a){var b=a.children,e=a.entityID;a=c("useCometRelayEntrypointContextualEnvironmentProvider")();a=d("CometRelay").useEntryPointLoader(a,c("EntityRecommendationsUnit.entrypoint"));var f=a[0],g=a[1];a=j(f!=null);var l=a[0],m=a[1],n=i(function(){var a;return f!=null?h.jsx(c("CometPlaceholder.react"),{fallback:h.jsx(c("EntityRecommendationsUnitGlimmer.react"),{}),children:h.jsx(d("CometRelay").EntryPointContainer,{entryPointReference:f,props:{isExpanded:(a=l)!=null?a:!1}})}):null},[l,f]);a=i(function(){return{isRecommendationsUnitExpanded:l,recommendationsUnitEntryPointContainer:n,setIsRecommendationsUnitExpanded:function(a){a?(g({entityID:e}),m(!0)):m(!1)},toggleIsRecommendationsUnitExpanded:function(){g({entityID:e}),m(function(a){return!a})}}},[e,l,g,n]);return h.jsx(k.Provider,{value:a,children:b})}a.displayName=a.name+" [from "+f.id+"]";g.noOpFunc=e;g.EntityRecommendationsUnitContext=k;g.EntityRecommendationsUnitContextProvider=a}),98);
__d("useEntityRecommendationsUnitTriggerButton",["CometRelay","EntityRecommendationsUnitContext","react","useEntityRecommendationsUnitTriggerButton_node.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useContext;function a(a){var c=a.node$key;a=a.triggerButtonXStyle;c=d("CometRelay").useFragment(h!==void 0?h:h=b("useEntityRecommendationsUnitTriggerButton_node.graphql"),c);var e=j(d("EntityRecommendationsUnitContext").EntityRecommendationsUnitContext),f=e.isRecommendationsUnitExpanded,g=e.toggleIsRecommendationsUnitExpanded;return g===d("EntityRecommendationsUnitContext").noOpFunc?null:i.jsx(d("CometRelay").MatchContainer,{match:c.entity_recommendations,props:{isExpanded:f,onPress:function(){g()},xstyle:a}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometHeaderPrimaryActionBar.react",["CometErrorBoundary.react","CometLeftRailLayoutContext","CometPlaceholder.react","CometRelay","CometRouteRenderType","ProfileCometActionTrigger.react","ProfileCometHeaderActionBarButton.react","ProfileCometHeaderPrimaryActionBar_actor.graphql","react","stylex","useEntityRecommendationsUnitTriggerButton"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useContext,k={buttonContainer:{marginEnd:"cgat1ltu",marginStart:"kkf49tns",marginTop:"aov4n071"},buttonContainerHosted:{"@media (max-width: 960px)":{flexGrow:"p5xvc861",maxWidth:"rkd86xp9"}},buttonContainerUnhosted:{"@media (max-width: 500px)":{flexGrow:"au0mt55r",maxWidth:"d1b8y32t"}},root:{display:"j83agx80",flexWrap:"lhclo0ds",marginEnd:"dlv3wnog",marginStart:"rl04r1d5",marginTop:"sv5sfqaa","@media (min-width: 900px)":{justifyContent:"ekcuczi4"}}};function a(a){var e=a.actor;a=a.source;var f=a===void 0?"WWW_COMET_PROFILE":a;a=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometHeaderPrimaryActionBar_actor.graphql"),e);e=j(c("CometLeftRailLayoutContext"));var g=d("CometRouteRenderType").useIsHosted(),l=e||g;e=c("useEntityRecommendationsUnitTriggerButton")({node$key:a,triggerButtonXStyle:[k.buttonContainer,l?k.buttonContainerHosted:k.buttonContainerUnhosted]});if(a==null)return null;g=a.primaryActions;if((g==null?void 0:g.length)===0)return null;a=i.jsx(i.Fragment,{children:g.map(function(a,b){return i.jsx("div",{className:c("stylex")(k.buttonContainer,l?k.buttonContainerHosted:k.buttonContainerUnhosted),children:i.jsx(c("ProfileCometHeaderActionBarButton.react"),{action:a,actionBarSlot:b+1,disabled:!0,labelIsHidden:!1})},b)})});return i.jsx(c("CometErrorBoundary.react"),{children:i.jsx("div",{className:c("stylex")(k.root),"data-testid":void 0,children:i.jsxs(c("CometPlaceholder.react"),{fallback:a,children:[g.map(function(a,b){return i.jsx("div",{className:c("stylex")(k.buttonContainer,l?k.buttonContainerHosted:k.buttonContainerUnhosted),children:i.jsx(c("CometErrorBoundary.react"),{children:i.jsx(c("ProfileCometActionTrigger.react"),{action:a,source:f,children:function(d){d.memberModerations;d=babelHelpers.objectWithoutPropertiesLoose(d,["memberModerations"]);return i.jsx(c("ProfileCometHeaderActionBarButton.react"),babelHelpers["extends"]({},d,{action:a,actionBarSlot:b+1,labelIsHidden:!1,source:f}))}})})},b)}),e]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useProfileCometFacepileItems",["CometRelay","actorHovercardContainer","useProfileCometFacepileItems_users.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,e){a=d("CometRelay").useFragment(h!==void 0?h:h=b("useProfileCometFacepileItems_users.graphql"),a);return a.map(function(a){var b,d;b=(b=a.profile_picture)==null?void 0:b.uri;if(b==null)return null;var f=a==null?void 0:a.id;d=(d=(d=e)!=null?d:a.url)!=null?d:"";a=a.name;return{alt:(a=a)!=null?a:void 0,containerComponent:c("actorHovercardContainer")(f),linkProps:d?{url:d}:void 0,source:{uri:b}}}).filter(Boolean)}g["default"]=a}),98);
__d("CometTextColorEntityRenderer",["CometTextColorEntityRenderer_entity.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");h!==void 0?h:h=b("CometTextColorEntityRenderer_entity.graphql");a=function(a,b){b=b.hex_rgb_color_with_pound_key;return b==null?a:i.jsx("span",{style:{color:b},children:a})};g["default"]=a}),98);