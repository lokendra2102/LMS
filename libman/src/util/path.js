const path = (pathname = "") => {
    let path = pathname;
    switch (pathname) {
        case "mock-drives":
            path = "Mock Drives";
            break;
        case "cssa":
            path = "CSSA Notes";
            break;
        case "csa":
            path = "CSA Notes";
            break;
        case "favourite":
            path = "Favourite";
            break;
        default:
            path = "Categories"
            break;
    }
    return path;
}

module.exports = {
    path
}