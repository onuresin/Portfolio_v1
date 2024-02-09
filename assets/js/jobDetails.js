function showDetails(detailId) {
    let allDetails = document.getElementsByClassName("expDetails");

    for (let i=0; i < allDetails.length; i++) {
        allDetails[i].style.display = 'none';
    }

    let selectedDetail = document.getElementById(detailId);
    selectedDetail.style.display = 'block';
}
