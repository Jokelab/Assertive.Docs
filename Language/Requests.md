---
layout: default
title: HTTP Requests
parent: Language
nav_order: 30
---

# HTTP Requests
HTTP requests are primary citizens in the Assertive Script.

## Syntax
The high level syntax for HTTP requests is as follows. 
```
[httpMethod] "URI string" ([querySection] | [headerSection] | [bodySection])* ;
```
Simply put: a request should start with a HTTP method followed by a URI string. The URI can be optionally followed by a query, headers and body section. The requests ends with a semicolon. Each part of the request statement will be explained on this page.
Example of a request with all options specified:
```assertive
POST "https://www.testuri.com"
query {'id' : 1, 'name' :'Doe'}
headers {'my-header': 'my-header-value'}
body formdata {'Firstname': 'John', 'Lastname': 'Doe'} ;
```

## httpMethod
The httpMethod must be be one of the following: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `OPTIONS`, `HEAD`, `TRACE`, `CONNECT`. It is also possible to provide a dynamically populated string value as long as it can be parsed to one of the known HTTP methods. The following example demonstrates this:
```assertive
$method = "GET";
if ($id = 1){
    $method = "DELETE";
}
"{% raw %}{{ $method }}{% endraw %}" "https://testuri.com";
```

## querySection
```
query [expression]
```
This can be used to modify the querystring of a url. The expression must resolve to a dictionary value.
Example:
```assertive
//send a GET request to https://www.testuri.com?id=27&name=John
$x = 3;
$customQuery = {'id' : $x * 9, 'name':'John'};
GET "https://www.testuri.com" 
query $customQuery;

```

## headerSection
Syntax of the header section:
```
headers [expression]
```
This can be used to modify the headers of an HTTP request. The expression must resolve to a dictionary value.
Example:
```assertive
POST 'http://www.testuri.com' 
headers 
{ 
    'Authorization': BasicAuth('username', 'secretpassword'),
    'OtherHeader': 3 * 5
};
```

## bodySection
The body section supports 4 different kinds of request bodies. This becomes visible when we look at the syntax. Every kind of request body will be explained below.
```
body (string | formurlencoded | formdata | stream)? [expression];
```
### body `string`

This body kind can be used for textual data in the request body such as JSON content. The `string` keyword can be omitted if Assertive detects a string expression. 
```assertive
//simple text:
POST "https://www.testuri.com" body string 'this is the content';

//JSON content, string keyword omitted:
POST "https://www.testuri.com" body '{"key": "value"}';
```

### body `formurlencoded`
This will send the request body as URL encoded string content:
```assertive
POST "https://www.testuri.com" body formurlencoded {'Firstname': 'John', 'Lastname': 'Doe'};
```

### body `formdata`
The request body will be sent as multipart formdata when using the `formdata` keyword. It enables sending a request with a combination of string values and stream values in a single request.
```assertive
POST "https://www.testuri.com" body formdata 
{'Firstname': 'John', 'Lastname': 'Doe', 'image': FileToStream('image.bmp') }
```

### body `stream`
Send a binary file in the request body. The `stream` keyword can be omitted if Script Assertive detects a stream expression.
```assertive
POST "https://www.testuri.com" body stream FileToStream('image.jpg');

//this is equivalent:
POST "https://www.testuri.com" body FileToStream('image.jpg');
```