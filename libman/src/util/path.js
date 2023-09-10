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
                if(categories[ele].hasOwnProperty("Premium")){
                    data[ele].price = 45
                }
            }
        })
    }else if(isSub){
        data = {}
        Object.keys(categories[`sub_${path}`]).map(ele => {
            data[ele] = {
                "id" : categories[`sub_${path}`][ele].id, 
                "name" : categories[`sub_${path}`][ele].name, 
                "desc" : categories[`sub_${path}`][ele].desc,
                "image" : categories[`sub_${path}`][ele].image,
                "isSub" : categories[`sub_${path}`][ele].hasOwnProperty("sub"),
                "isPremium" : categories[`sub_${path}`][ele].Premium
            };
            if(categories[`sub_${path}`][ele].hasOwnProperty("Premium")){
                data[ele].price = 45
            }
        })
    }
    return data
}

module.exports = {
    path, categoryContent
}