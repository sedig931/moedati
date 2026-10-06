var ss3Interv ;
var ss3ActiveCardCount = 0 ;
const ss3RunEnterval = function(){
    ss3Interv = setInterval(()=>{
      if(ss3ActiveCardCount < 2) ++ss3ActiveCardCount;
      else ss3ActiveCardCount = 0;
      ss3ShvlView(String(ss3ActiveCardCount));  
    },4000);
};

const addEventToShuvlsBtn = function(){
    // ...
    document.querySelectorAll('.ss3-mouse-inout').forEach((shvBtn)=>{
      shvBtn.addEventListener('mouseenter',(e)=>{
        clearInterval(ss3Interv);
      });
    });

    document.querySelectorAll('.ss3-mouse-inout').forEach((shvBtn)=>{
      shvBtn.addEventListener('mouseout',(e)=>{
        ss3RunEnterval();
      });
    });
};

ss3RunEnterval();
