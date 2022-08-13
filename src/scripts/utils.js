import config from "./config.js";


export function initControls(handler) {
    window.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowUp') {
            handler('up');
        } else if (e.key === 'ArrowDown') {
            handler('down');
        } else if (e.key === 'ArrowLeft') {
            handler('left');
        } else if (e.key === 'ArrowRight') {
            handler('right');
        }
    });

    // TODO: init swipe
}