

# JS Data Manager
A function for easily managing cookies and url parameters in javascript/html
-
Setup
-
To use this function with your website, simply paste the following code into your HTML file:

    <script src="https://minefarts.github.io/JS-Data-Manager/script.js"></script>

How To Use:
-
- Parameters
	- data.Param.raw()
		- Get raw string from url
	- data.Param.list()
		- List parameters as json
	- data.Param.get(name)
		- Get value of parameter
		- name: name of parameter
	- data.Param.set(name, value)
		- Add new parameter or change the value of an existing one
		- name: name of parameter
		- value: value of parameter
	- data.Param.remove(name)
		- Remove a parameter
		- name: name of parameter
	- data.Param.clear()
		- Clear all parameters
 	- data.Param.length()
	 	- Get number of parameters
- Cookies
	- data.Cookie.raw()
		- Get raw cookie string
	- data.Cookie.list()
		- Get list of cookies as json
	- data.Cookie.get(name)
		- Get value of cookie
		- name: name of cookie
	- data.Cookie.set(name, value, path, expire)
		- Add new cookie or change the value of an existing one
		- name: name of cookie
		- value: value of cookie
		- path: path of cookie
			- leave blank for current path
		- expire: time string for cookie to expire
			- Leave blank to expire on browser close.
			- Use null to never expire
	- data.Cookie.remove(name)
		- Remove cookie
		- name: name of cookie
	- data.Cookie.clear()
		- Clear all cookies
 	- data.Cookie.length()
	 	- Get number of cookies
