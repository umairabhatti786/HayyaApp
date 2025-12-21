import React, {useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import ScreenLayout from "../../../components/ScreenLayout";
import { appStyles } from "../../../utils/GlobalStyles";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import { theme } from "../../../utils/Themes";
import CustomButtom from "../../../components/Button";
import CopyIcon from "../../../assets/svgs/copy.svg";
import ShareIcon from "../../../assets/svgs/share.svg";
import ClockIcon from "../../../assets/svgs/clock.svg";
import { joinRoomPeople } from "../../../utils/Data";
import AppHeader from "../../../components/AppHeader";

const CreateRoomLaunchScreen = ({ navigation, route }: any) => {
  const [isLaunchLoading, setIsLaunchLoading] = useState(false);

  return (
    <>
      <ScreenLayout
        style={{
          paddingBottom: sizeHelper.calHp(70),
          gap: sizeHelper.calHp(50),
        }}
        paddingTop={10}
      >
        <AppHeader />

        <View style={styles.joinRoom_container}>
          <CustomText
            text={`5 have joined`}
            size={25}
            fontFam={fonts.InterTight_SemiBold}
            fontWeight={"600"}
          />

          <View
            style={{
              ...appStyles.row,
              gap: sizeHelper.calWp(20),
              flexWrap: "wrap",
            }}
          >
            {joinRoomPeople.map((item) => (
              <View
                key={item.id}
                style={{ alignItems: "center", width: "31%" }}
              >
                <View
                  style={{
                    width: sizeHelper.calWp(130),
                    height: sizeHelper.calWp(130),
                    borderRadius: sizeHelper.calWp(130),
                    overflow: "hidden",
                  }}
                >
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={item.image}
                  />
                </View>
                <CustomText
                  text={item.name}
                  size={20}
                  color={theme.colors.secondry}
                  style={{ marginVertical: sizeHelper.calHp(8) }}
                  fontFam={fonts.InterTight_Medium}
                  fontWeight={"600"}
                  numberOfLines={1}
                />
              </View>
            ))}
          </View>
        </View>
        <View style={{ flex: 1 }}>
          {isLaunchLoading ? (
            <View
              style={{
                flex: 1,
                gap: sizeHelper.calHp(15),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View style={styles.waiting_container}>
                <ClockIcon
                  width={sizeHelper.calWp(42)}
                  height={sizeHelper.calWp(42)}
                />
              </View>

              <CustomText
                text={`Waiting for Yassine to launch!`}
                size={28}
                fontFam={fonts.InterTight_SemiBold}
                color={theme.colors.secondry}
                fontWeight={"600"}
              />
            </View>
          ) : (
            <View style={{ gap: sizeHelper.calHp(15) }}>
              <CustomText
                text={`Invite people to your room`}
                size={28}
                fontFam={fonts.InterTight_Medium}
                color={theme.colors.secondry}
                fontWeight={"600"}
              />

              <View style={appStyles.rowjustify}>
                <View
                  style={{
                    ...appStyles.rowjustify,
                    ...styles.Invite_id_container,
                  }}
                >
                  <CustomText
                    text={`#F59ID`}
                    size={27}
                    fontFam={fonts.InterTight_Bold}
                    fontWeight="700"
                    style={{ marginLeft: sizeHelper.calWp(30) }}
                    color={theme.colors.secondry}
                  />

                  <View style={styles.copy_container}>
                    <CopyIcon
                      width={sizeHelper.calWp(42)}
                      height={sizeHelper.calWp(42)}
                    />
                  </View>
                </View>

                <CustomButtom
                  text="Share"
                  borderRadius={999}
                  bgColor={theme.colors.secondry}
                  width={"37%"}
                  height={70}
                >
                  <ShareIcon
                    width={sizeHelper.calWp(42)}
                    height={sizeHelper.calWp(42)}
                    color={theme.colors.white}
                  />
                </CustomButtom>
              </View>
            </View>
          )}
        </View>
        <CustomButtom
          textColor={theme.colors.white}
          text={isLaunchLoading ? "Start Matching" : "Launch"}
          borderRadius={999}
          bgColor={
            isLaunchLoading
              ? theme.colors.secondry + "20"
              : theme.colors.primary
          }
          onPress={() => {
            setIsLaunchLoading(true);
            setTimeout(() => {
              setIsLaunchLoading(false);

              navigation.navigate("MatchSwipesSceen");
            }, 3000);
          }}
          width={"100%"}
        ></CustomButtom>
      </ScreenLayout>
    </>
  );
};

export default CreateRoomLaunchScreen;

const styles = StyleSheet.create({
  joinRoom_container: {
    borderRadius: sizeHelper.calWp(40),
    backgroundColor: theme.colors.white,
    padding: sizeHelper.calWp(30),
    gap: sizeHelper.calHp(25),
  },
  waiting_container: {
    width: sizeHelper.calWp(80),
    height: sizeHelper.calWp(80),
    borderRadius: sizeHelper.calWp(80),
    backgroundColor: theme.colors.mustard,
    alignItems: "center",
    justifyContent: "center",
  },
  Invite_id_container: {
    borderRadius: 999,
    backgroundColor: "#FFF5E1",
    padding: sizeHelper.calWp(3),
    width: "60%",
    borderWidth: 1,
    borderColor: theme.colors.mustard + "35",
    alignItems: "center",
    justifyContent: "space-between",
  },
  copy_container: {
    width: sizeHelper.calWp(70),
    height: sizeHelper.calWp(70),
    borderRadius: sizeHelper.calWp(70),
    backgroundColor: theme.colors.mustard,
    alignItems: "center",
    justifyContent: "center",
  },
});
