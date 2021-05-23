import {View} from '@tarojs/components'
import SongSheetTop from "./songSheetTop";
import SongRowCom from "./songRowCom";
import './index.scss'

// const songBg = 'https://uooc-file.oss-cn-shenzhen.aliyuncs.com/baoan/0c09fc7007314f90b568ae7d767c26d4.jpg'
// const songBg = 'https://uooc-file.oss-cn-shenzhen.aliyuncs.com/baoan/src%3Dhttp___02imgmini.eastday.com_mobile_20180922_20180922114313_0b044de61cf226e073f7daf5b5bae706_1.jpeg%26refer%3Dhttp___02imgmini.eastday.jpg'
// const songBg = 'https://uooc-file.oss-cn-shenzhen.aliyuncs.com/baoan/src%3Dhttp___img3.doubanio.com_view_group_topic_l_public_p157942141.jpg%26refer%3Dhttp___img3.doubanio.jpg'
// const songBg = 'https://uooc-file.oss-cn-shenzhen.aliyuncs.com/baoan/src%3Dhttp___img4.tbcdn.cn_tfscom_i2_361186872_TB2UzhksXXXXXbuXXXXXXXXXXXX_%21%21361186872.png%26refer%3Dhttp___img4.tbcdn.jpg'
// const songBg = 'https://uooc-file.oss-cn-shenzhen.aliyuncs.com/baoan/src%3Dhttp___n.sinaimg.cn_sinacn00_200_w600h400_20180421_dcaf-fznefkf9039057.jpg%26refer%3Dhttp___n.sinaimg.jpg'
// const songBg = 'https://uooc-file.oss-cn-shenzhen.aliyuncs.com/baoan/src%3Dhttp___n.sinaimg.cn_sinacn_w400h267_20180304_c460-fwnpcnt8313802.jpg%26refer%3Dhttp___n.sinaimg.jpg'
const SongSheetPage = () => {
  return (
    <View className='flex_column_c'>
      <SongSheetTop />
      {[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8].map((item, index) => {
        return <SongRowCom key={index+1} idx={index} />
      })}
    </View>
  )
}

export default SongSheetPage
