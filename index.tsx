import React from 'react'
import { StyleSheet, Text } from 'react-native'

const s = StyleSheet.create({
  didNotWork: {
    fontSize: 16,
    fontWeight: '900',
    marginTop: 5,
  },
  work: {
    fontSize: 18,
//    fontWeight: '900', // when uncommented also work
  },
})

export const sample1 = <Text style={s.work} />
export const sample2 = <Text style={s.didNotWork} />
export const sample3 = <Text style={{fontSize: 16, fontWeight: '900', marginTop: 5}} />

