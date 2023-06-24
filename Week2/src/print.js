export function print_menu(){
    console.log('\n\n====================');
    console.log('[1] 지출 내역 입력');
    console.log('[2] 지출 내역 조회');
    console.log('[3] 지출 내역 수정');
    console.log('[4] 지출 내역 삭제');
    console.log('[5] 종료');
    console.log('====================\n');
}

export function print_check(){
    console.log('\n\n====================');
    console.log('[1] 전체 내역 조회');
    console.log('[2] 카테고리별 내역 조회');
    console.log('[3] 날짜 검색');
    console.log('[4] 돌아가기');
    console.log('====================\n');
}

// padStart 사용하면 맞출 수 있음.
export function print_data(list) {
    console.log('|  지출 날짜  |  지출 카테고리  |  상세 내역  |  지출 금액  |');
    for (let i in list) {
        let element = list[i];
        console.log('   '+
        element.spending_Date + ' ' + 
        element.spending_Category + ' ' +
        element.Details + ' ' + 
        element.Paid);
    }
}