import fs from 'fs';

export function read_jsonfile(filename) {
    const dataJSON = fs.readFileSync(filename).toString();
    const data = JSON.parse(dataJSON);
    
    return data;
}

export const write_jsonfile = (filename, list) => 
    fs.writeFileSync(filename, JSON.stringify(list));


