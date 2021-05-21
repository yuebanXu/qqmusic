import {View, Text, ScrollView} from '@tarojs/components'
import SongSheetCom from "../../../components/songSheetCom";
import './index.scss'

const SongSuplyStation = () => {
  return (
    <View>
      <View className='flex_row_cb station_title'>
        <Text className='title'>你的歌单补给站</Text>
        <Text className='more'>更多</Text>
      </View>
      <ScrollView scrollX scrollWithAnimation style='height: 142px'>
        <View className='flex_row_c song_sheet_area'>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
            return <SongSheetCom />
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default SongSuplyStation
