// import React, { useState, useEffect } from 'react';

// interface IData {
//     id: any;
//     first_name: string;
// }
// const DynamicCheckbox = () => {
//     const [dataId, setDataId] = useState<Array<any>>([]);

//     const chooseCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const id = parseInt(e.target.value);
//         if (dataId.includes(id)) {
//             const idCollection = dataId.filter((id) => id !== id);
//             setDataId(idCollection);
//         } else {
//             const idCollection = [...dataId];
//             idCollection.push(id);
//             setDataId(idCollection);
//         }
//     };
//     const remove = () => {
//         const newList: DATA[] = users.filter(
//             (item: any) => !dataId.includes(item.id)
//         );
//         setUsers(newList);
//     };
//     return (
//         <div style={styles.container}>
//             {users.length === 0 && <h4>Fetching Checkboxes ...</h4>}
//             {users.length > 0 &&
//                 users.map((item: any) => (
//                     <div style={styles.checkbox} key={item.id}>
//                         <span style={styles.id}>{item.id}</span>
//                         <span style={styles.first_name}>{item.first_name}</span>
//                         <span>
//                             <input
//                                 type="checkbox"
//                                 value={item.id}
//                                 onChange={chooseCheckbox}
//                                 checked={
//                                     dataId.includes(item.id) ? true : false
//                                 }
//                             />
//                         </span>
//                     </div>
//                 ))}
//             <button style={styles.button} onClick={remove}>
//                 Remove
//             </button>
//         </div>
//     );
// };
// const styles: { [key: string]: React.CSSProperties } = {
//     checkbox: {
//         margin: '10px 0',
//         padding: '14px 25px',
//         backgroundColor: 'rgb(238 237 247)',
//         width: '100%',
//         display: 'flex',
//         justifyContent: 'space-between',
//     },
//     button: {
//         marginTop: 15,
//         color: '#ffffff',
//         width: '100%',
//         cursor: 'pointer',
//         padding: '15px 30px',
//         border: 'none',
//         fontWeight: 'bold',
//         backgroundColor: 'red',
//     },
// };
// export default DynamicCheckbox;
