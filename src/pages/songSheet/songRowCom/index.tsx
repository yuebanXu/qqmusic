import { useState, useEffect } from "react";
import {Image, View, Text} from '@tarojs/components'
import './index.scss'
import greenPlay from '../../../assets/green_play.svg'
import grayCirclePlay from '../../../assets/gray_circle_play.svg'

const SongRowCom = (props) => {
  return (
    <View className='flex_row_cb song_row_area'>
      <View className='flex_row_cb song_row_left'>
        <Text classNmae='song_index'>{props.idx + 1}</Text>
        <View className='flex_column song_message'>
          <Text className='song_name'>只想一生跟你走</Text>
          <Text className='text_ellipsis_one'>张学友 · 传奇 - 我与你</Text>
        </View>
      </View>
      <View className='flex_row_cb song_row_right'>
        <Image src={grayCirclePlay} />
        <Text>· · ·</Text>
      </View>
    </View>
  )
}

export default SongRowCom
