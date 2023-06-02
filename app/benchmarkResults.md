### GET
- Concurrency Level:      10
- Time taken for tests:   10.001 seconds
- Complete requests:      116
Failed requests:        0
Non-2xx responses:      116
Total transferred:      33756 bytes
HTML transferred:       3828 bytes
- Requests per second:    11.60 [#/sec] (mean)
- Time per request:       862.191 [ms] (mean)
Time per request:       86.219 [ms] (mean, across all concurrent requests)
Transfer rate:          3.30 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       1
Processing:   214  810 142.0    797    1209
Waiting:      214  795 147.5    785    1205
Total:        214  810 142.0    797    1209

Percentage of the requests served within a certain time (ms)
  50%    797
  66%    860
  75%    884
  80%    899
  90%    995
  95%   1027
  98%   1137
  99%   1208
 100%   1209 (longest request)

 ### PUT
- Concurrency Level:      10
- Time taken for tests:   13.739 seconds
- Complete requests:      16253
Failed requests:        0
Total transferred:      5542273 bytes
Total body sent:        3625088
HTML transferred:       1641553 bytes
- Requests per second:    1182.95 [#/sec] (mean)
- Time per request:       8.453 [ms] (mean)
Time per request:       0.845 [ms] (mean, across all concurrent requests)
Transfer rate:          393.93 [Kbytes/sec] received
                        257.66 kb/s sent
                        651.59 kb/s total

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.5      0      24
Processing:     2    4   2.8      3      52
Waiting:        0    4   2.7      3      52
Total:          2    4   2.8      4      52

Percentage of the requests served within a certain time (ms)
  50%      4
  66%      4
  75%      5
  80%      5
  90%      6
  95%      8
  98%     12
  99%     15
 100%     52 (longest request)

 ### POST

- Concurrency Level:      10
- Time taken for tests:   12.495 seconds
- Complete requests:      16271
Failed requests:        0
Total transferred:      6134167 bytes
Total body sent:        4133088
HTML transferred:       2229127 bytes
- Requests per second:    1302.16 [#/sec] (mean)
- Time per request:       7.680 [ms] (mean)
Time per request:       0.768 [ms] (mean, across all concurrent requests)
Transfer rate:          479.41 [Kbytes/sec] received
                        323.02 kb/s sent
                        802.42 kb/s total

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.4      0      36
Processing:     0    3   5.0      2     114
Waiting:        0    3   5.0      2     114
Total:          0    4   5.0      2     114

Percentage of the requests served within a certain time (ms)
  50%      2
  66%      3
  75%      3
  80%      3
  90%      5
  95%      7
  98%     18
  99%     26
 100%    114 (longest request)