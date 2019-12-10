import axios from 'axios';

export async function requestForImg (url, domId, domClass, fatherDomId) {
    let toRemoveDom = document.getElementById(domId);
    let parent = document.getElementById(fatherDomId);
    parent.removeChild(toRemoveDom);
    let { data } = await axios({
        method: 'GET',
        url: url,
        responseType: 'blob'
    });
    let imgDom = document.createElement('img');
    imgDom.onload = () => {
        window.URL.revokeObjectURL(imgDom.src);
    };
    imgDom.src = window.URL.createObjectURL(data);
    imgDom.id = domId;
    imgDom.className = domClass;
    parent.appendChild(imgDom);
}
