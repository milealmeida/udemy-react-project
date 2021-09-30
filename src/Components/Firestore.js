import { useEffect, useState } from 'react';

import { collection, getDocs, addDoc } from  'firebase/firestore';
import { db } from '../Firebase';

import Login from '../Login';

const Firestore = () => {

    const [nameData, setNameData] = useState([]);
    const [firestoreData, setFirestoreData] = useState('');

    const firestorageChange = e => {
        setFirestoreData(e.target.value);
    };

    const onSubmit = async () => {

        await addDoc(collection(db, 'names'), {
            name: firestoreData,
          });

        setFirestoreData('');
    };

    const getData = async () => {
        let nameArray = [];

        const names = collection(db, 'names');
        const listNames = await getDocs(names);

        listNames.forEach((doc) => {
            nameArray.push(doc.data());
        });

        setNameData(nameArray);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            Firebase Firestore Example.

            <div>
                <input 
                    type="text" 
                    value={firestoreData}
                    onChange={e => firestorageChange(e)}
                    placeholder="Name"
                />

                <button onClick={onSubmit}>Submit</button>
            </div>
            
            <div>
                {nameData.map( doc => (
                    <div>{doc.name}</div>
                ))}
            </div>

            <Login />
        </div>
    );
}

export default Firestore;