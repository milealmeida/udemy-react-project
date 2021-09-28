import { useEffect, useState } from 'react';

import { collection, getDocs } from  'firebase/firestore';
import { db } from '../Firebase';

const Firestore = () => {

    const [nameData, setNameData] = useState([]);

    const getData = async () => {
        let nameArray = [];

        const names = collection(db, 'names');
        const listNames = await getDocs(names);

        listNames.forEach((doc) => {
            // console.log(doc.id, '=>', doc.data());
            nameArray.push(doc.data());
        });

        setNameData(nameArray);

        console.log(nameData);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            Firebase Firestore Example.
            <div>
                {nameData.map( doc => (
                    <div>{doc.name}</div>
                ))}
            </div>
        </div>
    );
}

export default Firestore;