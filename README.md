# BlueCookies
Quick and simple cookie consent dialog for websites

![Preview](BlueCookiesExample.gif)

## Usage

### Add to script

Download index.js / index.min.js or use un **unpkg**.

```html
 <script src="https://unpkg.com/bluecookies/"></script>
```

```html
<script src="https://unpkg.com/bluecookies/index.min.js"></script>
```

### Init

```js
BlueCookies(mainText, acceptedText, buttonText, customStyle)
```

- mainText: Legal text to accept.
- acceptedText: If user already approved it shows this text 3 seconds.
- buttonText: Usually "accept".
- customStyle: Minor style configurations added to the main container, like background and color.

### Example

```html
  <script src="https://unpkg.com/bluecookies/"></script>
  <script>
    BlueCookies("Do you consent to the use of cookies?", "✔ Cookies", "Accept", "background-color: #8bb8e8; color:#fff;")
  </script>
```




