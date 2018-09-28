import React from 'react'
import { StyleSheet, Text } from 'react-native'

const s = StyleSheet.create({
  didNotWork: {
    fontSize: 16,
    fontWeight: '900', // if we comment this line, errors gone
    marginTop: 5, // if this line commented, errors also gone
  },
  work: {
    fontSize: 18,
//    fontWeight: '900', // when uncommented also work
  },
})

export const sample1 = <Text style={s.work} />
export const sample2 = <Text style={s.didNotWork} />
// ^ this line generate error:
// index.tsx:17:30 - error TS2322: Type 'RegisteredStyle<{ fontSize: number; fontWeight: string; marginTop: number; }>' is not assignable to type 'StyleProp<TextStyle>'.
//   Type 'RegisteredStyle<{ fontSize: number; fontWeight: string; marginTop: number; }>' is not assignable to type 'RecursiveArray<false | TextStyle | RegisteredStyle<TextStyle> | null | undefined>'.
//     Property 'length' is missing in type 'Number & { __registeredStyleBrand: { fontSize: number; fontWeight: string; marginTop: number; }; }'.

// 17 export const sample2 = <Text style={s.didNotWork} />
//                                 ~~~~~

//   node_modules/@types/react-native/index.d.ts:907:5
//     907     style?: StyleProp<TextStyle>;
//             ~~~~~
//     The expected type comes from property 'style' which is declared here on type 'IntrinsicAttributes & IntrinsicClassAttributes<Text> & Readonly<{ children?: ReactNode; }> & Readonly<TextProps>'

export const sample3 = <Text style={{fontSize: 16, fontWeight: '900', marginTop: 5}} />

