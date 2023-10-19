import {View, Text, Pressable, Row, Divider, Image, Stack} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import BottomSheet from '../bottomSheet/BottomSheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AlertModal from '../Modal/AlertModal';
import AButtons from '../button/AButtons';
import {useNavigation} from '@react-navigation/native';

const ProfilePicComp = props => {
  const navigation = useNavigation();
  const bottomSheetRef = React.useRef(null);
  const [active, setActive] = React.useState(false);
  const [id, setId] = React.useState('1');
  const [imgurl1, setImgurl1] = React.useState();
  const [imgurl2, setImgurl2] = React.useState();
  const [imgurl3, setImgurl3] = React.useState();
  const [imgurl4, setImgurl4] = React.useState();
  const [imgurl5, setImgurl5] = React.useState();
  const [imgurl6, setImgurl6] = React.useState();
  const [imgurl7, setImgurl7] = React.useState();
  const [imgurl8, setImgurl8] = React.useState();
  const [camera, setCamera] = React.useState();
  const [imageUrl, setImageUrl] = React.useState();
  const openBottomSheet = (uid: string) => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.open();
      setId(uid);

      //   setTimeout(() => {
      //     // setActive(true);
      //   }, 1000);
    }
    //  (bottomSheetRef.current) {
    //     bottomSheetRef.current.close()
    // console.error(id);
    //   setPostId(id);
  };

  const handlePickImage = React.useCallback(async () => {
    const options = {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        // console.log('User cancelled image picker');
      } else if (response.error) {
        // console.log('Error:', response.error);
        // setMediaType(ContentType.NONE);
      } else if (response.customButton) {
        // console.log('User tapped custom button:', response.customButton);
      } else {
        let source = response.assets?.[0]?.base64 || '';
        // console.log("source",source);
        switch (id) {
          case '1':
            // code block
            console.log('id', id);
            setImageUrl(`data:image/png;base64,${source}`);

            break;
          case '2':
            // code block
            console.log('id', id);
            setImgurl1(`data:image/png;base64,${source}`);

            break;
          case '3':
            console.log('id', id);
            setImgurl2(`data:image/png;base64,${source}`);

            break;
          case '4':
            console.log('id', id);
            setImgurl3(`data:image/png;base64,${source}`);

            break;
          case '5':
            console.log('id', id);
            setImgurl4(`data:image/png;base64,${source}`);

            break;
          case '6':
            console.log('id', id);
            setImgurl5(`data:image/png;base64,${source}`);

            break;
          case '7':
            console.log('id', id);
            setImgurl6(`data:image/png;base64,${source}`);

            break;
          case '8':
            console.log('id', id);
            setImgurl7(`data:image/png;base64,${source}`);

            break;
          case '9':
            console.log('id', id);
            setImgurl8(`data:image/png;base64,${source}`);

            break;

          // code block
        }
      }
    });
  }, []);
  const handleCamera = React.useCallback(async () => {
    const options = {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: true,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        // console.log('User cancelled image picker');
      } else if (response.error) {
        // console.log('Error:', response.error);
        // setMediaType(ContentType.NONE);
      } else if (response.customButton) {
        // console.log('User tapped custom button:', response.customButton);
      } else {
        let source = response.assets?.[0]?.base64 || '';
        // console.log("source",source);
        switch (id) {
          case '1':
            // code block
            setImageUrl(`data:image/png;base64,${source}`);

            break;
          case '2':
            // code block
            setImgurl1(`data:image/png;base64,${source}`);

            break;
          case '3':
            setImgurl2(`data:image/png;base64,${source}`);

            break;
          case '4':
            setImgurl3(`data:image/png;base64,${source}`);

            break;
          case '5':
            setImgurl4(`data:image/png;base64,${source}`);

            break;
          case '6':
            setImgurl5(`data:image/png;base64,${source}`);

            break;
          case '7':
            setImgurl6(`data:image/png;base64,${source}`);

            break;
          case '8':
            setImgurl7(`data:image/png;base64,${source}`);
            break;
          case '9':
            setImgurl8(`data:image/png;base64,${source}`);
            break;

          // code block
        }

        // Process the selected video
      }
    });
  }, []);

  return (
    <>
      <View flexDir={'row'} flexWrap={'wrap'} flex={1}>
        {/* {props?.data?.map((item, index) => { */}
        {/* return ( */}
        <Pressable
          onPress={() => {
            openBottomSheet('1');
          }}>
          <View
            mb={4}
            borderStyle={'dashed'}
            borderWidth={imageUrl ? 0 : 2}
            mr={5}
            bg={'grey.500'}
            borderColor={'txtColor'}
            h={'24'}
            borderRadius={20}
            alignItems={'center'}
            justifyContent={'center'}
            w={20}>
            {imageUrl ? (
              <>
                <Stack>
                  <Image
                    source={{
                      uri: imageUrl,
                    }}
                    alt={'img'}
                    h={24}
                    w={20}
                    borderRadius={20}
                    resizeMode={'contain'}
                  />
                  <View
                    position={'absolute'}
                    right={-4}
                    bg={'pro'}
                    rounded={'full'}
                    top={-7}

                    // borderWidth={2}
                  >
                    <Entypo name={'cross'} color={'black'} size={18} />
                  </View>
                </Stack>
              </>
            ) : (
              <AntDesign name="pluscircleo" color={'#CCCCCC'} size={30} />
            )}
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            openBottomSheet('2');
          }}>
          <View
            mb={4}
            borderStyle={'dashed'}
            borderWidth={imgurl1 ? 0 : 2}
            mr={5}
            bg={'grey.500'}
            borderColor={'txtColor'}
            h={'24'}
            borderRadius={20}
            alignItems={'center'}
            justifyContent={'center'}
            w={20}>
            {imgurl1 ? (
              <>
                <Stack>
                  <Image
                    source={{
                      uri: imgurl1,
                    }}
                    alt={'img'}
                    h={24}
                    w={20}
                    borderRadius={20}
                    resizeMode={'contain'}
                  />
                  <Pressable>
                    <View
                      position={'absolute'}
                      right={-4}
                      bg={'pro'}
                      rounded={'full'}
                      bottom={20}

                      // borderWidth={2}
                    >
                      <Entypo name={'cross'} color={'black'} size={18} />
                    </View>
                  </Pressable>
                </Stack>
              </>
            ) : (
              <AntDesign name="pluscircleo" color={'#CCCCCC'} size={30} />
            )}
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            openBottomSheet('3');
          }}>
          <View
            mb={4}
            borderStyle={'dashed'}
            borderWidth={imgurl2 ? 0 : 2}
            mr={5}
            bg={'grey.500'}
            borderColor={'txtColor'}
            h={'24'}
            borderRadius={20}
            alignItems={'center'}
            justifyContent={'center'}
            w={20}>
            {imgurl2 ? (
              <>
                <Stack>
                  <Image
                    source={{
                      uri: imgurl2,
                    }}
                    alt={'img'}
                    h={24}
                    w={20}
                    borderRadius={20}
                    resizeMode={'contain'}
                  />
                  <View
                    position={'absolute'}
                    right={-4}
                    bg={'pro'}
                    rounded={'full'}
                    top={-7}

                    // borderWidth={2}
                  >
                    <Entypo name={'cross'} color={'black'} size={18} />
                  </View>
                </Stack>
              </>
            ) : (
              <AntDesign name="pluscircleo" color={'#CCCCCC'} size={30} />
            )}
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            openBottomSheet('4');
          }}>
          <View
            mb={4}
            borderStyle={'dashed'}
            borderWidth={imgurl3 ? 0 : 2}
            mr={5}
            bg={'grey.500'}
            borderColor={'txtColor'}
            h={'24'}
            borderRadius={20}
            alignItems={'center'}
            justifyContent={'center'}
            w={20}>
            {imgurl3 ? (
              <>
                <Stack>
                  <Image
                    source={{
                      uri: imgurl3,
                    }}
                    alt={'img'}
                    h={24}
                    w={20}
                    borderRadius={20}
                    resizeMode={'contain'}
                  />
                  <View
                    position={'absolute'}
                    right={-4}
                    bg={'pro'}
                    rounded={'full'}
                    top={-7}

                    // borderWidth={2}
                  >
                    <Entypo name={'cross'} color={'black'} size={18} />
                  </View>
                </Stack>
              </>
            ) : (
              <AntDesign name="pluscircleo" color={'#CCCCCC'} size={30} />
            )}
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            openBottomSheet('5');
          }}>
          <View
            mb={4}
            borderStyle={'dashed'}
            borderWidth={imgurl4 ? 0 : 2}
            mr={5}
            bg={'grey.500'}
            borderColor={'txtColor'}
            h={'24'}
            borderRadius={20}
            alignItems={'center'}
            justifyContent={'center'}
            w={20}>
            {imgurl4 ? (
              <>
                <Stack>
                  <Image
                    source={{
                      uri: imgurl4,
                    }}
                    alt={'img'}
                    h={24}
                    w={20}
                    borderRadius={20}
                    resizeMode={'contain'}
                  />
                  <View
                    position={'absolute'}
                    right={-4}
                    bg={'pro'}
                    rounded={'full'}
                    top={-7}

                    // borderWidth={2}
                  >
                    <Entypo name={'cross'} color={'black'} size={18} />
                  </View>
                </Stack>
              </>
            ) : (
              <AntDesign name="pluscircleo" color={'#CCCCCC'} size={30} />
            )}
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            openBottomSheet('6');
          }}>
          <View
            mb={4}
            borderStyle={'dashed'}
            borderWidth={imgurl5 ? 0 : 2}
            mr={5}
            bg={'grey.500'}
            borderColor={'txtColor'}
            h={'24'}
            borderRadius={20}
            alignItems={'center'}
            justifyContent={'center'}
            w={20}>
            {imgurl5 ? (
              <>
                <Stack>
                  <Image
                    source={{
                      uri: imgurl5,
                    }}
                    alt={'img'}
                    h={24}
                    w={20}
                    borderRadius={20}
                    resizeMode={'contain'}
                  />
                  <View
                    position={'absolute'}
                    right={-4}
                    bg={'pro'}
                    rounded={'full'}
                    top={-7}

                    // borderWidth={2}
                  >
                    <Entypo name={'cross'} color={'black'} size={18} />
                  </View>
                </Stack>
              </>
            ) : (
              <AntDesign name="pluscircleo" color={'#CCCCCC'} size={30} />
            )}
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            openBottomSheet('7');
          }}>
          <View
            mb={4}
            borderStyle={'dashed'}
            borderWidth={imgurl6 ? 0 : 2}
            mr={5}
            bg={'grey.500'}
            borderColor={'txtColor'}
            h={'24'}
            borderRadius={20}
            alignItems={'center'}
            justifyContent={'center'}
            w={20}>
            {imgurl6 ? (
              <>
                <Stack>
                  <Image
                    source={{
                      uri: imgurl6,
                    }}
                    alt={'img'}
                    h={24}
                    w={20}
                    borderRadius={20}
                    resizeMode={'contain'}
                  />
                  <View
                    position={'absolute'}
                    right={-4}
                    bg={'pro'}
                    rounded={'full'}
                    top={-7}

                    // borderWidth={2}
                  >
                    <Entypo name={'cross'} color={'black'} size={18} />
                  </View>
                </Stack>
              </>
            ) : (
              <AntDesign name="pluscircleo" color={'#CCCCCC'} size={30} />
            )}
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            openBottomSheet('8');
          }}>
          <View
            mb={4}
            borderStyle={'dashed'}
            borderWidth={imgurl7 ? 0 : 2}
            mr={5}
            bg={'grey.500'}
            borderColor={'txtColor'}
            h={'24'}
            borderRadius={20}
            alignItems={'center'}
            justifyContent={'center'}
            w={20}>
            {imgurl7 ? (
              <>
                <Stack>
                  <Image
                    source={{
                      uri: imgurl7,
                    }}
                    alt={'img'}
                    h={24}
                    w={20}
                    borderRadius={20}
                    resizeMode={'contain'}
                  />
                  <View
                    position={'absolute'}
                    right={-4}
                    bg={'pro'}
                    rounded={'full'}
                    top={-7}

                    // borderWidth={2}
                  >
                    <Entypo name={'cross'} color={'black'} size={18} />
                  </View>
                </Stack>
              </>
            ) : (
              <AntDesign name="pluscircleo" color={'#CCCCCC'} size={30} />
            )}
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            openBottomSheet('9');
          }}>
          <View
            mb={4}
            borderStyle={'dashed'}
            borderWidth={imgurl8 ? 0 : 2}
            mr={5}
            bg={'grey.500'}
            borderColor={'txtColor'}
            h={'24'}
            borderRadius={20}
            alignItems={'center'}
            justifyContent={'center'}
            w={20}>
            {imgurl8 ? (
              <>
                <Stack>
                  <Image
                    source={{
                      uri: imgurl8,
                    }}
                    alt={'img'}
                    h={24}
                    w={20}
                    borderRadius={20}
                    resizeMode={'contain'}
                  />
                  <View
                    position={'absolute'}
                    right={-4}
                    bg={'pro'}
                    rounded={'full'}
                    top={-7}

                    // borderWidth={2}
                  >
                    <Entypo name={'cross'} color={'black'} size={18} />
                  </View>
                </Stack>
              </>
            ) : (
              <AntDesign name="pluscircleo" color={'#CCCCCC'} size={30} />
            )}
          </View>
        </Pressable>
      </View>
      <BottomSheet
        defaultOff={true}
        height={'20%'}
        width="100%"
        openBottom={bottomSheetRef}>
        {/* <View> */}
        <Pressable onPress={() => bottomSheetRef.current.close()}>
          <View
            position={'absolute'}
            right={2}
            top={5}
            // borderWidth={2}
            rounded={'full'}>
            <Entypo name={'cross'} color={'white'} size={18} />
          </View>
        </Pressable>
        <Pressable
          mt={10}
          onPress={() => {
            handleCamera();
            setCamera(true);
            bottomSheetRef.current.close();
          }}>
          <Row alignItems={'center'}>
            <Feather name={'camera'} size={20} color={'#F94449'} />
            <Text
              mx={2}
              fontSize={16}
              color={'white'}
              fontFamily={'Jost-Medium'}>
              Upload from Camera
            </Text>
          </Row>
        </Pressable>
        <Divider my={4} />
        <Pressable
          onPress={() => {
            handlePickImage();
            setCamera(false);
            bottomSheetRef.current.close();
          }}>
          <Row alignItems={'center'}>
            <MaterialCommunityIcons
              name={'image-outline'}
              size={20}
              color={'#F94449'}
            />
            <Text
              mx={2}
              fontSize={16}
              color={'white'}
              fontFamily={'Jost-Medium'}>
              Upload from Gallery
            </Text>
          </Row>
        </Pressable>
        {/* </View> */}
      </BottomSheet>
      <AlertModal
        modalVisible={active}
        heading={'Error'}
        message={'Upload atleast one image to continue'}
        onPress={() => {
          setActive(false);
        }}></AlertModal>
      <View mx={5} ml={-2} my={5}>
        <AButtons
          label={props?.label}
          onPress={() => {
            if (
              !props?.fromPreview &&
              !imageUrl &&
              !imgurl1 &&
              !imgurl2 &&
              !imgurl3 &&
              !imgurl4 &&
              !imgurl5 &&
              !imgurl6 &&
              !imgurl7 &&
              !imgurl8
            ) {
              setActive(true);
            } else if (props?.fromPreview) {
              navigation.navigate('ProfileProcessing');
            } else {
              // let fromAddPhoto=true;
              navigation.navigate('AddProfile', imageUrl);
            }
          }}
        />
      </View>
    </>
  );
};
export default ProfilePicComp;