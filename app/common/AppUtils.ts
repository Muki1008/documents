
export function joinCSS(...names: string[]) {
    let css = '';
    names.map((value) => {
        css = css + value + ' ';
    });
    return css;
}
