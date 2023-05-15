# React Native Playground

## Setup of this project

### Create new Expo project

```
npx create-expo-app rn-playground
```

TODO: Is it required to create a new Expo project in the portal and create an eas id?
If yes, copy the id from the portal and

```
// eas init --id [specific-id-from-project] // SKIPPED
```

### Install support for web

```
npx expo install react-dom react-native-web @expo/webpack-config
```

### Setup TypeScript

```
touch tsconfig.json
npx expo start
// yes to install suggested packages
mv App.js App.tsx
```

### Setup yarn

TODO

## Run the app

```
npx expo start
```
