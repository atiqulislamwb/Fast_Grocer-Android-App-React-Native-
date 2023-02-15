import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CommonHeader from '../components/CommonHeader';
import Faq from '../components/Faq.jsx';
import OurStory from '../components/OurStory';
import Team from '../components/Team';
import Career from '../components/Career';
import ContactUs from '../components/ContactUs';
import PrivacyPolicy from '../components/PrivacyPolicy';
import Terms from '../components/Terms';

const Help = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = tab => {
    setActiveTab(tab);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <CommonHeader title="Help" />
      <View style={{width: '100%', height: 130, padding: 5}}>
        <Image
          source={{
            uri: 'https://i.ibb.co/2s5T2HD/istockphoto-903568822-612x612.jpg',
          }}
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
        />
      </View>
      {/* tab button */}
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => handleTabChange('tab1')}>
          <Text
            style={{
              ...styles.text,
              color: activeTab === 'tab1' ? '#EF691E' : '#64748B',
              borderBottomColor: activeTab === 'tab1' ? '#EF691E' : '#CBD5E1',
              borderBottomWidth: activeTab === 'tab1' ? 2 : 0,
            }}>
            FAQ
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabChange('tab2')}>
          <Text
            style={{
              ...styles.text,
              color: activeTab === 'tab2' ? '#EF691E' : '#64748B',
              borderBottomColor: activeTab === 'tab2' ? '#EF691E' : null,
              borderBottomWidth: activeTab === 'tab2' ? 2 : 0,
            }}>
            Our Story
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabChange('tab3')}>
          <Text
            style={{
              ...styles.text,
              color: activeTab === 'tab3' ? '#EF691E' : '#64748B',
              borderBottomColor: activeTab === 'tab3' ? '#EF691E' : null,
              borderBottomWidth: activeTab === 'tab3' ? 2 : 0,
            }}>
            Team
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabChange('tab4')}>
          <Text
            style={{
              ...styles.text,
              color: activeTab === 'tab4' ? '#EF691E' : '#64748B',
              borderBottomColor: activeTab === 'tab4' ? '#EF691E' : null,
              borderBottomWidth: activeTab === 'tab4' ? 2 : 0,
            }}>
            Career
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabChange('tab5')}>
          <Text
            style={{
              ...styles.text,
              color: activeTab === 'tab5' ? '#EF691E' : '#64748B',
              borderBottomColor: activeTab === 'tab5' ? '#EF691E' : null,
              borderBottomWidth: activeTab === 'tab5' ? 2 : 0,
            }}>
            Contact Us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabChange('tab6')}>
          <Text
            style={{
              ...styles.text,
              color: activeTab === 'tab6' ? '#EF691E' : '#64748B',
              borderBottomColor: activeTab === 'tab6' ? '#EF691E' : null,
              borderBottomWidth: activeTab === 'tab6' ? 2 : 0,
            }}>
            Privacy Policy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabChange('tab7')}>
          <Text
            style={{
              ...styles.text,
              color: activeTab === 'tab7' ? '#EF691E' : '#64748B',
              borderBottomColor: activeTab === 'tab7' ? '#EF691E' : null,
              borderBottomWidth: activeTab === 'tab7' ? 2 : 0,
            }}>
            Terms of Use
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{padding: 13, marginTop: 10}}>
        <View>{activeTab === 'tab1' && <Faq />}</View>
        <View>{activeTab === 'tab2' && <OurStory />}</View>
        <View>{activeTab === 'tab3' && <Team />}</View>
        <View>{activeTab === 'tab4' && <Career />}</View>
        <View>{activeTab === 'tab5' && <ContactUs />}</View>
        <View>{activeTab === 'tab6' && <PrivacyPolicy />}</View>
        <View>{activeTab === 'tab7' && <Terms />}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 6,
    marginTop: 5,
    paddingBottom: 5,
  },
  text: {
    fontSize: 11,
    fontWeight: '600',
    paddingBottom: 4,
  },
});
export default Help;
