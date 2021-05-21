import {View, Text, ScrollView, Image} from '@tarojs/components'
import './index.scss'

const RecommendScrollX = () => {
  return (
    <View>
      <Text className='recommand_title'>今日为你推荐</Text>
      <ScrollView scrollX scrollWithAnimation style='height: 110px'>
        <View className='flex_row_c recommand_area'>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
            return (<View className='flex_column recommand_item'>
              <Image src='https://uooc-file.oss-cn-shenzhen.aliyuncs.com/baoan/0c09fc7007314f90b568ae7d767c26d4.jpg' />
              <Text >每日三十首</Text>
            </View>)
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default RecommendScrollX
