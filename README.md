##HOW TO INSTALL 
```bower install cookier``` 
<br/>
_or alternatively_<br/> 
```git clone github.com/nikosEfthias/cookier```

##OBJECT METHODS
```javascript
cookier
	->parse:function(cookieName) //cookiename is optional if not given returns an object with all cookies
	->make:function(name,value[,expiresInX_Days=1] [, path=currentPath])
	//by degault expires is 1 day and the path is current path
	->rm:function(cookieName)//removes a cookie
```