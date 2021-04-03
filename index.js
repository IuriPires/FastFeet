import { AppRegistry, LogBox } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

LogBox.ignoreLogs(['RCTBridge']);

AppRegistry.registerComponent(appName, () => App);
