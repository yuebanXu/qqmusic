import {View, Text, ScrollView, Image} from '@tarojs/components'
import TitleMoreCom from '../../components/titleMoreCom';
import './index.scss'
import greenPlay from '../../assets/green_play.svg'
import {localImgUrls} from "../../utils/imgUrls";

const SingerList = () => {
  const placeList: Array<string> = ['全部','内地','港台','欧美','韩国','其他']
  const manList: Array<string> = ['全部','男','女','组合']
  const typeList: Array<string> = ['全部','流行','嘻哈','摇滚','电子','其他']
  const searchTypeList: Array<array> = [placeList, manList, typeList]
  return (
    <View className='flex_column_c singer_list_page'>
      <View className='six_nine_zero_width often_listen'>
        <TitleMoreCom title='常听歌手' />
        <ScrollView scrollX style='height: 128px;margin: auto 0' className='scroll_often_singer'>
          <View className='flex_row_c often_listen_content'>
            {localImgUrls.map((item, idx) => {
              return (
                <View key={idx + 1} className='flex_column_c often_listen_item'>
                  <Image className='singer_img' src={item} />
                  <Text>刘德华</Text>
                  <Image className='play_icon' src={greenPlay} />
                </View>
              )
            })}
          </View>
        </ScrollView>
      </View>
      <View className='search_area'>
        {searchTypeList.map((searchTypeItem, searchTypeIdx) => {
          return (
            <ScrollView key={searchTypeIdx + 1} scrollX style='height: 60px;'>
              <View className='flex_row_c six_nine_zero_width scroll_search'>
                {searchTypeItem.map((item, idx) => {
                  return (
                    <Text className='active_search' key={idx + 1}>{item}</Text>
                  )
                })}
              </View>
            </ScrollView>
          )
        })}
      </View>
    </View>
  )
}

export default SingerList
