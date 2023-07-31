import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, Color, FontFamily, Border } from "../styles/PaymentStyles";

const TransferMoney = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.transferMoney}>
      <Pressable style={styles.backarrow} onPress={() => {navigation.goBack()}}>
        <View style={styles.backarrowChild} />
        <Image
          style={[styles.chevronLeftIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/chevronleft.png")}
        />
      </Pressable>
      <Text style={styles.paymentMethod}>Payment Method</Text>
      <View style={styles.transferMoneyChild} />
      <View style={[styles.bankBuildingParent, styles.parentFlexBox]}>
        <Image
          style={styles.bankBuildingIcon}
          resizeMode="cover"
          source={require("../assets/bank_building.png")}
        />
        <Text style={[styles.bank, styles.bankTypo]}>Bank</Text>
        <Image
          style={[styles.forwardIcon, styles.forwardIconLayout]}
          resizeMode="cover"
          source={require("../assets/forward.png")}
        />
      </View>
      <View style={[styles.exchangeRupeeParent, styles.parentFlexBox]}>
        <Image
          style={styles.bankBuildingIcon}
          resizeMode="cover"
          source={require("../assets/exchange_rupee.png")}
        />
        <Text style={[styles.addUpi, styles.bankTypo]}>Add UPI</Text>
        <Image
          style={[styles.forwardIcon1, styles.forwardIconLayout]}
          resizeMode="cover"
          source={require("../assets/forward.png")}
        />
      </View>
      <View style={styles.transferMoneyItem} />
      <Text style={[styles.mobileNumber, styles.trasictionTypo]}>
        Mobile number : +91-9943355652
      </Text>
      <Text
        style={[styles.accountType, styles.trasictionTypo]}
      >{`Account Type : UPI `}</Text>
      <Text
        style={[styles.trasictionDate, styles.trasictionTypo]}
      >{`Trasiction Date : 12/06/2023 `}</Text>
      <Text
        style={[styles.trasictionDate1, styles.trasictionTypo]}
      >{`Trasiction Date : 12/06/2023 `}</Text>
      <Text
        style={[styles.amountClaimed, styles.trasictionTypo]}
      >{`Amount claimed :  100.00 INR `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  parentFlexBox: {
    alignItems: "center",
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_5xs,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  bankTypo: {
    zIndex: 1,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.dimgray,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: -0.3,
  },
  forwardIconLayout: {
    zIndex: 0,
    height: 24,
    width: 28,
  },
  trasictionTypo: {
    left: 43,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: -0.3,
    position: "absolute",
  },
  backarrowChild: {
    height: "70.71%",
    width: "70.71%",
    top: "50.49%",
    right: "29.29%",
    bottom: "-21.21%",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    transform: [
      {
        rotate: "-45.56deg",
      },
    ],
    left: "0%",
    position: "absolute",
  },
  chevronLeftIcon: {
    height: "37.71%",
    width: "37.71%",
    top: "31.43%",
    right: "30.86%",
    bottom: "30.86%",
    left: "31.43%",
  },
  backarrow: {
    top: 66,
    left: 27,
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
    fontFamily: FontFamily.robotoRegular,
    color: "#000",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    textAlign: "center",
    letterSpacing: -0.3,
    fontSize: FontSize.size_mini,
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
    top: 0,
    left: 0,
    backgroundColor: "#fefeff",
    width: 390,
    height: 44,
    position: "absolute",
  },
  paymentMethod: {
    top: 82,
    left: 104,
    color: Color.dimgray,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: -0.3,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  transferMoneyChild: {
    top: 226,
    left: 12,
    borderStyle: "solid",
    borderColor: "#eaeaea",
    borderTopWidth: 1,
    width: 371,
    height: 1,
    position: "absolute",
  },
  bankBuildingIcon: {
    width: 30,
    height: 30,
    zIndex: 2,
  },
  bank: {
    marginLeft: 120,
  },
  forwardIcon: {
    marginLeft: 120,
  },
  bankBuildingParent: {
    marginLeft: -172,
    top: 176,
    width: 343,
  },
  addUpi: {
    marginLeft: 114,
  },
  forwardIcon1: {
    marginLeft: 114,
  },
  exchangeRupeeParent: {
    marginLeft: -173,
    top: 233,
    width: 355,
  },
  transferMoneyItem: {
    top: 353,
    left: 23,
    backgroundColor: "#f5f5f5",
    width: 349,
    height: 221,
    position: "absolute",
    borderRadius: Border.br_13xl,
  },
  mobileNumber: {
    top: 406,
    color: Color.dimgray,
  },
  accountType: {
    top: 372,
    color: "#2539ff",
  },
  trasictionDate: {
    top: 437,
    color: Color.dimgray,
  },
  trasictionDate1: {
    top: 471,
    color: Color.dimgray,
  },
  amountClaimed: {
    top: 502,
    color: Color.dimgray,
  },
  transferMoney: {
    backgroundColor: "#fff",
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_13xl,
  },
});

export default TransferMoney;
