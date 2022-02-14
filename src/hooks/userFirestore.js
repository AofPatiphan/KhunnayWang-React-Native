import { useState, useEffect } from 'react';
import { projectFirestore, timestamp } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    const testData = {
        number: 2,
        date: new Date(),
        brand: 'Bananain',
        description: {
            for: 'WYB',
            type: 'รองเท้า',
            color: 'ดำ',
            quantity: '2 Ea',
        },
        payment: [
            {
                amount: 1000,
                tax: 100,
            },
        ],
        status: 2,
        trackingNumber: 'TH2395234642',
        remark: 'remark',
        createdAt: timestamp(),
        userId: '2bfS3EPU3d5XyzU4wutd',
    };

    useEffect(() => {
        const unsub = projectFirestore
            .collection(collection)
            .orderBy('createdAt', 'desc')
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
