console.log("Script runninr....")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburg').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');//ham lagi to hathe  or viseversa
    if( document.querySelector('.sidebar').classList.contains('sidebargo')){
         document.querySelector('.ham').style.display = 'inline'
         document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline'

        }, 350);
         
        
    }

})