import {useState} from "react";
import Taro from "@tarojs/taro";
import {View, Swiper, SwiperItem, Image, Text, ScrollView} from '@tarojs/components'
import TitleMoreCom from "../../../components/titleMoreCom";
import './index.scss'
import geshou from '../../../assets/geshou.svg'
import paihang from '../../../assets/paihang.svg'
import kinds from '../../../assets/kinds.svg'
import diantai from '../../../assets/diantai.svg'
import zhibo from '../../../assets/zhibo.svg'
import greenPlay from '../../../assets/green_play.svg'
import {localImgUrls} from '../../../utils/imgUrls'

const bannerList: Array<string> = [
  'https://uooc-file.oss-cn-shenzhen.aliyuncs.com/baoan/src%3Dhttp___02imgmini.eastday.com_mobile_20180922_20180922114313_0b044de61cf226e073f7daf5b5bae706_1.jpeg%26refer%3Dhttp___02imgmini.eastday.jpg',
  'https://uooc-file.oss-cn-shenzhen.aliyuncs.com/baoan/src%3Dhttp___img3.doubanio.com_view_group_topic_l_public_p157942141.jpg%26refer%3Dhttp___img3.doubanio.jpg',
  'https://uooc-file.oss-cn-shenzhen.aliyuncs.com/baoan/src%3Dhttp___img4.tbcdn.cn_tfscom_i2_361186872_TB2UzhksXXXXXbuXXXXXXXXXXXX_%21%21361186872.png%26refer%3Dhttp___img4.tbcdn.jpg',
  'https://uooc-file.oss-cn-shenzhen.aliyuncs.com/baoan/src%3Dhttp___n.sinaimg.cn_sinacn00_200_w600h400_20180421_dcaf-fznefkf9039057.jpg%26refer%3Dhttp___n.sinaimg.jpg',
  'https://uooc-file.oss-cn-shenzhen.aliyuncs.com/baoan/src%3Dhttp___n.sinaimg.cn_sinacn_w400h267_20180304_c460-fwnpcnt8313802.jpg%26refer%3Dhttp___n.sinaimg.jpg'
]
interface tabItem {
  id: number,
  name: string,
  icon: string,
  url?: string
}
const tabList: Array<tabItem> = [
  { id: 1, name: '歌手', icon: geshou, url: '/pages/singerList/index' },
  { id: 2, name: '排行', icon: paihang },
  { id: 3, name: '分类歌单', icon: kinds },
  { id: 4, name: '音乐电台', icon: diantai },
  { id: 5, name: '直播', icon: zhibo }
]
const songCdList: Array<string> = ['新歌', '新碟', '数字专辑']
const MusicMall = () => {
  const [activeSongCDIdx, setActiveSongCD] = useState(0)
  const clickActiveSongCD = (idx) => {
    setActiveSongCD(idx)
  }
  const toTabPage = (url) => {
    Taro.navigateTo({
      url: url
    })
  }
  return (
    <View className='flex_column_c music_mall'>
      <Swiper className='banner_area' indicatorColor='#ccc' indicatorActiveColor='#fff' circular indicatorDots autoplay>
        {bannerList.map(item => {
          return (
            <SwiperItem>
              <Image className='banner_img' src={item} />
            </SwiperItem>
          )
        })}
      </Swiper>
      <View className='flex_row_cb tab_area'>
        {tabList.map((item) => {
          return (
            <View className='flex_column_cc tab_item' onClick={() => toTabPage(item.url)}>
              <Image src={item.icon} />
              <Text>{item.name}</Text>
            </View>
          )
        })}
      </View>
      {/*新歌新碟数组专辑*/}
      <View className='flex_column song_cd_area'>
        <View className='flex_row_cb song_cd_tab'>
          <View className='flex_row_cb song_cd_left'>
            {songCdList.map((item, idx) => {
              return (
                <Text className={`song_cd_name ${activeSongCDIdx === idx ? 'active_song_cd' : ''}`} onClick={() => clickActiveSongCD(idx)}>{item}</Text>
              )
            })}
          </View>
          <Text className='song_cd_more'>更多{songCdList[activeSongCDIdx]}</Text>
        </View>
        <Swiper className='song_cd_scroll_content' nextMargin='10px'>
          {bannerList.map(() => {
            return (
              <SwiperItem>
                <View className='flex_column song_cd_detail'>
                  {[1,2,3].map(() => {
                    return (
                      <View className='flex_row_cb song_name_song_singer'>
                        <View className='flex_row_cb song_name_song_singer_left'>
                          <Image src={bannerList[0]} />
                          <View className='flex_column_sa name_singer'>
                            <Text className='text_ellipsis_one name'>十七岁</Text>
                            <Text className='text_ellipsis_one singer'>张学友 刘德华</Text>
                          </View>
                        </View>
                        <Image className='mv_icon' src={greenPlay} />
                      </View>
                    )
                  })}
                </View>
              </SwiperItem>
            )
          })}
        </Swiper>
      </View>
      {/*排行榜*/}
      <View className='flex_column'>
        <TitleMoreCom title='排行榜' />
        <Swiper className='rank_content' nextMargin='15px'>
          {localImgUrls.map((item) => {
            return (
              <SwiperItem>
                <View className='flex_row_cb rank_img_song_item' style={{ 'backgroundImage': `url(${item})` }}>
                  <Image className='rank_cover' src={item} />
                  <View className='flex_column_sb rank_songs'>
                    <Text className='rank_songs_title'>抖音排行榜</Text>
                    <View className='rank_song_items'>
                      {[1,2,3].map(() =>{
                        return (
                          <View className='flex_row_c rank_song_item'>
                            <Text className='rank_song_idx'>01</Text>
                            <Text className='rank_song_message'>爱你一万年 - 刘德华</Text>
                          </View>
                        )
                      })}
                    </View>
                  </View>
                </View>
              </SwiperItem>
            )
          })}
        </Swiper>
      </View>
      {/*直播*/}
      <View className='flex_column'>
        <TitleMoreCom title='直播' />
        <View className='live_content'>
          <ScrollView scrollX scrollWithAnimation style='height: 276px'>
            <View className='flex_row scroll_live'>
              {localImgUrls.map((item) => {
                return (
                  <View className='flex_column scroll_live_item'>
                    <Image src={item} />
                    <Text className='text_ellipsis_one'>无限温柔收藏者</Text>
                  </View>
                )
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default MusicMall
