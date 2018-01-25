# Reverse proxy for jstor stuff
An express based reverse proxy to allow localhost development in jstor.

# iac-jwt
```
curl 'http://localhost:4000/labs/api/labs-jwt-service/iac-jwt?uuid=facf8b77-2ec2-4014-8916-c35313ac95d5&AccessSession=undefined&AccessSessionSignature=undefined&AccessSessionTimedSignature=undefined' -H 'Pragma: no-cache' -H 'Origin: http://localhost:3000' -H 'Accept-Encoding: gzip, deflate' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36' -H 'Accept: */*' -H 'Referer: http://localhost:3000/' -H 'Connection: keep-alive' -H 'Cache-Control: no-cache' --compressed
```

# feedback
```
curl 'http://localhost:4000/search/feedback/rater_crud/data/rater/user_id/ca81dda3-5727-448f-a1f8-8a6dd5dedecc' -X POST -H 'Pragma: no-cache' -H 'Origin: http://localhost:3000' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: */*' -H 'Cache-Control: no-cache' -H 'Referer: http://localhost:3000/' -H 'Connection: keep-alive' -H 'Content-Length: 0' --compressed
```