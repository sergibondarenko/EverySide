import React from 'react';
import { View, Linking, TouchableNativeFeedback } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import moment from 'moment';

const styles = {
  cardNoteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10,
  },
  cardFeaturedTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3,
  },
  cardTextStyle: {
    marginBottom: 10,
  },
  carDividerStyle: {
    backgroundColor: '#dfe6e9'
  },
  cardViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

export function Article({
  article: {
    title,
    description,
    publishedAt,
    source,
    urlToImage,
    url,
  } = {}
}) {
  console.log('Article', {
    title,
    description,
    publishedAt,
    source,
    urlToImage,
    url,
  });

  const {
    cardNoteStyle,
    cardFeaturedTitleStyle,
    cardTextStyle,
    carDividerStyle,
    cardViewStyle,
  } = styles;

  const timePublishedFromNow = moment(publishedAt || moment.now()).fromNow();

  function cardImage(urlToImage) {
    const defaultImg = 'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';
    return {
      uri: urlToImage || defaultImg,
    }
  }

  return (
    <TouchableNativeFeedback
      useForeground
      onPress={() => Linking.openURL(url)}
    >
      <Card
        featuredTitle={title}
        featuredTitleStyle={cardFeaturedTitleStyle}
        image={cardImage(urlToImage)}
      >
        <Text style={cardTextStyle}>
          {description || 'Read More..'}
        </Text>
        <Divider style={carDividerStyle} />
        <View style={cardViewStyle}>
          <Text style={cardNoteStyle}>{source.name.toUpperCase()}</Text>
          <Text style={cardNoteStyle}>{timePublishedFromNow}</Text>
        </View>
      </Card>
    </TouchableNativeFeedback>
  );
}