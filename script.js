window.data = {
	'Param' : {

		'raw' : function() {
			let url = window.top.location.href
			if (url.includes('?')) {
				return decodeURIComponent(url.substring(url.indexOf('?') + 1))
			} else {
				return undefined
			}
		},

		'list' : function() {
			try {
				jparams = {}
				rparams = data.Param.raw().split('&')
				for (x in rparams) {
					var p = rparams[x].split('=')

					if (p[1] == 'true' || p[1] == 'false') { p[1] = p[1]=='true' }
					if (!isNaN(Number(p[1]))) {	p[1] = Number(p[1]) }
					
					jparams[p[0]] = p[1]
				}
				return jparams
			} catch {
				return {}
			}
		},

		'get' : function(p) {
			return data.Param.list()[p]
		},

		'set' : function(p, value) {
			if (data.Param.list()[p] == undefined) {
				if (Object.keys(data.Param.list()).length == 0) {
					window.top.location.href += `?${p}=${value}`
				} else {
					window.top.location.href += `&${p}=${value}`
				}		
			} else {
				if (Object.keys(data.Param.list()).length == 1) {
					window.top.location.href = window.top.location.href.split('?')[0] + '?' + p + '=' + value 
				} else {
					var parts = window.top.location.href.split(p + '=' + data.Param.get(p))
					window.top.location.href = parts[0] + p + '=' + value + parts[1]
				}
			}
		},

		'remove' : function(p) {
			if (Object.keys(data.Param.list()).length == 1) {
				window.top.location.href = window.top.location.href.split('?')[0]
			} else {
				p += '=' + data.Param.get(p)
				window.top.location = window.top.location.href.replace(p + '&', '').replace(p, '')
			}
		},

		'clear' : function() {
			window.top.location.href = window.top.location.href.split('?')[0]
		},

		'length' : function() {
			return Object.keys(data.Param.list()).length
		}
	},

	'Cookie' : {

		'raw' : function() {
			if (document.cookie == '') {
				return undefined
			} else {
				return document.cookie
			}
		},

		'list' : function() {
			try {
				var jcookies = {}
				var rcookies = data.Cookie.raw().split('; ')
				for (x in rcookies) {
					var c = rcookies[x].split('=')

					if (c[1] == 'true' || c[1] == 'false') { c[1] = c[1]=='true' }
					else if (!isNaN(Number(c[1]))) {	c[1] = Number(c[1]) }
					
					jcookies[c[0]] = c[1]
				}
				return jcookies
			} catch {
				return {}
			}
		},

		'get' : function(c) {
			return data.Cookie.list()[c]
		},

		'set' : function(c, value=undefined, path=undefined, expire=undefined) {
			if (value != undefined) { c += `=${value}` }
			if (path != undefined) { c += `; path=${path}` }
			if (expire != undefined) { c += `; expires=${expire}` }
			document.cookie = String(c)
		},

		'remove' : function(c) {
			document.cookie = c + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
		},

		'clear' : function() {
			for (c in data.Cookie.list()) {
				data.Cookie.remove(c)
			}
		},

		'length' : function() {
			return Object.keys(data.Cookie.list()).length
		}
	}
}
