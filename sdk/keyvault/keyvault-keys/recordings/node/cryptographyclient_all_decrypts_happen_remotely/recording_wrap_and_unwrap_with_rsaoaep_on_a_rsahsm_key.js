let nock = require('nock');

module.exports.hash = "30bb3801fda0e909f1e0134c1ec1e7dc";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/keys/cryptography-client-test/create')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"Request is missing a Bearer or PoP token."}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '87',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/azure_tenant_id", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'eastus',
  'x-ms-request-id',
  '93736dfc-229a-486f-becc-3d822a2b2c28',
  'x-ms-keyvault-service-version',
  '1.1.10.0',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=108.226.109.105;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 31 Jul 2020 14:07:53 GMT' ]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [ 'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '51c98530-70ca-4cef-98e9-6406b5666b00',
  'x-ms-ests-server',
  '2.1.10897.13 - EUS ProdSlices',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AkeL4jIWG5tHgC4MAmZNka8_aSJHAQAAALkcttYOAAAA; expires=Sun, 30-Aug-2020 14:07:53 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; SameSite=None; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; SameSite=None; secure; HttpOnly',
  'Date',
  'Fri, 31 Jul 2020 14:07:53 GMT',
  'Content-Length',
  '1315' ]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/keys/cryptography-client-test/create', {"kty":"RSA"})
  .query(true)
  .reply(200, {"key":{"kid":"https://keyvault_name.vault.azure.net/keys/cryptography-client-test/84622e0f5a0d4c8fb081bb09cbc81a20","kty":"RSA","key_ops":["encrypt","decrypt","sign","verify","wrapKey","unwrapKey"],"n":"96h1-R5rGqY0VTG9bmnrrLDS6Xhf07FCpk4pmwLPfM4ZiKxzO-DwmSqaxIaz9hGBMj4ZfAsP84dz3htULSE_yV8_bqv56YpYFapyCbWNsSK0fUb3GBPSEMeSR2rC1UH0s06b6YNDcXPv2Yk5EAbd7MiLY1Aqt7aYCQcNwLj2csVy2YQAzZ0STGTTcIggc6dlLTRf9rQWL_Pso9j-eGzc5ug3SOqftI6uN_FPrDUQK4mUN0EpZB9pukMV-nNVnXLT4GCmLbD3LJsszixp8OaHPtY5ryFIgYdb-3D0Kv5f3z-ZJKEaa0Igcee-Kjrg-AvsL-X0zAZO-rVqNUyp2aaW4w","e":"AQAB"},"attributes":{"enabled":true,"created":1596204473,"updated":1596204473,"recoveryLevel":"Recoverable+Purgeable","recoverableDays":90}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'eastus',
  'x-ms-request-id',
  '9bce3896-9ff3-4f90-a5dd-097e0cf28223',
  'x-ms-keyvault-service-version',
  '1.1.10.0',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=108.226.109.105;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 31 Jul 2020 14:07:53 GMT',
  'Content-Length',
  '717' ]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/keys/cryptography-client-test2/create', {"kty":"RSA-HSM"})
  .query(true)
  .reply(200, {"key":{"kid":"https://keyvault_name.vault.azure.net/keys/cryptography-client-test2/f6a3708d3abe41b3ba2b95cd5dabb99f","kty":"RSA-HSM","key_ops":["encrypt","decrypt","sign","verify","wrapKey","unwrapKey"],"n":"3KqvVB5B2EK2f-GxauHsOm1xT2oh_QCqI0tWhIjvk61pUxqgtmLEop0LZpJMYTCOcfQAZMLHW1v4hbUPYo50U5j01KZQXiWE71hi9Db-zqbV0QeKKPhH1EMbUTG2wALqmen_cAE4LiOESCezIRuQvDWPttLj1gNfGlpQeBfZ2NtIAu8B84XAvT6IOJkHbtHPDwRZO1mqoOrBLSTlIatbPleP-qoiPrSXJJnFKdIJtjUs145jU8fjFenmmmK6DLbebO0xSxJ2XPikgpKNF6Ul8heg10qIbC0ucZjIERYj45phnSgYB1NBzhCwi0KYV3_7CEFgG0cCjy_eY026M_fmWQ","e":"AAEAAQ"},"attributes":{"enabled":true,"created":1596204474,"updated":1596204474,"recoveryLevel":"Recoverable+Purgeable","recoverableDays":90}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'eastus',
  'x-ms-request-id',
  '16dbb66f-ca93-4bb7-a760-25dfa1c59399',
  'x-ms-keyvault-service-version',
  '1.1.10.0',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=108.226.109.105;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Fri, 31 Jul 2020 14:07:54 GMT',
  'Content-Length',
  '724' ]);
