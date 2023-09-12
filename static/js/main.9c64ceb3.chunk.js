(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(4),n=c.n(s),i=(c(9),c(10),c(2)),r=(c(11),[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}]),l=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],d=c(0),o=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var t=l.find((function(t){return t.id===e.categoryId})),c=t?r.find((function(e){return e.id===t.ownerId})):null;return{id:e.id,name:e.name,category:t?"".concat(t.icon," - ").concat(t.title):"Unknown Category",owner:c||{name:"Unknown User",gender:"unknown"}}})),j=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(null),j=Object(i.a)(n,2),h=j[0],u=j[1],b=Object(a.useState)(""),m=Object(i.a)(b,2),x=m[0],O=m[1],f=function(e){u(e),console.log(e,h)},p=function(e){O(e)},y=function(){s(null),u(null),O("")},g=o.filter((function(e){var t=!c||e.owner.id===c,a=!h||e.category.id===h,s=!x||e.name.toLowerCase().includes(x.toLowerCase());return t&&a&&s}));return Object(d.jsx)("div",{className:"section",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"title",children:"Product Categories"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsxs)("nav",{className:"panel",children:[Object(d.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(d.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(d.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",className:c?"":"is-active",onClick:function(){return y()},children:"All"}),r.map((function(e){return Object(d.jsx)("a",{"data-cy":"FilterUser-".concat(e.id),href:"#/",className:c===e.id?"is-active":"",onClick:function(){return t=e.id,void s(t);var t},children:e.name},e.id)}))]}),Object(d.jsx)("div",{className:"panel-block",children:Object(d.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:x,onChange:function(e){return p(e.target.value)}}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Object(d.jsx)("span",{className:"icon is-right",children:""!==x&&Object(d.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:function(){return p("")}})})]})}),Object(d.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(d.jsx)("a",{href:"#/","data-cy":"AllCategories",className:h?"button is-success mr-6 is-outlined":"is-active button is-success mr-6 is-outlined",onClick:function(){return f(null)},children:"All Categories"}),l.map((function(e){return Object(d.jsx)("a",{"data-cy":"Category-".concat(e.id),className:h===e.id?"button mr-2 my-1 is-info is-active":"button mr-2 my-1 is-info",href:"#/",onClick:function(){return f(e.id)},children:e.title},e.id)}))]}),Object(d.jsx)("div",{className:"panel-block",children:Object(d.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:y,children:"Reset all filters"})})]})}),Object(d.jsx)("div",{className:"box table-container",children:0===g.length?Object(d.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}):Object(d.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:Object(d.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(d.jsx)("a",{href:"#/",children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(d.jsx)("th",{children:Object(d.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(d.jsx)("a",{href:"#/",children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(d.jsx)("th",{children:Object(d.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(d.jsx)("a",{href:"#/",children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(d.jsx)("th",{children:Object(d.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(d.jsx)("a",{href:"#/",children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(d.jsx)("tbody",{children:g.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"Product",children:[Object(d.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(d.jsx)("td",{"data-cy":"ProductName",children:e.name}),Object(d.jsx)("td",{"data-cy":"ProductCategory",children:e.category}),Object(d.jsx)("td",{"data-cy":"ProductUser",className:"m"===e.owner.sex?"has-text-link":"has-text-danger",children:e.owner.name})]},e.id)}))})]})})]})})};n.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.9c64ceb3.chunk.js.map