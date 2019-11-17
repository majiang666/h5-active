# h5-active
h5活动适配探究

# demo
[demo](https://www.sjooy.com/h5-active/)

# code
```
// 页面比例
@ratioWidth: 750;
@ratioHeight: 6326;

// 子级区块比例612,214
@ratioWidthChild: 612;
@ratioHeightChild: 214;

// 自动计算百分比
.calcPercentage(@ratioWidth,@ratioHeight,@imgWidth,@imgHeight,@offsetTop,@offsetLeft){
  position: absolute;
  top: round(percentage(@offsetTop/@ratioHeight),4);
  left: round(percentage(@offsetLeft/@ratioWidth),4);
  width: round(percentage(@imgWidth/@ratioWidth),4);
  height: round(percentage(@imgHeight/@ratioHeight),4);
}
```
