function inject(items, sections){
    let count = 0;
    sections.forEach(item => {
        items.splice(item.index + count++,0,item.content)
    });
    return items;
}
export { inject };
