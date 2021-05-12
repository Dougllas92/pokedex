import React from 'react';
import { View, Image } from 'react-native';

interface LoadProps {
  width: number;
  height: number;
}

export function Load({ width, height }: LoadProps) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
      }}
    >
      <Image
        source={require('../../assets/images/loading.gif')}
        style={{
          width: width,
          height: height
        }}
      />
    </View>
  )
}