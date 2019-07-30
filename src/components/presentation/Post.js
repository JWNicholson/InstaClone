
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import config from "../../config";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      screenWidth: Dimensions.get("window").width
    };
  }

  likeToggled() {
    this.setState({
      liked: !this.state.liked
    });
  }

  render() {
    const imageHeight = Math.floor(this.state.screenWidth * 1.1);
    const imageUri =
      "https://lh3.googleusercontent.com/NetFCMbu_X6Db6kedM_JQKfEhnpaL3qUdGNh5etql1ZNqgPkFqGa1RpgM-XHf_W2Qnw6bH-ArCqEHKaiSUXZ88pXJA" +
      "=s" +
      imageHeight +
      "-c";

    const heartIconColor = this.state.liked ? "rgb(252,61,57)" : null;

    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={styles.userBar}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={styles.userPic}
              source={{
                uri:
                  "https://lh3.googleusercontent.com/rCBMuE30hg-Z1lil_8eSDgaAN5PXW-ORxAeNYKD7l3FK6kkeFeM7qkHN0380Uc0mXPt52Xtbr0VYDHP4a1F8AH3MTQ"
              }}
            />
            <Text style={{ marginLeft: 10 }}>Tony Mahroneystein</Text>
          </View>

          <View style={{ marginLeft: "auto" }}>
            <Text style={{ fontSize: 30 }}>...</Text>
          </View>
        </View>

        <TouchableOpacity
        activeOpacity={0.75}
          onPress={() => {
            this.likeToggled();
          
          }}
        >
          <Image

            style={{ width: this.state.screenWidth, height: 400 }}
            source={{
              uri: imageUri
            }}
          />
        </TouchableOpacity>

        <View style={styles.iconBar}>


        <Image
            style={[
              styles.icon,
              { height: 40, width: 40, tintColor: heartIconColor }
            ]}
            source={config.images.heartIcon}
          />
          <Image
            style={[styles.icon, { height: 36, width: 36 }]}
            source={config.images.bubbleIcon}
          />

          <Image
            resizeMode="stretch"
            style={[styles.icon, { height: 50, width: 40 }]}
            source={config.images.arrowIcon}
          />
        </View>
        <View>
          <View style={styles.iconBar}>
            <Image
              style={[
                styles.icon,
                { height: 40, width: 40, tintColor: heartIconColor }
              ]}
              source={config.images.heartIcon}
            />

            <Text>123 Likes</Text>
            

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userBar: {
    height: config.styleConstants.rowHeight,
    backgroundColor: "rgb(255,255,255)",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between"
  },

  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  iconBar: {
    width: 100 + "%",
    height: config.styleConstants.rowHeight,
    borderColor: "rgb(180,180,180)",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    marginLeft: 12
  }
});

export default Post;
