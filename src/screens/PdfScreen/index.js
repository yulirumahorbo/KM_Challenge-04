import React from 'react';
import Pdf from 'react-native-pdf';
import { moderateScale } from 'react-native-size-matters';

export default function PdfScreen() {
  return (
    <Pdf
      source={{
        uri: 'https://hpread.scholastic.com/HP_Book2_Chapter_Excerpt.pdf',
      }}
      style={{ flex: 1, width: moderateScale(350) }}
    />
  );
}
