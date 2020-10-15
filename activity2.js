function getscore()
{
    score=localStorage.getItem("scorekey");
    document.getElementById("score").innerHTML="Score:"+score;
}
function back()
{
    window.location="activity_1.html"
}