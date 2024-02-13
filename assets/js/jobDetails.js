function showDetails(titleId, detailId) {
    let allTitles = document.querySelectorAll(".title");
    let allDetails = document.querySelectorAll(".expDetails");

    allTitles.forEach(title => {
        title.style.backgroundColor = "";
        title.style.color = "";
        title.classList.remove('selected');
    });

    allDetails.forEach(detail => {
        detail.style.display = 'none';
    });

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
