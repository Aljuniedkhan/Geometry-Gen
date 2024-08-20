document.getElementById('rhombus-button').addEventListener('click',function(){
    const dimension1=document.getElementById('dimension1').value
    const Dimesnsion1=parseFloat(dimension1);
    const dimension2=document.getElementById('dimension2').value
    const Dimension2=parseFloat(dimension2);
    const Area=0.5*Dimesnsion1*Dimension2;
    document.getElementById('Area-shown-space-rhombus').innerText=Area;
})