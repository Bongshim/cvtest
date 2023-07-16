const overflowCheck = (element: HTMLDivElement) => {
    const overflownChildren = [] as HTMLElement[]; // array to store the overflown children
   
    while (element && element.scrollHeight > element.clientHeight) {
        const lastChild = element.lastElementChild as HTMLElement;
        overflownChildren.push(lastChild);
        element.removeChild(lastChild);
    }
    return overflownChildren.reverse()
}

export default overflowCheck;