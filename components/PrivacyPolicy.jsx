import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <View style={{marginBottom: 20}}>
      <Text style={styles.text}>
        When you use our Website, we collect and store your personal information
        which is provided by you from time to time. Our primary goal in doing so
        is to provide you a safe, efficient, smooth and customized experience.
        This allows us to provide services and features that most likely meet
        your needs, and to customize our website to make your experience safer
        and easier. More importantly, while doing so, we collect personal
        information from you that we consider necessary for achieving this
        purpose.{' '}
      </Text>
      <Text style={styles.text2}>
        Below are some of the ways in which we collect and store your
        information:{' '}
      </Text>
      <Text style={styles.text2}>
        We receive and store any information you enter on our website or give us
        in any other way. We use the information that you provide for such
        purposes as responding to your requests, customizing future shopping for
        you, improving our stores, and communicating with you. We also store
        certain types of information whenever you interact with us. For example,
        like many websites, we use "cookies," and we obtain certain types of
        information when your web browser accesses Fast Grocer.com or
        advertisements and other content served by or on behalf of Fast
        Grocer.com on other websites. When signing up via Facebook, we collect
        your Name and Email (provided by Facebook) as part of your Fast Grocer
        account Information. To help us make e-mails more useful and
        interesting, we often receive a confirmation when you open e-mail from
        Fast Grocer if your computer supports such capabilities.
      </Text>
      <Text style={styles.text}>
        We release account and other personal information when we believe
        release is appropriate to comply with the law; enforce or apply our
        Terms of Use and other agreements; or protect the rights, property, or
        safety of Fast Grocer.com, our users, or others. This includes
        exchanging information with other companies and organizations for fraud
        protection.
      </Text>
    </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 15,
    marginBottom: 15,
  },
  text2: {
    color: '#334155',
    fontSize: 13,
    marginBottom: 15,
  },
});
