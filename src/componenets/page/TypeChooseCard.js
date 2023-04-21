import React, { useState } from 'react';
import TypeCard from './TypeCard';

const TypeChooseCard = () => {
    const [checkedItems, setCheckedItems] = useState([])
    const datas = [
        { title: '자연'},
        { title: '도시'},
        { title: '산'},
        { title: '바다'},
        { title: '골목'},
        { title: '여유'},
        { title: '자연1'},
        { title: '도시1'},
        { title: '산1'},
        { title: '바다1'},
        { title: '골목1'},
        { title: '여유1'},
        { title: '자연2'},
        { title: '도시2'},
        { title: '산2'},
        { title: '바다2'},
        { title: '골목2'},
        { title: '여유2'},
        { title: '자연3'},
        { title: '도시3'},
        { title: '산3'},
        { title: '바다3'},
        { title: '골목3'},
        { title: '여유3'},
    ]

    const checkedItemHandler = (code, isChecked) => {
        if (isChecked) { //체크 추가할때
            setCheckedItems([...checkedItems, code])
        } else if (!isChecked && checkedItems.find(one => one === code)) {//체크 해제할때 checkedItems에 있을 경우
            const filter = checkedItems.filter(one => one !== code)
            setCheckedItems([...filter])
        }
    }

    const onCheckAll = (checked) => { //전체 선택
        if (checked) {
            const checkedItemsArray = []
            datas.forEach(data => checkedItemsArray.push(data.title))
            setCheckedItems(checkedItemsArray)
        } else { //전체 해제
            setCheckedItems([])
        }
    }

    return (
        <>
            <div className="check-all">
            <label onClick={onCheckAll}>
                <input type='checkbox'
                    name='meal'
                    onChange={(e) => onCheckAll(e.target.checked)}
                    className='hidden' />
                모두 선택
            </label>
            </div>
            <div style={{display: "grid", gridTemplateRows: "1fr ", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",}}>
                {datas.map(data => <TypeCard data={data.title} checkedItems={checkedItems} checkedItemHandler={checkedItemHandler}/>)}
            </div>

        </>
    );
};

export default TypeChooseCard;