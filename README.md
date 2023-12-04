# LuvTree

We love trees 🌲🌳🌴 show others you do too! Post to the community and vote up your favourite ferns, take a photo with
a curious connifer or just find out where to go see all the beautiful birch's!

![Alllrigh-tree Then!](preview.webp)

_LuvTree is a fake app, just a bit of fun to learn react native_

## Setup Maps Key

To get the maps to work you will need an api key for Google maps,
[it's free, go create one in GCP](https://console.cloud.google.com/apis/library).

Once done, you can add the key in the `android/app/src/main/AndroidManifest.xml` as:

```xml
<application ...>
  <meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="YOUR MAP KEY HERE"/>
</application>
```

