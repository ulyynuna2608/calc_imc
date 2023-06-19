import {Level, calculeiIMC} from '../../helpers/imc'
import styles from './GridItems.module.css'
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'

type Props = {
  item: Level
}

export const GridItem = ({item} : Props) => {
    return(
      <div  className={styles.main} style={{backgroundColor: item.color}}>
        <div className={styles.gridIIcon}>
          {item.icon === 'up' && <img src={upImage} alt='' width="30"/>}
          {item.icon === 'down' && <img src={downImage} alt='' width="30"/>}
        </div>
      </div>
    )
  }
  