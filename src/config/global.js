import Platform, {OS} from 'Platform';

const appOft = 20;// 顶栏目测高度。。

export default {
  appOft, 
  os: OS,
  androidFixNavStyle: {
    paddingTop: appOft,
    height: appOft+50
  }
};
