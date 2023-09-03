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

const categoryContent = (path = "", isSub = false, categories) => {
    var data;
    if(path === ""){
        data = Object.keys(categories).map(ele => {
            return {
                "id" : categories[ele].id, 
                "name" : categories[ele].name, 
                "desc" : categories[ele].desc,
                "image" : categories[ele].image,
                "isSub" : categories[ele].hasOwnProperty("sub"),
                "isPremium" : categories[ele].Premium
            };
        })
    }else if(isSub){
        data = categories[`cat_${path}`].sub
        data = data.map(ele => {
            console.log(ele);
        })
    }
    return data
}

module.exports = {
    path, categoryContent
}