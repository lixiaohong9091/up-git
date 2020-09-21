(function(window,undefined){
  
  function _invoke = function(action,data,callback){

    let url = 'weixin://';

    url+=action?;

    for(var i in data){
      if(data.hasOwnProperty(i))

      url+=i=data[i]+'&''
    }
    let callbackName
    if(typeof callback === 'string'){
      callbackName = callback
    }else{
      callbackName = action + Date.now();
      window[callbackName] = callback
    }
    url+=callback=callbackName

    // 触发  iframe  url定位url



  }


  window.invoke = {
    share : function(data, callback){
      _invoke('share', data, callback)

    },
    login : function(data, callback){
      _invoke('login', data, callback)
      
    }
  }

})(window)