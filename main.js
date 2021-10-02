const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event){
    if(event.code === "Enter"){
        search();
    }
});
function search(){
    const input = searchInput.value;
    window.location.href="https://www.google.com/search?q=" + input + "&oq=" + input + "&aqs=chrome..69i57j46i433i512j0i433i512j46i433i512j0i512l2j0i433i512j46i512j0i433i512j0i457i512.1745j0j15&sourceid=chrome&ie=UTF-8";
}