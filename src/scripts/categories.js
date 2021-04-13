import {buildCategoryListSection, data} from "./data";

document.addEventListener('DOMContentLoaded', () => {
    buildCategoryListSection(data[categoryType], 'category-list');
});
