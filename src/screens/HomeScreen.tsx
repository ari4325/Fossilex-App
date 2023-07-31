import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../styles/HomeStyles";
import { ScrollView } from "react-native-gesture-handler";

const Dashboard: React.FC <{ navigation: any }> = ({ navigation }) => {
  //const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={[styles.dashboard, styles.dashboardLayout]}>
      <View style={[styles.frameParent, styles.parentShadowBox]}>
        <View style={[styles.myBalanceParent, styles.wrapperLayout]}>
          <Text style={[styles.myBalance, styles.pointsTypo]}>My Balance</Text>
          <Text style={[styles.points, styles.pointsTypo]}>0 Points</Text>
        </View>
        <View style={[styles.paymentHelpOptionWrapper, styles.wrapperLayout]}>
          <Text style={styles.paymentHelp}>{`Payment & Help Option`}</Text>
        </View>
        <View style={[styles.otherWrapper, styles.wrapperLayout]}>
          <Text style={styles.paymentHelp}>Other</Text>
        </View>
        <Pressable
          style={[styles.component11, styles.componentLayout1]}
          onPress={() => {navigation.navigate('Payment')}}
        >
          <Image
            style={[styles.creditCard1Icon, styles.creditPosition]}
            resizeMode="cover"
            source={require("../assets/credit-card-1.png")}
          />
          <Text style={[styles.payment, styles.paymentClr]}>{`Payment `}</Text>
        </Pressable>
        <View style={[styles.component8, styles.componentLayout]}>
          <Image
            style={[styles.scan1Icon, styles.scan1IconPosition]}
            resizeMode="cover"
            source={require("../assets/scan-1.png")}
          />
          <Text style={[styles.scanCode, styles.scanCodeTypo]}>Scan Code</Text>
        </View>
        <View style={[styles.component9, styles.componentPosition]}>
          <Image
            style={[styles.coupon1Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/coupon-1.png")}
          />
          <Text style={[styles.couponHistory, styles.scanCodeTypo]}>
            Coupon History
          </Text>
        </View>
        <View style={styles.component10}>
          <Image
            style={[styles.keyboard11, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/keyboard.png")}
          />
        </View>
        <Text style={[styles.manualEntry, styles.scanCodeTypo]}>
          Manual Entry
        </Text>
        <View style={[styles.component12, styles.componentLayout]}>
          <Image
            style={[styles.creditCard11, styles.scan1IconPosition]}
            resizeMode="cover"
            source={require("../assets/withdraw.png")}
          />
          <Text style={[styles.withdrawal, styles.paymentTypo]}>
            withdrawal
          </Text>
        </View>
        <View style={styles.component13}>
          <Image
            style={[styles.problemSolving1Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/problem-solving-1.png")}
          />
          <Text style={[styles.helpFeedback, styles.paymentTypo]}>{`Help &
feedback`}</Text>
        </View>
        <View style={styles.component14}>
          <Image
            style={[styles.bell1Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/bell-1.png")}
          />
          <Text style={[styles.notifications, styles.scanCodeTypo]}>
            Notifications
          </Text>
        </View>
        <View style={[styles.component15, styles.componentPosition]}>
          <Image
            style={[styles.translate1Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/translate-1.png")}
          />
          <Text style={[styles.changeLanguage, styles.paymentClr]}>{`Change 
Language`}</Text>
        </View>
      </View>
      <View
        style={[styles.balanceAmountInr10000Parent, styles.parentShadowBox]}
      >
        <Text style={[styles.balanceAmount, styles.balanceAmountTypo]}>
          Balance Amount : INR 100.00
        </Text>
        <Text style={[styles.recentWithdrawal, styles.balanceAmountTypo]}>
          Recent withdrawal : INR 50.00
        </Text>
        <Text
          style={[styles.userNameMobile, styles.balanceAmountTypo]}
        >{`User Name  

Mobile Number : +91-9919921321
`}</Text>
        <Image
          style={[styles.user1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/user-1.png")}
        />
      </View>
      <Text style={styles.companyName}>Company Name</Text>
      <Image
        style={[styles.brand1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/brand-1.png")}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  dashboardLayout: {
    overflow: "hidden",
    borderRadius: Border.br_13xl,
  },
  textFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
  },
  parentShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  wrapperLayout: {
    width: 383,
    borderWidth: 1,
    borderColor: "#ececec",
    borderStyle: "solid",
    backgroundColor: Color.gray_200,
    borderTopRightRadius: Border.br_lg,
    borderTopLeftRadius: Border.br_lg,
    left: 4,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  pointsTypo: {
    color: Color.gray_300,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    fontSize: FontSize.size_2xs,
    top: 21,
    position: "absolute",
  },
  componentLayout1: {
    height: 55,
    top: 231,
  },
  creditPosition: {
    bottom: "45.45%",
    height: "54.55%",
  },
  paymentClr: {
    color: Color.dimgray_200,
    textAlign: "center",
    left: "0%",
  },
  componentLayout: {
    width: 47,
    position: "absolute",
  },
  scan1IconPosition: {
    right: "17.02%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  scanCodeTypo: {
    lineHeight: 9,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    position: "absolute",
  },
  componentPosition: {
    left: 109,
    position: "absolute",
  },
  iconPosition: {
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  paymentTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    position: "absolute",
  },
  balanceAmountTypo: {
    fontSize: FontSize.size_xs,
    color: Color.dimgray_100,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    alignItems: "flex-end",
    display: "flex",
    position: "absolute",
  },
  iconLayout: {
    width: 50,
    height: 50,
    position: "absolute",
  },
  batteryIcon: {
    height: "25.76%",
    width: "6.49%",
    top: "39.39%",
    right: "3.91%",
    bottom: "34.85%",
    left: "89.6%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  wifiIcon: {
    width: 16,
    height: 11,
  },
  mobileSignalIcon: {
    width: 18,
    height: 11,
  },
  text: {
    height: "85.71%",
    top: "9.52%",
    fontSize: 15,
    letterSpacing: -0.3,
    fontFamily: FontFamily.robotoRegular,
    color: "#000",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  timeStyle: {
    height: "47.73%",
    width: "14.4%",
    top: "27.27%",
    right: "80%",
    bottom: "25%",
    left: "5.6%",
    position: "absolute",
  },
  statusBarOnLight: {
    width: 390,
    height: 44,
    backgroundColor: Color.gray_100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  myBalance: {
    textAlign: "left",
    left: 20,
  },
  points: {
    left: 308,
    textAlign: "left",
  },
  myBalanceParent: {
    top: 0,
    borderWidth: 1,
    borderColor: "#ececec",
    borderStyle: "solid",
    backgroundColor: Color.gray_200,
    borderTopRightRadius: Border.br_lg,
    borderTopLeftRadius: Border.br_lg,
    left: 4,
  },
  paymentHelp: {
    color: Color.dimgray_100,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    fontSize: FontSize.size_2xs,
    top: 21,
    left: 20,
    position: "absolute",
  },
  paymentHelpOptionWrapper: {
    top: 161,
  },
  otherWrapper: {
    top: 331,
  },
  creditCard1Icon: {
    width: "94.75%",
    right: "0%",
    left: "5.25%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  payment: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    position: "absolute",
    top: "78.18%",
  },
  component11: {
    left: 34,
    width: 38,
    position: "absolute",
  },
  frameChild: {
    top: 504,
    left: 30,
    width: 318,
    height: 56,
    position: "absolute",
  },
  scan1Icon: {
    height: "61.54%",
    width: "68.09%",
    bottom: "38.46%",
    left: "14.89%",
  },
  scanCode: {
    top: "82.69%",
    color: Color.dimgray_100,
    textAlign: "left",
    left: "0%",
  },
  component8: {
    height: 52,
    left: 31,
    top: 74,
  },
  coupon1Icon: {
    height: "62.75%",
    width: "47.76%",
    right: "26.87%",
    bottom: "37.25%",
    left: "25.37%",
  },
  couponHistory: {
    top: "82.35%",
    color: Color.dimgray_100,
    textAlign: "left",
    left: "0%",
  },
  component9: {
    width: 67,
    height: 51,
    top: 74,
  },
  keyboard11: {
    height: "70.42%",
    width: "87.72%",
    right: "7.02%",
    bottom: "29.58%",
    left: "5.26%",
  },
  component10: {
    top: 67,
    left: 196,
    height: 50,
    width: 40,
    position: "absolute",
  },
  manualEntry: {
    height: "2.19%",
    width: "10.34%",
    top: "20.52%",
    left: "50.65%",
    color: Color.dimgray_100,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
  },
  creditCard11: {
    width: "63.83%",
    left: "19.15%",
    bottom: "45.45%",
    height: "54.55%",
  },
  withdrawal: {
    top: "78.18%",
    fontSize: FontSize.size_3xs,
    color: Color.dimgray_100,
    textAlign: "center",
    left: "0%",
  },
  component12: {
    left: 103,
    height: 55,
    top: 231,
  },
  problemSolving1Icon: {
    height: "47.62%",
    width: "57.79%",
    right: "29.71%",
    bottom: "52.38%",
    left: "12.5%",
  },
  helpFeedback: {
    top: "61.9%",
    color: Color.dimgray_100,
    textAlign: "center",
    left: "0%",
  },
  component13: {
    top: 232,
    left: 176,
    height: 63,
    width: 40,
    position: "absolute",
  },
  bell1Icon: {
    height: "58.49%",
    width: "53.57%",
    right: "23.21%",
    bottom: "41.51%",
    left: "23.21%",
  },
  notifications: {
    top: "83.02%",
    color: Color.dimgray_200,
    textAlign: "center",
    left: "0%",
  },
  component14: {
    top: 404,
    left: 25,
    width: 56,
    height: 53,
    position: "absolute",
  },
  translate1Icon: {
    height: "46.88%",
    width: "69.77%",
    right: "16.28%",
    bottom: "53.13%",
    left: "13.95%",
  },
  changeLanguage: {
    top: "62.5%",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    position: "absolute",
  },
  component15: {
    top: 401,
    width: 43,
    height: 64,
  },
  frameParent: {
    top: 264,
    borderTopLeftRadius: Border.br_13xl,
    width: 387,
    height: 580,
    backgroundColor: Color.gray_100,
    left: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
  },
  balanceAmount: {
    top: 79,
    width: 198,
    left: 100,
    fontSize: FontSize.size_xs,
  },
  recentWithdrawal: {
    top: 102,
    width: 202,
    left: 100,
    fontSize: FontSize.size_xs,
  },
  userNameMobile: {
    top: 5,
    left: 99,
    width: 275,
    height: 76,
  },
  user1Icon: {
    top: 12,
    left: 16,
  },
  balanceAmountInr10000Parent: {
    top: 115,
    backgroundColor: "#f4f4f4",
    width: 354,
    height: 136,
    left: 20,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_13xl,
  },
  companyName: {
    top: 63,
    left: 131,
    fontSize: FontSize.header2_size,
    letterSpacing: -0.4,
    fontWeight: "700",
    fontFamily: FontFamily.header2,
    color: "#80807f",
    width: 173,
    textAlign: "left",
    position: "absolute",
  },
  brand1Icon: {
    top: 56,
    left: 31,
  },
  dashboard: {
    backgroundColor: "#fff",
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default Dashboard;
