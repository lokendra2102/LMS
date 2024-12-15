## TO-DO:


### Active:
---
- Add content,images. **** <br>
- Add pricing to all the courses with premium true <br>
- Integrate payment/UPI number for application. ************ <br>
- Remove all images from the build and replace it with **github/images/ + {filename.extension}** *Note: made github url available globally. kindly pass the "github" as parameter to component refer:Main.jsx line:142* <br>
- Add author content if necessary else remove it <br>
- Add ***name*** attribute to all the button tags where it's used in all pages. *refer Card.jsx line:143* <br>
- Migrate Validation Code Snippets Images To Code Level Snippets (Pages) ** <br>
- Remove concepts which are not declared. <br>
- Add all the premium content. <br>
- Add all the topics name in category mapping in content.js. (id : "Location where it present. i.e., cat_enhancement -> sub_otp") <br>
- Add all the topics name in searchcomponent in content.js <br>
- Add ADSENSE Integration To webapp. **** (Implementation Pending) <br>

## Completed:
---
- Migrated backend to catalyst. <br>
- Add Favourites, Cart, Bought Features in backend ***** {fav:0, cart:1, bought:2, !fav:9} <br>
- Add MCQ Pagination *** <br>
- Hosting. (Backend - Catalyst, Frontend - Firebase) <br>
	**Backend Endpoint** = *[`Backend_URL`](https://project-rainfall-828851007.development.catalystserverless.com/server/pega/)* (Limits 30 requests per minute for each user. Incase of more handling need to be specified) <br>
	**Frontend Endpoint** = *[`Frontend_URL1`](https://safe-1efcc.web.app/) [`Frontend_URL2`](https://pegahash.web.app/)* <br>
- Added Toasts for Error & Req events for API requests. <br>
- Completed About,contact <br>
- JSONObject encryption in local storage ***** <br>
- Added Premium Configuration And Modal for Users <br>
- Migrate the dots(.) in id's to underscore(_) in ***content.js***<br>
- Migrate Validation Code Snippets Images To Code Level Snippets (Functionality) ** <br>
- Migrate all the images to cloud ** <br>
- Project Gallery in all the pages is looped with same image repeatedly. Modify it asasp. **(refer commmit 198b5718c70ff7f50d3b0bc0e8ad7bb36aa03627)** <br>
- Project Gallery - Remove the videos tab in pages which don't have videos. **(refer commmit 198b5718c70ff7f50d3b0bc0e8ad7bb36aa03627)** <br>
- Add dummy course reviews for all pages else remove it. <br>
- Add "P" or any unique char followed by underscore ("_") to all the ID's in content.js (as number is not a valid query selector). <br>

## Future Works:
---
- Take individual svg of icons used and move it to either cloud or local build depending upon size. <br>