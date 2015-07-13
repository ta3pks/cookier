var cookier={
	parse : function (cookieName){
		var a=document.cookie.replace(/; /g,";").split(";"),
		b=a.length,c={},nm=cookieName||!1;
		while(b--){
			var d=a[b].split(/=(.+)/);
			c[d[0]]=d[1];
		}
		return (nm)?c[nm]:c;
	},
	make:function(name,value,expiresInX_days){
		var a=new Date;a.setTime(Date.now()+(1000*60*60*24*expiresInX_days));
		return (document.cookie=name+"="+value+";"+a.toUTCString())?!0:!1;
	},
	rm:function(cookieName){
		var a=new Date;a.setTime(0);
		return (document.cookie=cookieName+"=;"+a.toUTCString())?!0:!1;
	}

}