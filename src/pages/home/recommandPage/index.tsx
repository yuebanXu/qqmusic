import {View} from '@tarojs/components'
import RecommendScrollX from "../recommendScrollX";
import SongAupplyStation from "../songAupplyStation";
import './index.scss'

const RecommandPage = () => {
  return (
    <View>
      <RecommendScrollX />
      {[1, 2, 3, 4].map(() => {
        return <SongAupplyStation />
      })}
    </View>
  )
}

export default RecommandPage
