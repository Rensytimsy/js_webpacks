import _ from 'lodash';

function component(){
    const html_element = document.createElement('div');
    html_element.innerHTML = _.join(["Hello world", "my name is Timothy"], " ");
    return html_element;
}
document.body.appendChild(component());