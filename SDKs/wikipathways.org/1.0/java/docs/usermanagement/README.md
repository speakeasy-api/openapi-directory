# userManagement

### Available Operations

* [getGetUserByOrcid](#getgetuserbyorcid) - getUserByOrcid
* [getLogin](#getlogin) - loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).

## getGetUserByOrcid

getUserByOrcid

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGetUserByOrcidFormatEnum;
import org.openapis.openapi.models.operations.GetGetUserByOrcidRequest;
import org.openapis.openapi.models.operations.GetGetUserByOrcidResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGetUserByOrcidRequest req = new GetGetUserByOrcidRequest("assumenda") {{
                format = GetGetUserByOrcidFormatEnum.HTML;
            }};            

            GetGetUserByOrcidResponse res = sdk.userManagement.getGetUserByOrcid(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLogin

loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLoginFormatEnum;
import org.openapis.openapi.models.operations.GetLoginRequest;
import org.openapis.openapi.models.operations.GetLoginResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLoginRequest req = new GetLoginRequest("alias", "fugit") {{
                format = GetLoginFormatEnum.JPG;
            }};            

            GetLoginResponse res = sdk.userManagement.getLogin(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
