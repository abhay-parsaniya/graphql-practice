import React from 'react'
import { useQuery } from '@apollo/client'
import styles from './index.module.css'
import { GET_ALL_QUOTES } from '@/graphql/gqlquries/quries';
import Loader from '../Loader';

const Dashboard = () => {
    const { loading, error, data } = useQuery(GET_ALL_QUOTES);

    if (loading) return <Loader />

    if (error) console.log(error.message)

    if(data?.quotes?.length == 0) return <h2>No Quotes Available !!</h2>

    return (
        <>
            <h1 className={styles.quotes__heading}>Quotes</h1>
            <div className={styles.quotes__container}>
                {
                    data?.quotes?.map((quote: any) =>
                        <blockquote className={styles.quote} key={quote.by._id} >
                            <h1>{quote.name}</h1>
                            <p className={styles.quote__authorName}>{quote.by.firstName}</p>
                        </blockquote>
                    )
                }
            </div>
        </>
    )
}

export default Dashboard
