import {Image, View, Text} from '@tarojs/components'
import './index.scss'
import mom from '../../../assets/zaizai_mom.jpg'
// import greenPlay from '../../../assets/green_play.svg'
import shareIcon from './images/fenxiang.svg'
import messageIcon from './images/xiaoxi.svg'
import likeIcon from './images/yixiangkan.svg'

// const songBg = 'https://uooc-file.oss-cn-shenzhen.aliyuncs.com/baoan/0c09fc7007314f90b568ae7d767c26d4.jpg'
// const songBg1 = 'https://uooc-file.oss-cn-shenzhen.aliyuncs.com/baoan/src%3Dhttp___02imgmini.eastday.com_mobile_20180922_20180922114313_0b044de61cf226e073f7daf5b5bae706_1.jpeg%26refer%3Dhttp___02imgmini.eastday.jpg'
// const songBg2 = 'https://uooc-file.oss-cn-shenzhen.aliyuncs.com/baoan/src%3Dhttp___img3.doubanio.com_view_group_topic_l_public_p157942141.jpg%26refer%3Dhttp___img3.doubanio.jpg'
// const songBg3 = 'https://uooc-file.oss-cn-shenzhen.aliyuncs.com/baoan/src%3Dhttp___img4.tbcdn.cn_tfscom_i2_361186872_TB2UzhksXXXXXbuXXXXXXXXXXXX_%21%21361186872.png%26refer%3Dhttp___img4.tbcdn.jpg'
const songBg4 = 'https://uooc-file.oss-cn-shenzhen.aliyuncs.com/baoan/src%3Dhttp___n.sinaimg.cn_sinacn00_200_w600h400_20180421_dcaf-fznefkf9039057.jpg%26refer%3Dhttp___n.sinaimg.jpg'
// const songBg5 = 'https://uooc-file.oss-cn-shenzhen.aliyuncs.com/baoan/src%3Dhttp___n.sinaimg.cn_sinacn_w400h267_20180304_c460-fwnpcnt8313802.jpg%26refer%3Dhttp___n.sinaimg.jpg'
const SongSheetTop = () => {
  return (
    <View className='top_area' style={{ 'backgroundImage': `url(${songBg4})` }}>
      <View className='flex_row_cb song_sheet_detail'>
        <Image className='song_sheet_detail_cover' src={songBg4} />
        <View className='flex_column_sb song_content'>
          <View className='flex_column song_content_top'>
            <Text className='song_content_top_title'>经典老歌 | 滚石经典 榴莲当年</Text>
            <View className='flex_row create_man'>
              <Image className='create_man_img' src={mom} />
              <Text className='create_man_name'>奶粉傲</Text>
              <Text className='create_man_follow'>+ 关注</Text>
            </View>
          </View>
          <Text className='text_ellipsis_one song_introduction'>简介:当年的歌曲承载着一代人的记忆,多么牛逼的张学友</Text>
        </View>
      </View>
      <View className='flex_row_cb like_message'>
        <View className='flex_row_c like_item'>
          <Image src={likeIcon} />
          <Text>10.7万</Text>
        </View>
        <View className='flex_row_c like_item'>
          <Image src={messageIcon} />
          <Text>1088</Text>
        </View>
        <View className='flex_row_c like_item'>
          <Image src={shareIcon} />
          <Text>分享</Text>
        </View>
      </View>
    </View>
  )
}

export default SongSheetTop
