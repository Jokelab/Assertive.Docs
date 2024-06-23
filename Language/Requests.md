---
layout: default
title: HTTP Requests
parent: Language
nav_order: 30
---

# HTTP Requests
HTTP requests are primary citizens in the Assertive Scripting language.

## Syntax
The high level syntax for HTTP requests is as follows.
```
[httpMethod] string ([querySection] | [headerSection] | [bodySection])* ;
```

Example of a request with all options specified:
```
POST 'https://www.testuri.com' 
    query {'id' : 1, 'name' :'Doe'}
    headers {'my-header': 'my-header-value'}
    body formdata {'Firstname': 'John', 'Lastname': 'Doe'} ;
```

# httpMethod
The [httpMethod] must be be one of the following:
GET | POST | PUT | DELETE | PATCH | OPTIONS | HEAD | TRACE | CONNECT
It is also possible to provide a dynamically populated string value, as long as it can be parsed to one of the allowed values. The following example demonstrates this:
```
$method = 'PO';
'{{$method}}ST' 'https://www.testuri.com';
```

### querySection
```
query [expression]
```
This can be used to modify the querystring of a url. The expression must resolve to a dictionary value.
Example:
```
//set a query from a variable
$x = 3;
$customQuery = {'id' : $x * 9, 'name':'John'};
GET "https://www.testuri.com" 
query $customQuery; //performs a query to https://www.testuri.com?id=27&name=John

```

### headerSection
Syntax of the header section:
```
headers [expression]
```
This can be used to modify the headers of an HTTP request. The expression must resolve to a dictionary value.
Example:
```
POST 'http://www.testuri.com' 
headers 
    { 'Authorization': BasicAuth('username', 'secretpassword'),
    { 'otherheader': 3 * 5}
 };
```

### bodySection
The body section supports 4 different kinds of request bodies. This becomes visible when we look at the syntax. Every kind of request body will be explained below.
```
body (string | formurlencoded | formdata | stream)? [expression];
```
** Body kind string **
This body kind can be used for textual data in the request body such as JSON content. The 'string' keyword can be omitted if Assertive detects a string expression. 
```
//simple text:
POST 'https://www.testuri.com' body string 'this is the content';

//JSON content, string keyword omitted:
POST 'https://www.testuri.com' body '{"key": "value"}';

```
** Body kind formurlencoded **
This will send the request body as URL encoded string content:
```
POST 'https://www.testuri.com' body formurlencoded {'Firstname': 'John', 'Lastname': 'Doe'};
```

** Body kind formdata **
The request body will be sent as multipart formdata when using the formdata keyword. It enables sending a request with a combination of string values and stream values in a single request.
```
POST "https://webhook.site/a6c6dff5-11cd-4647-bec3-f9a771b79984" body formdata 
{'Firstname': 'John', 'Lastname': 'Doe', 'image': FileToStream('image.bmp') }
```

** Body kind stream **
Send a binary file in the request body. The 'stream' keyword can be omitted if Assertive detects a stream expression.
```
POST 'https://www.testuri.com' body stream FileToStream('image.jpg');

//this is equivalent:
POST 'https://www.testuri.com' body FileToStream('image.jpg');
```
