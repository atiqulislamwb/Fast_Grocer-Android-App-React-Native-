import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  LayoutAnimation,
} from 'react-native';
import React, {useState} from 'react';

import CommonHeader from '../components/CommonHeader';
import Questions from '../components/QuestionFaq';
const Works = ({number, title}) => {
  return (
    <View
      style={{
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 14,
        marginLeft: 20,
      }}>
      <View
        style={{
          width: 38,
          height: 38,
          borderRadius: 25,
          backgroundColor: '#FBBF24',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 12, fontWeight: '400', color: '#000'}}>
          {number}
        </Text>
      </View>
      <View style={{width: '90%'}}>
        <Text style={{fontSize: 12, fontWeight: '400', color: '#000'}}>
          {title}
        </Text>
      </View>
    </View>
  );
};

const EarnReward = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <CommonHeader title="Referral Program" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{width: '100%', height: 300}}>
          <Image
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
            source={{
              uri: 'https://i.ibb.co/Sc6qkRQ/Screenshot-2023-02-13-194408.png',
            }}
          />
        </View>
        <View style={{padding: 18}}>
          <Text style={{fontSize: 17, color: '#79AB42'}}>
            Fast Grocer Referral Program
          </Text>
          <Text
            style={{
              fontStyle: 'italic',
              fontSize: 26,
              color: '#334155',
              marginTop: 10,
            }}>
            Bring a friend, Earn A reward!
          </Text>
          <Text style={{fontSize: 13, color: '#000', marginTop: 2}}>
            When you refer a new customer , you can earn up to ৳150 as Fast
            Grocer credit
          </Text>
          <TouchableOpacity
            onPress={() => Alert.alert('We Are working on it')}
            style={{
              paddingVertical: 12,
              paddingHorizontal: 25,
              backgroundColor: '#79AB42',
              width: 200,
              marginTop: 18,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#fff',
              }}>
              Join Now
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 18,
            backgroundColor: '#E2E8F0',
          }}>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000',
            }}>
            How it works
          </Text>
          <Works
            number={1}
            title="You will get a personal unique Referral Code after joining the program"
          />
          <Works
            number={2}
            title="Share your personal Referral Code with your friends and family via social media"
          />
          <Works
            number={3}
            title="Earn rewards if someone uses your code when placing an order at Fast Grocer"
          />
        </View>
        <View style={{width: '100%', height: 300}}>
          <Image
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
            source={{
              uri: 'https://i.ibb.co/Yb3rmZ7/Screenshot-2023-02-13-194330.png',
            }}
          />
        </View>
        <View style={{padding: 18}}>
          <Text
            style={{
              fontSize: 15,
              borderBottomColor: '#E2E8F0',
              borderBottomWidth: 1,
              color: '#79AB42',
              paddingBottom: 7,
            }}>
            Fast Grocer Referral program FAQ{' '}
          </Text>
          <Questions
            question="Who is eligible to be a Referral Publisher?"
            answer="Anyone may be a Referral Publisher who:is a legal resident of Bangladesh,
            is the age of not less than 18 years, and,
            has a Fast Grocer account in good standing.
            Referral Publishers can be any type of Fast Grocer 
            user;however, they cannot have more than one 
            account for each Fast Grocer product or service."
          />
          <Questions
            question="Who is eligible to be a Referral Customer?"
            answer="Your friends, family, and other people you know (but not yourself) may be eligible to be Referral Customers. To determine eligibility, keep in mind the following stipulations:

            Eligible Referral Customers are those who order services through the Fast Grocer app or website.
            
            To receive a Referral Reward for referring someone who orders services through the Fast Grocer app or website, your Referral Customer must:
            
            be a new Fast Grocer user of that service,
            meet the conditions Fast Grocer has for using the app, and,
            complete the actions required by the specific referral program (purely for example purposes, order groceries through the Fast Grocer app or any other action as applicable).
            
            Fast Grocer wants you to share your referral code and earn Referral Rewards, but referral codes must be used only for personal and non-commercial purposes. This means that you can share your referral code only with people you know"
          />

          <Questions
            question="How do I earn my Referral Reward as a Referral Publisher?"
            answer="As long as you and your Referral Customer follow the terms 
            and conditions governing your use of the Fast Grocer app and website, 
            and you have an active account, you should receive your Referral 
            Reward a minimum of 7 days after your Referral Customer uses your 
            code to complete orders with a minimum amount.
            
            Fast Grocer reserves the right to set a limit on the number of times
            you may use your referral code. The requirements for receiving, 
            and the amounts of, 
            Referral Rewards are subject to change at Fast Grocer's sole discretion.
            
            Referral Rewards in the form of Fast Grocer Credits are not transferable,
             have no cash value,
             and may expire after a specific time period.
            "
          />

          <Questions
            question="How can I earn a Referral Reward as a Referral Customer?"
            answer="The Fast Grocer users who are Referral Customers will get an amount
             as Referral Reward after completing the order. It will take a minimum of
              7 days to get the reward credited to their Fast Grocer account. A Referral 
              Customer may use the referral code maximum of 3 times within a specific
               time frame.
               
               Fast Grocer reserves the right to set a limit on the number of times you may 
               use any referral code. The requirements for receiving, and the amounts of,
                Referral Rewards are subject to change at Fast Grocer's sole discretion.
                Referral Rewards in the form of Fast Grocer Credits are not transferable, 
                have no cash value, and may expire after a specific time period.
               
               
               "
          />

          <Questions
            question="What Fast Grocer doesn’t allow?"
            answer="Duplicate, sell, or transfer your referral code in any manner or make it available to the general public such as by printing it on business cards; posting it on a coupon website, job website or using it as part of a job application, including but not limited to the following website and applications Amazon, eBay, Fiverr, Craigslist, RetailMeNot, Reddit, Wikipedia, Gumtree, Groupon or using paid social media or paid search website
            Try to get Referral Customers by spamming, bulk emailing, or sending large numbers of unsolicited emails. The only people you should be emailing are people you know personally;
            Use, display or manipulate Fast Grocer intellectual property (such as Fast Grocer's logos, trademarks, and copyright-protected works) in any way, except as to identify yourself as a Fast Grocer user, Fast Grocer Referral Publisher, or Referral Publisher for Fast Grocer;
            Create or register any businesses, URLs, domain names, software application names or titles, or social media handles or profiles that include the word 
        "
          />
        </View>
        <View style={{marginLeft: 20, marginBottom: 50}}>
          <TouchableOpacity
            onPress={() => Alert.alert('We Are working on it')}
            style={{
              paddingVertical: 12,
              paddingHorizontal: 25,
              backgroundColor: '#79AB42',
              width: 200,
              marginTop: 18,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#fff',
              }}>
              Join Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EarnReward;

const styles = StyleSheet.create({});
