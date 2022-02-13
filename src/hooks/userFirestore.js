import { useState, useEffect } from 'react';
import { projectFirestore, timestamp } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    const testData = {
        number: 1,
        date: new Date(),
        brand: 'Bananain',
        description: {
            for: 'WYB',
            type: 'รองเท้า',
            color: 'ฟ้า',
            quantity: '1 Ea',
        },
        payment: [
            {
                amount: 1000,
                tax: 100,
            },
            {
                amount: 200,
                tax: 20,
            },
        ],
        status: 3,
        trackingNumber: 'TH21942342342',
        remark: 'remark',
        createdAt: timestamp(),
        userId: 'vLe99uy8jcSTlmdRi3bi',
    };

    useEffect(() => {
        const unsub = projectFirestore
            .collection(collection)
            // .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach((doc) => {
                    documents.push({ ...doc.data(), id: doc.id });
                });
                setDocs(documents);
            });
        // projectFirestore.collection('order').add(testData);

        return () => unsub();
    }, [collection]);

    return { docs };
};

export default useFirestore;
