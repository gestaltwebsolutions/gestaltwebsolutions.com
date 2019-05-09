(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c});a(176);var r=a(177),i=a(0),n=a.n(i),s=a(161),A=a.n(s),o=a(159),l=a(157);function c(){var e=r.data,t=e.jeremy,a=e.ryan;return n.a.createElement(o.a,null,n.a.createElement(l.a,{title:"About"}),n.a.createElement("h1",{className:"text-xl"},"Meet the Team"),n.a.createElement("div",{className:"flex justify-around"},n.a.createElement(d,{name:"Jeremy Liberman",position:"Founder, Designer",bio:"\n            Jeremy has been writing software professionally for over a decade.\n            He has experience in a wide array of languages, frameworks, and\n            programming paradigms.\n          ",github:"mrleebo",twitter:"mrleebo",file:t}),n.a.createElement(d,{name:"Ryan Johnson",position:"Founder, Engineer",bio:"\n            Ryan likes a lot of cayenne peppers in his enchiladas.\n          ",github:"ryanxjohnson",file:a,even:!0})))}function d(e){var t=e.name,a=e.position,r=e.bio,i=e.file,s=e.even,o=e.github,l=e.twitter,c=s?"teal":"orange";return n.a.createElement("div",{className:"w-1/3 m-2 shadow-lg rounded-b-lg border-t-2 border-"+c+"-darker my-20 bg-"+c+"-lightest text-"+c+"-darker pb-1"},n.a.createElement("div",{className:"mx-auto rounded-full bg-"+c+"-darker -mt-16 p-px",style:{width:150,height:150}},n.a.createElement(A.a,{fluid:i.childImageSharp.fluid,className:"rounded-full"})),n.a.createElement("div",{className:"w-2/3 mx-auto"},n.a.createElement("div",{className:"float-right"},o&&n.a.createElement(u,{href:"https://github.com/"+o,color:c,icon:"github"}),l&&n.a.createElement(u,{href:"https://twitter.com/"+l,color:c,icon:"twitter"})),n.a.createElement("div",{className:"text-center text-"+c+"-darker"},n.a.createElement("h2",{className:"text-lg mb-2"},t),n.a.createElement("span",{className:"ml-4 text-sm opacity-75"},a)),n.a.createElement("p",{className:"text-"+c+"-darker text-sm tracking-wide font-serif text-justify"},r)))}function u(e){var t=e.href,a=e.icon,r=e.color;return n.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:"hover:text-"+r+" mr-1 opacity-50"},n.a.createElement("i",{className:"fab fa-"+a}))}},152:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),A=a(33),o=a.n(A);a.d(t,"a",function(){return o.a});a(153);var l=i.a.createContext({}),c=function(e){return i.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},153:function(e,t,a){var r;e.exports=(r=a(156))&&r.default||r},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Gestalt Web Solutions LLC"}}}}},156:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),A=a(54),o=a(2),l=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(A.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},157:function(e,t,a){"use strict";var r=a(158),i=a(0),n=a.n(i),s=a(4),A=a.n(s),o=a(154),l=a.n(o),c=a(152);function d(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,A=e.title;return n.a.createElement(c.b,{query:u,render:function(e){var r=t||e.site.siteMetadata.description;return n.a.createElement(l.a,{htmlAttributes:{lang:a},title:A,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:A},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:A},{name:"twitter:description",content:r}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})},data:r})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:A.a.string,lang:A.a.string,meta:A.a.array,keywords:A.a.arrayOf(A.a.string),title:A.a.string.isRequired},t.a=d;var u="1025518380"},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Gestalt Web Solutions LLC",description:"Under Construction...",author:"@MrLeebo"}}}}},159:function(e,t,a){"use strict";var r=a(155),i=a(0),n=a.n(i),s=a(4),A=a.n(s),o=a(154),l=a(152);function c(e){var t=e.siteTitle;return n.a.createElement("div",{className:"border-teal-lighter border-t-4"},n.a.createElement("nav",{className:"flex items-center justify-between flex-wrap p-6 font-sans"},n.a.createElement("div",{className:"mr-6 text-teal-dark hover:text-teal-light"},n.a.createElement(l.a,{to:"/"},t)),n.a.createElement("div",{className:"w-full block lg:flex lg:items-center lg:w-auto text-teal justify-end"},n.a.createElement("div",{className:"text-sm"},n.a.createElement(d,{to:"/services"},"Services"),n.a.createElement(d,{to:"/about"},"About"),n.a.createElement(d,{to:"/contact"},"Contact")))))}function d(e){var t=e.to,a=e.children;return n.a.createElement(l.a,{to:t,className:"block mt-4 lg:inline-block lg:mt-0 hover:text-teal-light mr-4",activeClassName:"border-b-2 border-teal hover:border-teal-light",children:a})}c.propTypes={siteTitle:A.a.string.isRequired};a(160);function u(e){var t=e.children,a=e.wrap,i=r.data.site;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.Helmet,null,n.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.8.2/css/brands.css",integrity:"sha384-i2PyM6FMpVnxjRPi0KW/xIS7hkeSznkllv+Hx/MtYDaHA5VcF0yL3KVlvzp8bWjQ",crossorigin:"anonymous"}),n.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.8.2/css/solid.css",integrity:"sha384-ioUrHig76ITq4aEJ67dHzTvqjsAP/7IzgwE7lgJcg2r7BRNGYSK0LwSmROzYtgzs",crossorigin:"anonymous"})," ",n.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.8.2/css/fontawesome.css",integrity:"sha384-sri+NftO+0hcisDKgr287Y/1LVnInHJ1l+XC7+FOabmTTIK0HnE2ID+xxvJ21c5J",crossorigin:"anonymous"})),n.a.createElement(c,{siteTitle:i.siteMetadata.title}),a,n.a.createElement("div",{className:"container mx-auto px4 pb6"},t))}a.d(t,"a",function(){return u}),u.propTypes={children:A.a.node.isRequired,wrap:A.a.node},u.defaultProps={wrap:null}},161:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(35)),A=r(a(74)),o=r(a(75)),l=r(a(0)),c=r(a(162)),d=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},u=Object.create({}),f=function(e){var t=d(e),a=t.fluid?t.fluid.src:t.fixed.src;return u[a]||!1},p=new WeakMap;var m=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),p.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),p.set(e,t)),function(){a.unobserve(e),p.delete(e)}},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+i+t+s+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=l.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,d=(0,A.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return l.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},d,{onLoad:s,onError:c,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});g.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var E=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,A=f(t);!A&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var o=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:n,hasNoScript:o,seenBefore:A},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=m(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),a=t.fluid?t.fluid.src:t.fixed.src,u[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,A=void 0===s?{}:s,c=e.placeholderStyle,u=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,m=e.fixed,E=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,w=e.itemProp,v=this.state.imgLoaded||!1===this.state.fadeIn,j=!0===this.state.fadeIn&&!this.state.imgCached,B=(0,o.default)({opacity:v?1:0,transition:j?"opacity "+b+"ms":"none"},A),S="boolean"==typeof E?"lightgray":E,x={transitionDelay:b+"ms"},R=(0,o.default)({opacity:this.state.imgLoaded?0:1},j&&x,A,u),N={title:t,alt:this.state.isVisible?"":a,style:R,className:f};if(p){var Q=p;return l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(Q.srcSet)},l.default.createElement(y,{style:{width:"100%",paddingBottom:100/Q.aspectRatio+"%"}}),S&&l.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&x)}),Q.base64&&l.default.createElement(g,(0,o.default)({src:Q.base64},N)),Q.tracedSVG&&l.default.createElement(g,(0,o.default)({src:Q.tracedSVG},N)),this.state.isVisible&&l.default.createElement("picture",null,Q.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:Q.srcSetWebp,sizes:Q.sizes}),l.default.createElement(g,{alt:a,title:t,sizes:Q.sizes,src:Q.src,crossOrigin:this.props.crossOrigin,srcSet:Q.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,o.default)({alt:a,title:t},Q))}}))}if(m){var I=m,L=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:I.width,height:I.height},n);return"inherit"===n.display&&delete L.display,l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:L,ref:this.handleRef,key:"fixed-"+JSON.stringify(I.srcSet)},S&&l.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:S,width:I.width,opacity:this.state.imgLoaded?0:1,height:I.height},j&&x)}),I.base64&&l.default.createElement(g,(0,o.default)({src:I.base64},N)),I.tracedSVG&&l.default.createElement(g,(0,o.default)({src:I.tracedSVG},N)),this.state.isVisible&&l.default.createElement("picture",null,I.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),l.default.createElement(g,{alt:a,title:t,width:I.width,height:I.height,sizes:I.sizes,src:I.src,crossOrigin:this.props.crossOrigin,srcSet:I.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,o.default)({alt:a,title:t},I))}}))}return null},t}(l.default.Component);E.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var b=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),y=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});E.propTypes={resolutions:b,sizes:y,fixed:b,fluid:y,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var w=E;t.default=w},162:function(e,t,a){e.exports=a(163)()},163:function(e,t,a){"use strict";var r=a(164);function i(){}e.exports=function(){function e(e,t,a,i,n,s){if(s!==r){var A=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw A.name="Invariant Violation",A}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return a.checkPropTypes=i,a.PropTypes=a,a}},164:function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},176:function(e,t,a){var r=a(24).f,i=Function.prototype,n=/^\s*function ([^ (]*)/;"name"in i||a(18)&&r(i,"name",{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(e){return""}}})},177:function(e){e.exports={data:{jeremy:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMEBQH/xAAWAQEBAQAAAAAAAAAAAAAAAAABAwL/2gAMAwEAAhADEAAAAeri6EJ6qiS/pHWQUP/EABsQAAICAwEAAAAAAAAAAAAAAAABERIDMUEy/9oACAEBAAEFAnkTUVLNj1SSanOZPX//xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAwEBPwEj/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAQMf/aAAgBAgEBPwFcexf/xAAbEAABBAMAAAAAAAAAAAAAAAAAARARMSAhIv/aAAgBAQAGPwLlS5KbZGH/xAAbEAADAQEAAwAAAAAAAAAAAAAAAREhMRBRkf/aAAgBAQABPyFxlfbQ2Xq8smiUTSfTrIaaecE9RYy48MH/2gAMAwEAAgADAAAAEJQwP//EABgRAAMBAQAAAAAAAAAAAAAAAAABERAx/9oACAEDAQE/EEUILmf/xAAYEQEAAwEAAAAAAAAAAAAAAAAAAREhMf/aAAgBAgEBPxChae3EP//EABsQAQEAAwEBAQAAAAAAAAAAAAERACFBMZGh/9oACAEBAAE/EDcSOwDrMJen0j18yFQl3kLB40ebwZwFVbmkVGxwhYbd4qV2YqToP5n/2Q==",aspectRatio:1,src:"/static/1022c876017c9844de9813c967612f77/9067c/jeremy.jpg",srcSet:"/static/1022c876017c9844de9813c967612f77/9b664/jeremy.jpg 50w,\n/static/1022c876017c9844de9813c967612f77/f1b5a/jeremy.jpg 100w,\n/static/1022c876017c9844de9813c967612f77/9067c/jeremy.jpg 200w,\n/static/1022c876017c9844de9813c967612f77/792e8/jeremy.jpg 300w,\n/static/1022c876017c9844de9813c967612f77/b9fa4/jeremy.jpg 400w,\n/static/1022c876017c9844de9813c967612f77/ec650/jeremy.jpg 460w",sizes:"(max-width: 200px) 100vw, 200px"}}},ryan:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAYABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQFAgP/xAAVAQEBAAAAAAAAAAAAAAAAAAACAf/aAAwDAQACEAMQAAABhp8tEq92pinItMI//8QAGxAAAwACAwAAAAAAAAAAAAAAAQIDABEEEjL/2gAIAQEAAQUCaz0MhYZB3ecpkUC6MtCfITqQwyPj/8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQMBAT8BI//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB0QAQABAwUAAAAAAAAAAAAAAAEAAhESECEiMUH/2gAIAQEABj8Cuvfk2g102ZymWV4BBNf/xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMUFREP/aAAgBAQABPyFctdOJ66tZ+JRvZwGGZQh5DYNHs0LHk0m7gdxM9n//2gAMAwEAAgADAAAAEJT4fP/EABYRAQEBAAAAAAAAAAAAAAAAAAEAIf/aAAgBAwEBPxAjDkt//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAQMf/aAAgBAgEBPxBYnuf/xAAeEAEAAgMAAgMAAAAAAAAAAAABABEhMUFRgZHB8f/aAAgBAQABPxDDNg7BnQEvF2AhQ+mMxRRLC67UfA1DJf5BdEKc6+I1lajvz9wtlN8XuLASOZhRlUgKUn//2Q==",aspectRatio:1,src:"/static/cebaba07bda3b7cf29b2bdb458f6e222/17f0b/ryan.jpg",srcSet:"/static/cebaba07bda3b7cf29b2bdb458f6e222/9b664/ryan.jpg 50w,\n/static/cebaba07bda3b7cf29b2bdb458f6e222/f1b5a/ryan.jpg 100w,\n/static/cebaba07bda3b7cf29b2bdb458f6e222/17f0b/ryan.jpg 106w",sizes:"(max-width: 106px) 100vw, 106px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-about-js-a12402f35f66c197a206.js.map