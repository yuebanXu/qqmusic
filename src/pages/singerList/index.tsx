import {View, Text, ScrollView, Image} from '@tarojs/components'
import TitleMoreCom from "../../../components/titleMoreCom";
import './index.scss'
import greenPlay from '../../../assets/green_play.svg'
import {localImgUrls} from "../../utils/imgUrls";

const SingerList = () => {
  return (
    <View>
      <View className='often_listen'>
        <TitleMoreCom title='常听歌手' />
        <View className='often_listen_content'>
          {localImgUrls.map(item => {
            return (
              <View className='often_listen_item'>
                <Image className='singer_img' src={item} />
                <Text>刘德华</Text>
                <Image src={greenPlay} />
              </View>
            // box-shadow: 0rem 0rem .14rem rgba(51, 51, 51, 0.15);
            )
          })}
        </View>
      </View>
    </View>
  )
}

export default SingerList
