
const data = [
  {
    type: 'style',
    typeText: '风格',
    map: 'imgs',
    child: [
      {Id: 1, text: '现代风格' , img: '1-1.jpg',info:"现代简约"},
      {Id: 39, text: '中式风格' , img: '1-2.jpg',info:"中式"},
      {Id: 38, text: '田园风格' , img: '1-3.jpg',info:"田园"},
      {Id: 29, text: '欧式风格' , img: '1-4.jpg',info:"欧式"},
      {Id: 6, text: '美式乡村' , img: '1-5.jpg',info:"美式乡村"},
      {Id: 8, text: '地中海风' , img: '1-6.jpg',info:"地中海"},
      {Id: 40, text: '东南亚风' , img: '1-7.jpg',info:"东南亚"},
      {Id: 7, text: '日式风格', img: '1-8.jpg',info:"日式"},
    ]
  },
  {
    type: 'kind',
    typeText: '空间',
    map: 'img',
    child: [
      {Id: 1, text: '客厅'    ,img: '2-1.jpg',info:'客厅'},
      {Id: 2, text: '卧室'   ,img: '2-2.jpg',info:'卧室'},
      {Id: 6, text: '餐厅'   ,img: '2-3.jpg',info:'餐厅'},
      {Id: 3, text: '卫生间 ',img: '2-4.jpg',info:'卫生间'},
      {Id: 15, text: '衣帽间' ,img: '2-5.jpg',info:'衣帽间'},
    ]
  },
  {
    type: 'part',
    typeText: '局部',
    map: 'imgs',
    child: [
      {Id: 22, text: '玄关'  ,img: '3-1.jpg',info:'玄关'},
      {Id: 5, text: '吊顶'  ,img: '3-2.jpg',info:'吊顶'},
      {Id: 1, text: '背景墙',img: '3-3.jpg',info:'背景墙'},
      {Id: 11, text: '楼梯'  ,img: '3-4.jpg',info:'楼梯'},
      {Id: 14, text: '走廊'  ,img: '3-5.jpg',info:'走廊'},
    ]
  },
  {
    type: 'type',
    typeText: '户型',
    map: 'img',
    child: [
      {Id: 1, text: '小户型', img: '4-1.jpg',info:'小户型'},
      {Id: 2, text: '三居室', img: '4-2.jpg',info:'三居'},
      {Id: 3, text: '四居室', img: '4-3.jpg',info:'四居'},
      {Id: 4, text: '跃层'  , img: '4-4.jpg',info:'跃层'},
      {Id: 5, text: '别墅'  , img: '4-5.jpg',info:'别墅'},
    ]
  },
];

export default data;