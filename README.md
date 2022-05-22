# kospi-cli
## functions
1. Price of stock
2. Tracking price of stock
3. Search stock code

## How to use
this is basically cli program.
```
kospi [command] [code or name] -[time]
```
### commands
1. now 
2. track
3. search

### code or name
6 digits number for now, track commands and company name for search command.

### time
time is only used for tracking stock price.
it should be in seconds.

## examples
### Price of stock
```
$ kospi now 005930
오후 11:50:36 삼성전자 68000
```

### Tracking price of stock
```
$ kospi track 005930 5
오후 11:50:26 삼성전자 68000
오후 11:50:31 삼성전자 68000
오후 11:50:36 삼성전자 68000
```

### Search stock code
```
$ kospi search 삼성
207940  삼성바이오로직스
028260  삼성물산
018260  삼성에스디에스
032830  삼성생명
029780  삼성카드
068290  삼성출판사
028050  삼성엔지니어링
010140  삼성중공업
016360  삼성증권
006660  삼성공조
006400  삼성SDI
009150  삼성전기
001360  삼성제약
000810  삼성화재해상보험
005930  삼성전자
```
