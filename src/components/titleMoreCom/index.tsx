import Taro from "@tarojs/taro";
import {View, Text} from '@tarojs/components'
import './index.scss'

const TitleMoreCom = (props) => {
  return (
    <View className='flex_row_cb title_more_area'>
      <Text className='title_name'>{props.title}</Text>
      <Text className='more_btn'>更多</Text>
    </View>
  )
}

export default TitleMoreCom
