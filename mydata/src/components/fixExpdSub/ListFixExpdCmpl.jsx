import React from "react";
import "../../css/FixExpd.module.css";
import FixExpdCss from "../../css/FixExpd.module.css";

const headers = [
    {
      text: '지출 항목',
      value: 'name'
    },
    {
      text: '지출 날짜',
      value: 'date'
    },
    {
      text: '총 50,000원',
      value: 'won'
    }
  ];

const items = [
  {
    name: '교통비',
    date: '13일',
    won: '20,000원'
  },
  {
    name: '용돈',
    date: '1일',
    won: '10,000원'
  },
  {
    name: '식비',
    date: '24일',
    won: '20,000원'
  }
 ];
 const headerKey = headers.map((header) => header.value);
 const ListFixExpdCmpl = () => {
    return (
        <div>
            <h2 className={FixExpdCss.fixExpdTitle}>지출예정</h2>
                <table className={FixExpdCss.ReactTable}>
                    <thead>
                        <tr>
                            {
                                headers.map((header)=>
                                <th key={header.text}>
                                    {header.text}
                                </th>
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, index) =>(
                                <tr key={index}>
                                    {
                                        headerKey.map((key)=>
                                            <td key={key+index}>
                                                {item[key]}
                                            </td>
                                        )
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
        </div>  
    );
};

export default ListFixExpdCmpl;