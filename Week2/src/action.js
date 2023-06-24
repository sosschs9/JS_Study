import {read_jsonfile, write_jsonfile} from './accessFile.js';
import { print_check, print_data } from './print.js';
import readlineSync from 'readline-sync';

const filename = 'record.json';

export function input_spending() {
    let date = readlineSync.question('Input Date: ');
    let category = readlineSync.question('Input Catergory: ');
    let detail = readlineSync.question('Input Detail: ');
    let paid = readlineSync.question('Input Paid: ');

    let spending_input = [{
        spending_Date: date,
        spending_Category: category,
        Details: detail,
        Paid: paid,
    }];

    let list = read_jsonfile(filename).concat(spending_input);
    write_jsonfile(filename, list);
}

export function check_spending() {
    let search;
    let list = read_jsonfile(filename);

    print_check();
    let selected = readlineSync.keyIn('Select menu: ', {limit: '$<1-4>'});

    switch(selected){
        case '1':
            print_data(list);
            break;
        case '2':
            let category_list = [];
            search = readlineSync.question('Input search category: ');
            for (let i in list) {
                if (search == list[i].spending_Category)
                    category_list.push(list[i]);
            }
            print_data(category_list);
            break;
        case '3':
            let date_list = [];
            search = readlineSync.question('Input search date: ');
            for (let i in list) {
                if (search == list[i].spending_Date)
                    date_list.push(list[i]);
            }
            print_data(date_list);
            break;
        case '4':
            break;
    }

}

export function modify_spending() {
    let list = read_jsonfile(filename);
    const size = list.length;
    let index = readlineSync.keyIn('Input modify index: ', {limit: `$<1-${size}>`});

    let date = readlineSync.question('Input Date: ');
    let category = readlineSync.question('Input Catergory: ');
    let detail = readlineSync.question('Input Detail: ');
    let paid = readlineSync.question('Input Paid: ');
    let spending_modify = [{
        spending_Date: date,
        spending_Category: category,
        Details: detail,
        Paid: paid,
    }];

    list[index-1] = spending_modify;
    write_jsonfile(filename, list);
}

export function delete_spending() {
    let list = read_jsonfile(filename);
    const size = list.length;
    let index = readlineSync.keyIn('Input delete index: ', {limit: `$<1-${size}>`});
    let yn = readlineSync.keyIn('Are you sure you want to delete it?(y/n)',  {limit: 'yYnN'});

    if (yn == 'y' || yn == 'Y') {
        list.splice(index-1,1);
        write_jsonfile(filename, list);
    }
}