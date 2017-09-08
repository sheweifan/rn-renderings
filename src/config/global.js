import Platform, {OS} from 'Platform';

const appOft = 20;// 顶栏目测高度。。

const androidFixNavStyle = {
  paddingTop: appOft,
  height: appOft+50,
	borderBottomWidth: 1,
	borderBottomColor: '#e5e5e5'
}
const headerStyle ={
  // elevation: 0,
  backgroundColor: '#fff',
  ...(OS === 'android'? androidFixNavStyle : {}),

	elevation: 0,
}

export default {
  appOft, 
  os: OS,
  androidFixNavStyle,
  headerStyle,
};
