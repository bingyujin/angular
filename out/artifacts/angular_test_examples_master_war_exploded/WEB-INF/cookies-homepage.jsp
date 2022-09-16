<html>

<body>
<h3>Training Portal
</h3>
<%
    String favLang="Java";
    Cookie[] theCookies = request.getCookies();
    if(theCookies!=null){
        for (Cookie tempCookie:theCookies){
            if("myApp.favoriteLanguage".equals(tempCookie.getName())){
                favLang=tempCookie.getValue();
                break;
            }
        }
    }
%>

<h4>New Books for<%= favLang %></h4>
<ul>
    <li>blah dfdfdsfjdsf dgdf</li>
    <li>blah dfdfdsfjdsf dgdf</li>
</ul>
<h4>Latest Books for<%= favLang %></h4>
<ul>
    <li>blah dfdfdsfjdsf dgdf</li>
    <li>blah dfdfdsfjdsf dgdf</li>
</ul>
<h4>Hot Books for<%= favLang %></h4>
<ul>
    <li>blah dfdfdsfjdsf dgdf</li>
    <li>blah dfdfdsfjdsf dgdf</li>
</ul>




<a href="cookies-personalize-form.html">Return to homepage.</a>
</body>
</html>