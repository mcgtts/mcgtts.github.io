(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return b});a(33);var n=a(7),r=a.n(n),A=a(0),i=a.n(A),o=a(157),c=(a(277),a(278)),s=a.n(c),l=a(279),u=a.n(l),d=a(204),p=a(179),m=a(180),g=a(163),f="undefined"!=typeof window?a(290):void 0,h={clientID:"0c0154dd7c8dad82151d",clientSecret:"5e67b21b04e68147903b49032581cbb7fa4a7624",repo:"mcgtts.github.io",owner:"mcgtts",admin:"mcgtts",distractionFreeMode:!0},E=function(t){function e(e){var a;return(a=t.call(this,e)||this).data=a.props.data,a}r()(e,t);var a=e.prototype;return a.componentDidMount=function(){var t=this.data.markdownRemark,e=t.frontmatter.date,a=t.frontmatter.title,n=t.id.id,r=a;if(s()(e).isAfter("2018-03-01"))r=a+" | Calpa's Blog",s()(e).isBefore("2018-09-09")&&(n=u()(a));else{var A=getPath(),i="/"===A[A.length-1]?"":"/";n=""+url+A+i}new f(Object.assign({},h,{title:r,id:n})).render("gitalk-container")},a.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,r=a.next;return i.a.createElement(p.a,{location:this.props.location,title:e},i.a.createElement(m.a,{title:t.frontmatter.title,description:t.excerpt}),i.a.createElement("h1",null,t.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(g.b)(-.2),{display:"block",marginBottom:Object(g.a)(1),marginTop:Object(g.a)(-1)})},t.frontmatter.date),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),i.a.createElement("hr",{style:{marginBottom:Object(g.a)(1)}}),i.a.createElement(d.a,null),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,n&&i.a.createElement(o.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),i.a.createElement("li",null,r&&i.a.createElement(o.Link,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))),i.a.createElement("div",{id:"gitalk-container",className:"col-sm-8 col-12 order-12"}))},e}(i.a.Component);e.default=E;var b="1335092778"},157:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return m}),a.d(e,"StaticQueryContext",function(){return d}),a.d(e,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),A=a(4),i=a.n(A),o=a(155),c=a.n(o);a.d(e,"Link",function(){return c.a}),a.d(e,"withPrefix",function(){return o.withPrefix}),a.d(e,"navigate",function(){return o.navigate}),a.d(e,"push",function(){return o.push}),a.d(e,"replace",function(){return o.replace}),a.d(e,"navigateTo",function(){return o.navigateTo});var s=a(164),l=a.n(s);a.d(e,"PageRenderer",function(){return l.a});var u=a(34);a.d(e,"parsePath",function(){return u.a});var d=r.a.createContext({}),p=function(t){return r.a.createElement(d.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},163:function(t,e,a){"use strict";a.d(e,"a",function(){return c}),a.d(e,"b",function(){return s});var n=a(209),r=a.n(n),A=a(210),i=a.n(A);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var o=new r.a(i.a);var c=o.rhythm,s=o.scale},164:function(t,e,a){var n;t.exports=(n=a(178))&&n.default||n},178:function(t,e,a){"use strict";a.r(e);a(33);var n=a(0),r=a.n(n),A=a(4),i=a.n(A),o=a(55),c=a(2),s=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(o.a,Object.assign({location:e,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},179:function(t,e,a){"use strict";a(33);var n=a(7),r=a.n(n),A=a(0),i=a.n(A),o=a(157),c=a(163);a(211);var s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,a=e.location,n=e.title,r=e.children;return t="/"===a.pathname?i.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})},i.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(c.a)(1)}},i.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(28),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},t,r,i.a.createElement("footer",null,"© 2018, Built with ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},e}(i.a.Component);e.a=s},180:function(t,e,a){"use strict";var n=a(181),r=a(0),A=a.n(r),i=a(4),o=a.n(i),c=a(212),s=a.n(c),l=a(157);function u(t){var e=t.description,a=t.lang,r=t.meta,i=t.keywords,o=t.title;return A.a.createElement(l.StaticQuery,{query:d,render:function(t){var n=e||t.site.siteMetadata.description;return A.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=u;var d="1025518380"},181:function(t){t.exports={data:{site:{siteMetadata:{title:"gtts的博客",description:"人生没有白走的路，每一步都算数",author:"gtts"}}}}},204:function(t,e,a){"use strict";a(205);var n=a(207),r=a(0),A=a.n(r),i=a(157),o=a(208),c=a.n(o),s=a(163);var l="2452627939";e.a=function(){return A.a.createElement(i.StaticQuery,{query:l,render:function(t){var e=t.site.siteMetadata,a=e.author,n=e.social;return A.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(1)}},A.a.createElement(c.a,{fixed:t.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(s.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"}}),A.a.createElement("p",null,"人生没有白走的路，每一步都算数",A.a.createElement("br",null)," ",A.a.createElement("a",{href:"https://www.github.com/"+n.github},"我的github")))},data:n})}},207:function(t){t.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQBBQb/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAAB6PK9DMNbCZEFcG//xAAZEAADAQEBAAAAAAAAAAAAAAAAAQIEAxD/2gAIAQEAAQUC11S453c9RkVPjM6SZ//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAEDAQE/AWP/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAdEAABBAIDAAAAAAAAAAAAAAABAhARIQASIjFB/9oACAEBAAY/AuHeJgqtzpCr8cwA3//EABsQAQACAwEBAAAAAAAAAAAAAAERIQAQMUFR/9oACAEBAAE/IU1pPT5kqr2JUa45OQG18LmqDgKCQaNf/9oADAMBAAIAAwAAABCMz/z/xAAXEQEBAQEAAAAAAAAAAAAAAAABECEx/9oACAEDAQE/EABsOT//xAAYEQACAwAAAAAAAAAAAAAAAAABEBEhMf/aAAgBAgEBPxC5R1f/xAAcEAEBAAMAAwEAAAAAAAAAAAABEQAxQRAhYVH/2gAIAQEAAT8QtkQOw6n3J0Mr9L6u89ZfpAd3hkBvo1DqvO+EqOC4QNcgVr+eP//Z",width:50,height:50,src:"/static/ece4cf964bea4a5a974e06fa1fac2005/d2d31/profile-pic.jpg",srcSet:"/static/ece4cf964bea4a5a974e06fa1fac2005/d2d31/profile-pic.jpg 1x,\n/static/ece4cf964bea4a5a974e06fa1fac2005/0b804/profile-pic.jpg 1.5x,\n/static/ece4cf964bea4a5a974e06fa1fac2005/753c3/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"gtts",social:{github:"mcgtts"}}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-bf58f249565c42f8bc06.js.map