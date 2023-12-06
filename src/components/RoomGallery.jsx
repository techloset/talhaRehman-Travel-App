import { StyleSheet, Text, View, ImageBackground,TouchableOpacity, Image } from 'react-native'
import React , {useState} from 'react'
import ratio from '../style/ratio'
import { Color,FontFamily } from '../style/GlobalStyle'

const RoomGallery = () => {
  const imagesData = [
    {id: 1, image: require('../assets/images/bedroom.png')},
    {id: 2, image: require('../assets/images/bathtub.png')},
    {id: 3, image: require('../assets/images/coffee.png')},
    {id: 4, image: require('../assets/images/pool.png')},
    {id: 5, image: require('../assets/images/mountain.png')},
  ];
  const [currentScreen, setCurrentScreen] = useState(0);
  const now = currentScreen + 1;
  const imagesDataEdited = imagesData.slice(currentScreen, now);

  const handleChange = () => {
    if (now < 5) {
      setCurrentScreen(currentScreen + 1);
    } else {
      return;
    }
  };
  const handleChangePrev = () => {
    if (now > 1) {
      setCurrentScreen(currentScreen - 1);
    } else {
      return;
    }
  };
  return (
    <View>
       <View style={styles.carouselContainer}>
          {imagesDataEdited.map((item, index) => (
            <View key={index} style={styles.mainImageContainer}>
              <ImageBackground style={styles.mainImage} source={item.image}>
                <View style={styles.carouselBtnContainer}>
                  <TouchableOpacity
                    style={
                      now === 1
                        ? [styles.carouselBtn, { opacity: 0 }]
                        : styles.carouselBtn
                    }
                    onPress={handleChangePrev}
                  >
                    <Image
                      source={require('../assets/images/ChevronLeftButton.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={
                      now === 5
                        ? [styles.carouselBtn, { opacity: 0 }]
                        : styles.carouselBtn
                    }
                    onPress={handleChange}
                  >
                    <Image
                      source={require('../assets/images/ChevronRightButton.png')}
                    />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          ))}
          {/* Thumbnail images */}
          <View style={styles.smallImageContainer}>
            {imagesData.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setCurrentScreen(item.id - 1)}
              >
                <ImageBackground
                  style={[styles.smallImage]}
                  source={item.image}
                >
                  {item.id === now ? (
                    ''
                  ) : (
                    <View
                      style={[
                        item.id === now ? '' : styles.smallImageOverlay,
                      ]}
                    >
                      {item.id === 5 ? (
                        <Text style={styles.overlayText}>10+</Text>
                      ) : (
                        ''
                      )}
                    </View>
                  )}
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </View>
    </View>
  )
}

export default RoomGallery

const styles = StyleSheet.create({

  mainImage: {
    width: '100%',
    minHeight: ratio.widthPixel(285),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  mainImageContainer: {
    maxHeight: ratio.widthPixel(285),
    overflow: 'hidden',
  },
  carouselBtn: {
    backgroundColor: Color.white,
    width: ratio.widthPixel(36),
    height: ratio.widthPixel(36),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 36,
  },
  carouselBtnContainer: {
    paddingHorizontal: 20,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  overlayText: {
    fontFamily: FontFamily.poppinsMedium,
    fontSize: ratio.fontPixel(15),
    lineHeight: ratio.fontPixel(17.652),
    color: Color.white,
    opacity: 0.6,
  },
  smallImage: {
    width: ratio.widthPixel(71),
    height: ratio.widthPixel(63),
  },
  smallImageContainer: {
    flexDirection: 'row',
    gap: 1,
    justifyContent: 'space-between',
  },
  smallImageOverlay: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
  },
  carouselContainer: {
    overflow: 'hidden',
    borderRadius: 30,
    gap: 1,
  },
})