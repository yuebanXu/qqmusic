import { useState } from 'react'
import {View, Text, Input} from '@tarojs/components'
import RecommandPage from './recommandPage'
import MusicMall from './musicHallPage'
import './index.scss'

const HomePage = () => {
  const homeTabList: Array<string> = ['推荐', '音乐馆', '视频']
  const [activeIdx, setActiveIdx] = useState(1)
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
      {!activeIdx ? <RecommandPage /> : activeIdx === 1 ? <MusicMall /> : <View>视频</View>}
    </View>
  )
}

export default HomePage
