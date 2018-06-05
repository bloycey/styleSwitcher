## Documentation 

StyleSwitcher dynamically appends alternate stylesheets to the `head` of your site. This allows you to overwrite your main CSS file with new styles and preview them instantly.  StyleSwitcher can be applied to any `select` element and you can map as many alternate stylesheets as you want - the plugin will clean up as it goes and only load one alternate stylesheet at a time.

### Quick Start

1. Set up your alternate stylesheets using the following structure:

![]("img/css-structure-1.JPG")
![]("img/css-structure-2.JPG")

The path to your custom stylesheets should be `css/customstyles/`

2. Set up your HTML as follows:

```
<select id="colorpick" class="form-control">
    <option value="defaultstyles" selected>Default Theme</option>
    <option value="customstyle1">Blue Theme</option>
    <option value="customstyle2">Green Theme</option>
    <option value="customstyle3">Purple Theme</option>
</select>
```

The value of each option should correlate with one of the alternate stylesheets saved on your server. By default each of your custom stylesheets will *need* to start with the prefix `custom`. You can, however, change the prefix using the advanced options below.

3. Add the styleSwitcher.js file to your footer after jQuery but before your custom.js file.

4. Initialise the plugin by calling the styleSwitcher function on a `select` tag.

```
$(document).ready(function(){
    $('#colorpick').styleSwitcher();
})
```

5. That's it! You should now notice that your styles change as you select different options from the select dropdown.

---

### Advanced Usage

There are several options that you can specify. They defaults for these options are as follows:

```
$('#colorpick').styleSwitcher({
    path: "css/customstyles/",
    prefix: "custom",
    session: true
})
    
```

`path` - Accepts a string. Determines the path to your custom css stylesheets.
`prefix` - Accepts a string. determines the prefix for your custom css stylesheets.
`session` - Accepts a boolean. Determines whether or not you selection is stored in session storage and will endure after page reloads. This is set to 'true' by default.

---