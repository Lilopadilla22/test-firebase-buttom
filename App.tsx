import { StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';
import react, { useEffect } from 'react';
import analytics from '@react-native-firebase/analytics';

import React from 'react'

const App = () => {
  return (
    <>
      <View style= {styleDefaul.container}>
        <TouchableOpacity style={styleDefaul.bottom}> 
          <Text>
            PRUEBA
          </Text>
        </TouchableOpacity>
      </View>

    <View>
      <Button
        title="Add To Basket"
        onPress={async () =>
          await analytics().logEvent('basket', {
            id: 3745092,
            item: 'mens grey t-shirt',
            description: ['round neck', 'long sleeved'],
            size: 'L',
          })
        }
      />
    </View>

    <View>
      <Button
        title="Press me"
        // Logs in the firebase analytics console as "select_content" event
        // only accepts the two object properties which accept strings.
        onPress={async () =>
          await analytics().logSelectContent({
            content_type: 'clothing',
            item_id: 'abcd',
          })
        }
      />
    </View>
  </>
  )
}





export default App

const styleDefaul = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottom: {
    borderWidth: 1,
    borderColor: "red",
    padding: 10
  }

})


