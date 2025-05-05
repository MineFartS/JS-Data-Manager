
# JS Data Manager
A script for easily managing cookies and url parameters in javascript/html
-
Setup
-
To use this function with your website, paste the following code into your HTML file:

    <script src="https://minefarts.github.io/JS-Data-Manager/script.js"></script>

Functions:
-
- Parameters
	- data.Param.list()
	- data.Param.get('name')
	- data.Param.set('name', 'value')
	- data.Param.remove('name')
	- data.Param.clear()
- Cookies
	- data.Cookie.list()
	- data.Cookie.get('name')
	- data.Cookie.set('name', 'value', 'path', 'expire')
	- data.Cookie.remove('name')
	- data.Cookie.clear()
