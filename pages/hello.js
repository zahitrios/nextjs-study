import Banner from '../components/Banner'
import styles from '@/styles/Hello.module.css'

export default function Hello () {
    return (
        <div>
            <h1 className={[styles.backgroundRed]}>Hello hello</h1>
            <Banner></Banner>
        </div>
        
    )
}