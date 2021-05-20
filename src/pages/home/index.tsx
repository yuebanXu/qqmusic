import { useState, useEffect } from 'react'
import {View, Text, Input} from '@tarojs/components'
import RecommendScrollX from "./recommendScrollX";
import SongSuplyStation from "./songAupplyStation";
import './index.scss'

const HomePage = () => {
  const homeTabList: Array<string> = ['推荐', '音乐馆', '视频']
  const [activeIdx, setActiveIdx] = useState(0)
  const [searchKey] = useState('')
  const clickTab = (idx) => {
    setActiveIdx(idx)
  }
  return (
    <View>
      <View className='padding_lr_30'>
        {homeTabList.map((item, idx) => {
          return (
            <Text className={`normal_tab ${activeIdx === idx ? 'active_tab' : ''}`} onClick={() => clickTab(idx)}>{item}</Text>
          )
        })}
      </View>
      <View className='search_box flex_row_c'>
        <Input value={searchKey} placeholder='周杰伦'></Input>
      </View>
      <RecommendScrollX />
      <SongSuplyStation />
    </View>
  )
}

export default HomePage
