function creatE (vnode){
   var tag = vnode.tag;
   var attrs = vnode.attrs || {};
   var children = vnode.children || [];
   if(!tag){
     return null;
   }

   // 创建元素
   var elem = document.createElement(tag);
   // 属性

   var attrsName;

   for(attrsName in attrs){
     if(attrs.hasOwnProperty(attrsName)){
      elem.setAttribute(attrsName,attrs[attrsName]);
     }
   }
   // 子元素
   children.forEach(function(child){
    elem.appendChild(creatE(child));
   })

   return elem

}

function updataChild(vnode,newVnode){

  var children = vnode.children || [];
  var newChildren = newVnode.children  || [];

  children.forEach(function(child,index){
     var   newChild = newChildren[index];
     if(!newChild){
       return null 
     }  

     if(child.tag === newChild.tag){
       updataChild(child,newChild)
     }else{
       repalceVnode(child,newChild)
     }
  })

}