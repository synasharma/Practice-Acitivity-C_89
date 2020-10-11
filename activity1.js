var score=0;

function updatescore()
{
    score=score+1;
    document.getElementById("SCORE").innerHTML="The Score is "+score;
}

function savescore()
{
    localStorage.setItem("scorekey",score);
}

function nextpage()
{
    window.location="activity_2.html";
}