import React from 'react';


export default function () {
    return (
        <div className='style3'>
            <table>
                <tr bgcolor="lavender" height="40" >
                    <th width="200px" colSpan={3}>Смета имиджа</th>       
                    <th width="500px">Фишка (пунктик, конек, циклик, хобби и т.д.)</th>
                    <th width="100px">в месяц</th>
                </tr>
                <tr bgcolor="honeydew">
                    <td>Автомобиль</td>
                    <td>500</td>
                    <td> <input type="checkbox"></input> </td>  
                    <td></td>
                    <td>0</td>     
                </tr>
                <tr bgcolor="honeydew">
                    <td>Костюм</td>
                    <td>300</td>
                    <td> <input type="checkbox"></input> </td> 
                    <td></td>
                    <td>0</td>     
                </tr>
                <tr bgcolor="honeydew">
                    <td>Часы</td>
                    <td>100</td>
                    <td> <input type="checkbox"></input> </td> 
                    <td></td>
                    <td>0</td>       
                </tr>
                <tr bgcolor="honeydew">
                    <td>Галстуки</td>
                    <td>100</td>
                    <td> <input type="checkbox"></input> </td>       
                    <td></td>
                    <td>0</td> 
                </tr>
                <tr bgcolor="honeydew">
                    <td>Телефон</td>
                    <td>200</td>
                    <td> <input type="checkbox"></input> </td>   
                    <td></td>
                    <td>0</td>     
                </tr>
                <tr bgcolor="honeydew">
                    <td>Отдых</td>
                    <td>200</td>
                    <td> <input type="checkbox"></input> </td> 
                    <td></td>
                    <td>0</td>      
                </tr>
                <tr bgcolor="honeydew">
                    <td>Бумажник</td>
                    <td>50</td>
                    <td> <input type="checkbox"></input> </td>      
                    <td></td>
                    <td>0</td> 
                </tr>
                <tr bgcolor="lavender" height="30">
                    <td>Цена имиджа</td>
                    <td>1000</td>
                    <td> <input type="checkbox"></input> </td>      
                    <td></td>
                    <td>0</td> 
                </tr>
            
            </table>
        </div> 
    )
}