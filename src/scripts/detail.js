import {buildFromTemplate} from "./data";

document.addEventListener('DOMContentLoaded', () => {
    if (typeof idToInsert !== "undefined" && typeof recipesFrom !== "undefined") {
        const location = document.location.href.split('/')
            .splice(-1, 1).toString();
        buildFromTemplate(location, recipesFrom, idToInsert);
    }
});
