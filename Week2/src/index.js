import {input_spending, check_spending, modify_spending, delete_spending} from './action.js';
import { print_menu } from './print.js';
import readlineSync from 'readline-sync';

while(true)
{
    print_menu();
    let selected = readlineSync.keyIn('Select menu: ', {limit: '$<1-5>'});
    switch(selected){
        case '1': input_spending(); break;
        case '2': check_spending(); break;
        case '3': modify_spending(); break;
        case '4': delete_spending(); break;
        case '5':
            console.log('종료합니다.');
            process.exit();
    }
}
