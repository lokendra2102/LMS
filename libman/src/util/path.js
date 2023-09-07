const path = (pathname = "") => {
    let path = pathname;
    switch (pathname) {
        case "mock-drives":
            path = "Mock Drives";
            break;
        case "about":
            path = "About";
            break;
        case "contact":
            path = "Contact";
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
        data ={}
        Object.keys(categories).map(ele => {
            if(ele.startsWith("cat")){
                data[ele] = {
                    "id" : categories[ele].id, 
                    "name" : categories[ele].name, 
                    "desc" : categories[ele].desc,
                    "image" : categories[ele].image,
                    "isSub" : categories[ele].hasOwnProperty("sub"),
                    "isPremium" : categories[ele].Premium
                };
            }
        })
    }else if(isSub){
        data = categories[`sub_${path}`]
        data = Object.keys(data).map(ele => {
            return {
                "id" : data[ele].id, 
                "name" : data[ele].name, 
                "desc" : data[ele].desc,
                "image" : data[ele].image,
                "isSub" : data[ele].hasOwnProperty("sub"),
                "isPremium" : data[ele].Premium
            };
        })
    }
    return data
}

module.exports = {
    path, categoryContent
}