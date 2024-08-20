document.getElementById('perallelogram-button').addEventListener('click',function(){
    const base=document.getElementById('parallelogram-base').value
    const Base=parseFloat(base);
    const height=document.getElementById('parallelogram-height').value
    const Height=parseFloat(height);
    const Area=Base*Height;
    document.getElementById('Area-shown-space-perallelogram').innerText=Area;
})