function parseData({data,column}){
    let template = [];
    let result = [];
    column.map(item=>template.push(item.name));
    data.forEach(
        data => {
            let oneResult = {};
            for(let F = 0;F < template.length; ++F)
                oneResult[template[F]] = data[F];
            result.push(oneResult);
        }
    );
    return result;
}
export { parseData };
