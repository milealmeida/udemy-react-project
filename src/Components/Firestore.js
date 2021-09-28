import { useEffect } from 'react';

import { collection, getDocs } from  'firebase/firestore';
import { db } from '../Firebase';

const Firestore = () => {

    const getData = async () => {
        const names = collection(db, 'names');
        const listNames = await getDocs(names);

        listNames.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
          });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            Firebase Firestore Example.
        </div>
    );
}

export default Firestore;