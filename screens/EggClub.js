import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';
import CommonHeader from '../components/CommonHeader';
import Questions from '../components/QuestionFaq';

const EggClub = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <CommonHeader title="Egg Club" />
      <ScrollView style={{padding: 4}} showsVerticalScrollIndicator={false}>
        <View
          style={{width: '100%', height: 130, padding: 5, marginBottom: 10}}>
          <Image
            source={{
              uri: 'https://i.ibb.co/MGLZyHZ/Screenshot-2023-02-15-151722.png',
            }}
            style={{width: '100%', height: '100%', borderRadius: 10}}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.text}>
          Thank you for being a loyal customer. It is now our turn to give back.
          Every customer of Fast Grocer is eligible for Egg Club membership.
        </Text>
        <Text style={styles.text}>
          You can become a member by qualifying for one of the three Tiers -
          Bronze, Silver or Gold, based on your monthly spend on Fast Grocer.
          Once you qualify for any of the three tiers, you will start earning
          points and start getting free deliveries.
        </Text>
        <Text style={styles.text}>
          Points can be converted to Fast Grocer credit, or coming soon, be used
          to avail exclusive offers.
        </Text>
        <View style={{padding: 4}}>
          <Text
            style={{
              fontSize: 17,
              marginLeft: 5,
              fontWeight: 'bold',
              color: '#000',
            }}>
            Tiers
          </Text>
          <View
            style={{width: '100%', height: 290, padding: 5, marginBottom: 10}}>
            <Image
              source={{
                uri: 'https://i.ibb.co/dKcX54C/Screenshot-2023-02-15-152901.png',
              }}
              style={{width: '100%', height: '100%', borderRadius: 10}}
              resizeMode="cover"
            />
          </View>
          <Text
            style={{
              fontSize: 17,
              marginLeft: 5,
              fontWeight: 'bold',
              color: '#000',
              marginBottom: 5,
            }}>
            FAQ
          </Text>

          <View style={{marginBottom: 30}}>
            <Questions
              answer="Egg Club tier status is awarded purely based on your monthly spend on Chaldal - there are no other requirements!"
              question="What are the requirements to earning an Egg Club tier status?"
            />
            <Questions
              answer="If you already had tier status at the time you placed your order, your points will be awarded usually a few hours after your order is delivered. In extraordinary cases, it may get delayed by up to 24 hours."
              question="When will I receive my Egg Club points?"
            />
            <Questions
              answer="Your Egg Club tier status (Bronze, Silver and Gold) gets immediately activated meeting the threshold requirements of each tier, and your status remains valid until the end of the next calendar month"
              question="How long is my Egg Club tier status valid for?"
            />
            <Questions
              answer="Simply spend at least the threshold amount for each tier to extend your membership for the next calendar month.
              For example, if you are currently a Silver member since September 2023, your status is valid till the end of October 2023.
              In October 2023, if you spend between ৳ 5,000 - ৳ 10,000 you will move down to Bronze status for November 2023.
              In October 2023, if you spend between ৳ 10,000 - ৳ 15,000, you will maintain your Silver status through till the end of November 2023.
              In October 2023, if you spend more than ৳ 15,000, you will be immediately upgraded to Gold status, which will be retained till the end of November 2023.
              If you spend less than ৳ 5,000 in October 2023, you will lose your Egg Club status for November 2023, unless you spend ৳ 5,000 or above in November 2023."
              question="How do I continue to retain my Egg Club tier status?"
            />
            <Questions
              answer="Simply spend at least the threshold amount for each status to regain that status. The benefits of your status will be applicable from your next order onwards."
              question="If I lose my Egg Club tier status, how do I regain it?"
            />
            <Questions
              answer="Simply spend at least the threshold amount for each status to regain that status. The benefits of your status will be applicable from your next order onwards."
              question="If I lose my Egg Club tier status, how do I regain it?"
            />
            <Questions
              answer="Each point in your balance converts to ৳ 1."
              question="How much credit can I redeem my points for?"
            />
            <Questions
              answer="Returning products will reduce your total spend, and a corresponding number of points will be deducted from your balance. Your status may get revoked if your total spend reduces based on the various thresholds for each tier."
              question="Will my points or my status get revoked if I return products?"
            />
            <Questions
              answer="You will start earning points for any order that you place after having earned the Bronze, Silver or Gold status."
              question="When will I become eligible for points?"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EggClub;

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    fontWeight: '400',
    color: '#000',
    marginBottom: 15,
    textAlign: 'center',
  },
});
