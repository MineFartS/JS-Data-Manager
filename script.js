var data = {
	'Param' : {

		'get' : function() {
			try {
				jparams = {}
				rparams = window.top.location.href.split('?')[1].replaceAll('%20', ' ').split('&')
				for (x in rparams) {
					var p = rparams[x].split('=')
					if (['true', 'false'].includes(p[1])) {
						p[1] = p[1] == 'true'
					}
					jparams[p[0]] = p[1]
				}
				return jparams
			} catch {
				return {}
			}
		},

		'set' : function(p, value) {
			if (data.Param.get()[p] == undefined) {
				if (Object.keys(data.Param.get()).length == 0) {
					window.top.location.href += `?${p}=${value}`
				} else {
					window.top.location.href += `&${p}=${value}`
				}		
			} else {
				if (Object.keys(data.Param.get()).length == 1) {
					window.top.location.href = window.top.location.href.split('?')[0] + '?' + p + '=' + value 
				} else {
					var parts = window.top.location.href.split(p + '=' + data.Param.get()[p])
					window.top.location.href = parts[0] + p + '=' + value + parts[1]
				}
			}
		},

		'remove' : function(p) {
			if (Object.keys(data.Param.get()).length == 1) {
				window.top.location.href = window.top.location.href.split('?')[0]
			} else {
				p += '=' + data.Param.get()[p]
				window.top.location = window.top.location.href.replace(p + '&', '').replace(p, '')
			}
		},

		'clear' : function() {
			window.top.location.href = window.top.location.href.split('?')[0]
		},

	},

	'Cookie' : {

		'get' : function() {
			try {
				var jcookies = {}
				var rcookies = document.cookie.split('; ')
				for (x in rcookies) {
					var c = rcookies[x].split('=')
					if (['true', 'false'].includes(c[1])) {
						c[1] = c[1] == 'true'
					}
					jcookies[c[0]] = c[1]
				}
				return jcookies
			} catch {
				return {}
			}
		},

		'set' : function(c, value=undefined, path=undefined, expire=undefined) {
			if (value != undefined) { c += `=${value}` }
			if (path != undefined) { c += `; path=${path}` }
			if (expire != undefined) { c += `; expires=${expire}` }
			document.cookie = c
		},

		'remove' : function(c) {
			document.cookie = c + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
		},

		'clear' : function() {
			for (c in data.Cookie.get()) {
				data.Cookie.remove(c)
			}
		},

	}
}
