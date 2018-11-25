# HTML CAN DO FOR LOOP NOW!
-----

## Usage
#### Download the package then add it to your html page
```html
<script src="path/to/html-for.js"></script>
```
----
#### In your main file type the following:
```js
let htmlFor = new HtmlFor();
htmlFor.run(); // will run the loops :)
```
-----
#### Html Code 
```html
<for key="users" condition="let i = 0; i < 10; i++">
	<h5>Hey I will repeat myself 10 times</h5>
</for>
```
##### - Notice that {key} and {condition} attributes are Required!
-----
## Rendered Code will be:
```html
<for key="users" condition="let i = 0; i < 10; i++">
    <item parent="users" data-i="0">
		<h5>Hey I will repeat myself 10 times</h5>
	</item>
    <item parent="users" data-i="1">
		<h5>Hey I will repeat myself 10 times</h5>
	</item>
    <item parent="users" data-i="2">
		<h5>Hey I will repeat myself 10 times</h5>
	</item>
    <item parent="users" data-i="3">
		<h5>Hey I will repeat myself 10 times</h5>
	</item>
    <item parent="users" data-i="4">
		<h5>Hey I will repeat myself 10 times</h5>
	</item>
    <item parent="users" data-i="5">
		<h5>Hey I will repeat myself 10 times</h5>
	</item>
    <item parent="users" data-i="6">
		<h5>Hey I will repeat myself 10 times</h5>
	</item>
    <item parent="users" data-i="7">
		<h5>Hey I will repeat myself 10 times</h5>
	</item>
    <item parent="users" data-i="8">
		<h5>Hey I will repeat myself 10 times</h5>
	</item>
    <item parent="users" data-i="9">
		<h5>Hey I will repeat myself 10 times</h5>
	</item>
</for>
```