import React from "react";
import FixExpdCss from "../css/FixExpd.module.css";
import ListFixExpdScd from './fixExpdSub/ListFixExpdScd';
import ListFixExpdCmpl from './fixExpdSub/ListFixExpdCmpl';

const ListFixExpd = () => {
    return (
        <div>
            <div className={FixExpdCss.fixExpdTopDiv}>
                <h2 className={FixExpdCss.fixExpdTitle}>이번달 고정지출</h2>
                <div className={FixExpdCss.ReactTable}>
                    <table>
                        <tbody>
                            <tr>
                                <th scope="row">총 건수</th>
                                <td>7건</td>
                            </tr>
                            <tr>
                                <th scope="row">총 금액</th>
                                <td>150,000원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <p className={FixExpdCss.SplitDiv} />
            <div className={FixExpdCss.fixExpdBottomDiv}>
                <ListFixExpdCmpl />
            </div>
            <p className={FixExpdCss.SplitDiv} />
            <div className={FixExpdCss.fixExpdBottomDiv}>
                <ListFixExpdScd />
            </div>
        </div>

        
    );
};

export default ListFixExpd;