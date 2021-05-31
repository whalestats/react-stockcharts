### Installation
```
npm install whalestats-stockcharts --save
```

### Bootstrap
```
mkdir stockchart
git clone https://gist.github.com/a27298bb7ae613d48ba2.git stockchart
cd stockchart
npm install whalestats-stockcharts
```
edit the `index.html` and replace

```html
<script type="text/javascript" src="//unpkg.com/whalestats-stockcharts@latest/dist/whalestats-stockcharts.min.js"></script>
```

with

```html
<script type="text/javascript" src="node_modules/whalestats-stockcharts/dist/whalestats-stockcharts.js"></script>
```

You should be good to go

---
#### React version compatibility

As of `v0.4.x` whalestats-stockcharts depends on React `^0.14.6`