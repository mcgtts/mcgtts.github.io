(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});var r=a(7),i=a.n(r),n=a(0),s=a.n(n),o=a(157),l=a(204),c=a(179),d=a(180),u=a(163),A=(a(240),function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return s.a.createElement(c.a,{location:this.props.location,title:t},s.a.createElement(d.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),s.a.createElement(l.a,null),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return s.a.createElement("div",{key:t.fields.slug},s.a.createElement("h3",{style:{marginBottom:Object(u.a)(.25)}},s.a.createElement(o.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),s.a.createElement("small",null,t.frontmatter.date),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(s.a.Component));t.default=A;var f="1623555389"},157:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return A}),a.d(t,"StaticQuery",function(){return f});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(155),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(164),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(34);a.d(t,"parsePath",function(){return u.a});var A=i.a.createContext({}),f=function(e){return i.a.createElement(A.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},163:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var r=a(209),i=a.n(r),n=a(210),s=a.n(n);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new i.a(s.a);var l=o.rhythm,c=o.scale},164:function(e,t,a){var r;e.exports=(r=a(178))&&r.default||r},178:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},179:function(e,t,a){"use strict";a(33);var r=a(7),i=a.n(r),n=a(0),s=a.n(n),o=a(157),l=a(163);a(211);var c=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,i=t.children;return e="/"===a.pathname?s.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},s.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):s.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(l.a)(1)}},s.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(28),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},e,i,s.a.createElement("footer",null,"© 2018, Built with ",s.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(s.a.Component);t.a=c},180:function(e,t,a){"use strict";var r=a(181),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(212),c=a.n(l),d=a(157);function u(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,o=e.title;return n.a.createElement(d.StaticQuery,{query:A,render:function(e){var r=t||e.site.siteMetadata.description;return n.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:o},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:r}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var A="1025518380"},181:function(e){e.exports={data:{site:{siteMetadata:{title:"gtts的博客",description:"人生没有白走的路，每一步都算数",author:"gtts"}}}}},204:function(e,t,a){"use strict";a(205);var r=a(207),i=a(0),n=a.n(i),s=a(157),o=a(208),l=a.n(o),c=a(163);var d="2452627939";t.a=function(){return n.a.createElement(s.StaticQuery,{query:d,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(1)}},n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"}}),n.a.createElement("p",null,"人生没有白走的路，每一步都算数",n.a.createElement("br",null)," ",n.a.createElement("a",{href:"https://www.github.com/"+r.github},"我的github")))},data:r})}},205:function(e,t,a){"use strict";a(206)("fixed",function(e){return function(){return e(this,"tt","","")}})},206:function(e,t,a){var r=a(11),i=a(24),n=a(16),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},207:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQBBQb/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAAB6PK9DMNbCZEFcG//xAAZEAADAQEBAAAAAAAAAAAAAAAAAQIEAxD/2gAIAQEAAQUC11S453c9RkVPjM6SZ//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAEDAQE/AWP/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAdEAABBAIDAAAAAAAAAAAAAAABAhARIQASIjFB/9oACAEBAAY/AuHeJgqtzpCr8cwA3//EABsQAQACAwEBAAAAAAAAAAAAAAERIQAQMUFR/9oACAEBAAE/IU1pPT5kqr2JUa45OQG18LmqDgKCQaNf/9oADAMBAAIAAwAAABCMz/z/xAAXEQEBAQEAAAAAAAAAAAAAAAABECEx/9oACAEDAQE/EABsOT//xAAYEQACAwAAAAAAAAAAAAAAAAABEBEhMf/aAAgBAgEBPxC5R1f/xAAcEAEBAAMAAwEAAAAAAAAAAAABEQAxQRAhYVH/2gAIAQEAAT8QtkQOw6n3J0Mr9L6u89ZfpAd3hkBvo1DqvO+EqOC4QNcgVr+eP//Z",width:50,height:50,src:"/static/ece4cf964bea4a5a974e06fa1fac2005/d2d31/profile-pic.jpg",srcSet:"/static/ece4cf964bea4a5a974e06fa1fac2005/d2d31/profile-pic.jpg 1x,\n/static/ece4cf964bea4a5a974e06fa1fac2005/0b804/profile-pic.jpg 1.5x,\n/static/ece4cf964bea4a5a974e06fa1fac2005/753c3/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"gtts",social:{github:"mcgtts"}}}}}},208:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(53)),o=r(a(202)),l=r(a(203)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A={},f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},p=[];var h=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+r+i+"<img "+o+l+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=c.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,i=e.onError,n=(0,o.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},n,{onLoad:r,onError:i,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});m.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,o=f(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:f(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,A=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.Tag,E="boolean"==typeof y?"lightgray":y,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,A),v=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),S={title:t,alt:this.state.isVisible?"":a,style:w,className:f};if(p){var j=p;return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),j.base64&&c.default.createElement(m,(0,l.default)({src:j.base64},S)),j.tracedSVG&&c.default.createElement(m,(0,l.default)({src:j.tracedSVG},S)),E&&c.default.createElement(b,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,j.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),c.default.createElement("source",{srcSet:j.srcSet,sizes:j.sizes}),c.default.createElement(m,{alt:a,title:t,src:j.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},j))}}))}if(h){var R=h,x=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},n);return"inherit"===n.display&&delete x.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&c.default.createElement(m,(0,l.default)({src:R.base64},S)),R.tracedSVG&&c.default.createElement(m,(0,l.default)({src:R.tracedSVG},S)),E&&c.default.createElement(b,{title:t,style:{backgroundColor:E,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&c.default.createElement("picture",null,R.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),c.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),c.default.createElement(m,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:b,sizes:E,fixed:b,fluid:E,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string};var w=y;t.default=w}}]);
//# sourceMappingURL=component---src-pages-index-js-a17a4ba17f1c7102b320.js.map