function showDetails(titleId, detailId) {
    let allTitles = document.getElementsByClassName("title");
    let allDetails = document.getElementsByClassName("expDetails");

    for (let i=0; i < allTitles.length; i++) {
        allTitles[i].style.backgroundColor = "";
        allTitles[i].style.color = "";
        allTitles[i].classList.remove('selected');
    }

    for (let i=0; i < allDetails.length; i++) {
        allDetails[i].style.display = 'none';
    }

    let selectedTitle = document.getElementById(titleId);
    selectedTitle.style.backgroundColor = "";
    selectedTitle.style.color = "";
    selectedTitle.classList.add('selected');

    let selectedDetail = document.getElementById(detailId);
    selectedDetail.style.display = 'block';
}
window.onload = function() {
    showDetails('title1', 'details1');
}