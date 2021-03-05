/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Drawer, TouchableRipple} from 'react-native-paper';
import {StyleSheet, View, Text, Switch} from 'react-native';
import {Title, Caption, Paragraph} from 'react-native-paper';
import image from '../../assets/images/profile.png';
import Icon from 'react-native-vector-icons/Ionicons';
const Menu = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image source={image} size={50} />
          <Title style={styles.title}>Abhisekh Sahoo</Title>
          <Caption style={styles.caption}>@abhisekh</Caption>
          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                MCA
              </Paragraph>
              <Caption style={styles.caption}>Education</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                Odisha
              </Paragraph>
              <Caption style={styles.caption}>Address</Caption>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="person-outline" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => props.navigation.navigate('Profile')}
          />
          {/* <DrawerItem
            icon={({color, size}) => (
              <Icon name="tune" color={color} size={size} />
            )}
            label="th-list"
            onPress={() => {}}
          /> */}
        </Drawer.Section>
        <Drawer.Section title="Preferences">
          <TouchableRipple onPress={() => props.toggleTheme}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={false} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
};
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default Menu;
