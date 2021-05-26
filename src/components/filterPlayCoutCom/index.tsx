import Taro from "@tarojs/taro";
import {View, Text, Image} from '@tarojs/components'
import './index.scss'
import sheetPlayIcon from '../../assets/white_play.svg'

const songBg = 'https://uooc-file.oss-cn-shenzhen.aliyuncs.com/baoan/0c09fc7007314f90b568ae7d767c26d4.jpg'
const FilterPlayCountCom = () => {
  const toSongSheet = () => {
    Taro.navigateTo({
      url: `/pages/songSheet/index`
    })
  }
  return (
    <View className='flex_column song_sheet_item' onClick={() => toSongSheet()}>
      <Image className='couver_img' src={songBg} />
      <View className='flex_row_cb play_count'>
        <Image src={sheetPlayIcon} />
        <Text>1777.4万</Text>
      </View>
      <Text className='sheet_name'>粤语备胎 | 虚伪的爱·终受伤害</Text>
    </View>
  )
}

export default FilterPlayCountCom
