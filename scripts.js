function toggleProjectDetails(id) {
    const projectDetails = document.getElementById(id);
    if (projectDetails.style.display === "block") {
        projectDetails.style.display = "none";
    } else {
        projectDetails.style.display = "block";
    }
}
