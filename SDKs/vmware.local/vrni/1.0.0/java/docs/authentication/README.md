# authentication

## Overview

Authentication APIs

### Available Operations

* [create](#create) - Create an auth token
* [delete](#delete) - Delete an auth token.

## create

<html><body> vRealize Network Insight supports token based authentication.Tokens are non-modifiable identifiers returned by the system when the user has successfully authenticated using valid credentials. Token expires after expiry time returned in the response. All API requests must provide the auth token in Authorization header in following format.<br> Authorization &#58; NetworkInsight {token} <br> If a token is invalid or expired, 401-Unauthorized error gets returned in the response of the API request. </body></html>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateResponse;
import org.openapis.openapi.models.shared.Domain;
import org.openapis.openapi.models.shared.DomainDomainTypeEnum;
import org.openapis.openapi.models.shared.UserCredential;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.UserCredential req = new UserCredential() {{
                domain = new Domain() {{
                    domainType = DomainDomainTypeEnum.LDAP;
                    value = "example.com";
                }};;
                password = "password";
                username = "admin@vrni.com";
            }};            

            CreateResponse res = sdk.authentication.create(req);

            if (res.token != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## delete

Deletes the auth token provided in Authorization header.
Deleting an expired or invalid token will result in 401 Unauthorized error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResponse;
import org.openapis.openapi.models.operations.DeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteResponse res = sdk.authentication.delete(new DeleteSecurity("hic") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
