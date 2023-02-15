import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Faq = () => {
  return (
    <View style={{marginBottom: 20}}>
      <View>
        <Text style={styles.question}>Q. How does the site work? </Text>
        <Text style={styles.answer}>
          A. You can browse the site or use our search engine to find your
          desired products. You can then add them to your shopping bag and click
          on place order. You let us know your address, select a delivery time –
          and voila, you are done. A Fast Grocer representative will then
          deliver your order right to your home or office.{' '}
        </Text>
      </View>
      <View>
        <Text style={styles.question}>Q. How can I contact you? </Text>
        <Text style={styles.answer}>
          A. You can always call +8801937547204 or mail us at
          atiqulislamrussell0@gmail.com.
        </Text>
      </View>
      <View>
        <Text style={styles.question}>
          Q. How do I know when my order is here?{' '}
        </Text>
        <Text style={styles.answer}>
          A. A Fast Grocer representative will call you as soon as they are at
          your house to let you know about your delivery.
        </Text>
      </View>
      <View>
        <Text style={styles.question}>Q. How do I pay? </Text>
        <Text style={styles.answer}>
          A. We accept cash on delivery and we also have Online Credit Card and
          Online bKash service. Don’t worry, our Fast Grocer representatives
          should always carry enough change.
        </Text>
      </View>
      <View>
        <Text style={styles.question}>Q. Do you serve my area? </Text>
        <Text style={styles.answer}>
          A. We are currently serving eight big cities of Bangladesh including
          Dhaka, Chattogram, Narayanganj, Gazipur, Rajshahi, Jashore, Khulna,
          and Sylhet.
        </Text>
      </View>
      <View>
        <Text style={styles.question}>
          Q. I can’t find the product I am looking for. What do I do?{' '}
        </Text>
        <Text style={styles.answer}>
          A. We are always open to new suggestions and will add an item to our
          inventory just for you. There is a "Product Request" feature that you
          can use to inform us of your requirement. You can also call
          +8801937547204 or mail us at support@Fast Grocer.com to add an item to
          our inventory.
        </Text>
      </View>
      <View>
        <Text style={styles.question}>Q. My order is wrong. What do I do?</Text>
        <Text style={styles.answer}>
          A. Please Immediately call +8801937547204 and let us know the problem.
        </Text>
      </View>
      <View>
        <Text style={styles.question}>
          Q. What if the item is out of stock?
        </Text>
        <Text style={styles.answer}>
          A. We hold our own inventory in our warehouses, so we rarely run out
          of stock. However, we will try our best to source what you need. If we
          cannot find it, we will SMS/call you and let you know what substitutes
          are available.
        </Text>
      </View>
      <View>
        <Text style={styles.question}>Q. What happens during a hartal?</Text>
        <Text style={styles.answer}>
          A. We work during hartals. That’s how dedicated we are.
        </Text>
      </View>
      <View>
        <Text style={styles.question}>
          Q. Why should we buy from you when I have a store nearby?
        </Text>
        <Text style={styles.answer}>
          A. Well, that is up to you but you can also be a couch potato like our
          founders and have your items delivered to your house for free. Our
          prices are sometimes lower than that of major superstores in the city.
          We also carry a larger variety than the average corner store. So,
          there is really no reason to not buy from us.
        </Text>
      </View>
      <View>
        <Text style={styles.question}>Q. What about the prices?</Text>
        <Text style={styles.answer}>
          A. Our prices are our own but we try our best to offer them to you at
          or below market prices. Our prices are the same as the local market
          and we are working hard to get them even lower! If you feel that any
          product is priced unfairly, please let us know.
        </Text>
      </View>
      <View>
        <Text style={styles.question}>Q. How do you deliver?</Text>
        <Text style={styles.answer}>
          A. We use our own fleet to deliver. Our goal is to deliver the
          products to your place on time.
        </Text>
      </View>
      <View>
        <Text style={styles.question}>Q. What is your policy on refunds? </Text>
        <Text style={styles.answer}>
          A. We offer a refund or return policy of seven (7) days on most
          unopened or unspoilt packaged products. For perishable products such
          as milk, fruits, and fresh vegetables, we have a one (1) day return
          policy. Diaper items must be returned for refunds before 10% or 3
          pieces (whichever comes first) have been used. Certain products; Face
          Mask, Disposable Vinyl Gloves, Alcohol Pads, and Covid Testing Kits
          are not acceptable for refund or return either opened or unopened.
        </Text>
      </View>
      <View>
        <Text style={styles.question}>Q. Can I get a refund via cash? </Text>
        <Text style={styles.answer}>
          A. No, for any sort of issue, we will update the credit to your Fast
          Grocer account.
        </Text>
      </View>
      <View>
        <Text style={styles.question}>
          Q. What is your discounting policy?{' '}
        </Text>
        <Text style={styles.answer}>
          A. We try to provide the best deals in Dhaka and many of our products
          are already discounted below the maximum retail price (MRP). We also
          offer discount codes under special circumstances, which are applied on
          the MRP. On any given product, we can only apply one type of discount.
          We always consider the best discount available to the customer. For
          example: If the MRP of a product is Tk. 100 and our list price is Tk.
          92 -- the product is already sold at an 8% discount. This means that
          if the user applies a discount code for a 5% discount, we will still
          consider the best discount available to the user and sell the product
          at Tk. 92.
        </Text>
      </View>
      <View>
        <Text style={styles.question}>Q. Can I order over the phone? </Text>
        <Text style={styles.answer}>
          A. Absolutely. Our hotline is +8801937547204.
        </Text>
      </View>
      <View>
        <Text style={styles.question}>Q. What about quality?</Text>
        <Text style={styles.answer}>
          A. We try our best to source the best quality items for you but if you
          are dissatisfied, you can always send them back to the delivery
          person. If you forget to do that, you can call us within 3 days and we
          will replace the item for free.
        </Text>
      </View>
      <View>
        <Text style={styles.question}>
          Q. How are you sourcing your products?
        </Text>
        <Text style={styles.answer}>
          A. We have deals with whole-sellers, manufacturers, and importers. We
          only sell authentic products.
        </Text>
      </View>
      <View>
        <Text style={styles.question}>
          Q. Should I tip the delivery representative?{' '}
        </Text>
        <Text style={styles.answer}>
          A. Tips are not required. But our delivery team members appreciate
          recognition for their hard work. Delivery representatives keep the
          entire tip amount.
        </Text>
      </View>
      <View>
        <Text style={styles.question}>Q. How to Delete my Account?</Text>
        <Text style={styles.answer}>
          A. You can only delete a Fast Grocer Account through an Android or IOS
          App. Go to the profile section, below you will see the settings option
          there you will find the option to delete your account.
        </Text>
      </View>
    </View>
  );
};

export default Faq;

const styles = StyleSheet.create({
  question: {
    fontSize: 13,
    color: '#000',
    marginBottom: 15,
  },
  answer: {
    fontSize: 12,
    color: '#334155',
    marginBottom: 18,
  },
});
