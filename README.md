# stopStealPhoto
jQuery plugin to prevent save images

### install
just add script and fire function
```javascript
$('img').stopStealPhoto();
```

### settings
* delay: int | default 600
* message: string | default "This image is protected"
* customClass: string | default undefined
* cursorOffset: int | default 14

it is possible to show custom text for each image, just use data attribute
```html
<img src="image.jpg" data-ssph="custom text">
```

