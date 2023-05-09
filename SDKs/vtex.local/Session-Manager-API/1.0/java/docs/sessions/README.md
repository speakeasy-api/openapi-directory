# sessions

### Available Operations

* [createnewsession](#createnewsession) - Create new session
* [editsession](#editsession) - Edit session
* [getSession](#getsession) - Get Session

## createnewsession

The response should contain a session cookie. Further `POST` or `PATCH` requests will edit the existing session rather than creating a new one. All parameters in the body that are not within the public namespace will be ignored. Query string items will automatically be added to the public namespace. Cookies relevant to the session manager execution are also recorded.

> The sessions API uses the `vtex_session` cookie to store the data required to identify the user and the session. This cookie is stored in the user's browser when the session is created and sent automatically in every request to that domain. You will have to reproduce that in order for it to work outside of a browser environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatenewsessionResponse;
import org.openapis.openapi.models.shared.Country;
import org.openapis.openapi.models.shared.CreatenewsessionRequest;
import org.openapis.openapi.models.shared.PostalCode;
import org.openapis.openapi.models.shared.Public;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreatenewsessionRequest req = new CreatenewsessionRequest(                new Public(                new Country("corrupti");,                 new PostalCode("provident");););            

            CreatenewsessionResponse res = sdk.sessions.createnewsession(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## editsession

This works exactly the same as the POST create session, but when the request is sent with a vtex_session cookie, it retrieves the session first and then applies the changes instead of generating a new one.

As with the `POST` method, only keys inside the public namespace on the body are considered, and query parameters are automatically added to the public namespace.

> The sessions API uses the `vtex_session` cookie to store the data required to identify the user and the session. This cookie is stored in the user's browser when the session is created and sent automatically in every request to that domain. You will have to reproduce that in order for it to work outside of a browser environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EditsessionResponse;
import org.openapis.openapi.models.shared.EditsessionRequest;
import org.openapis.openapi.models.shared.NewValue;
import org.openapis.openapi.models.shared.Public1;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.EditsessionRequest req = new EditsessionRequest(                new Public1(                new NewValue("distinctio");););            

            EditsessionResponse res = sdk.sessions.editsession(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSession

Items are the keys of the values you wish to get. It follows the format `namespace1.key1,namespace2.key2`. So if you wish to recover the data sent on the previous request, it should be `public.country,public.postalCode`.

> The sessions API uses the `vtex_session` cookie to store the data required to identify the user and the session. This cookie is stored in the user's browser when the session is created and sent automatically in every request to that domain. You will have to reproduce that in order for it to work outside of a browser environment.

> If you want to retrieve all keys from Session Manager, you can use the wildcard operator (`*`) in your request (i.e. `?items=*`).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSessionRequest;
import org.openapis.openapi.models.operations.GetSessionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSessionRequest req = new GetSessionRequest("namespace1.key1,namespace2.key2");            

            GetSessionResponse res = sdk.sessions.getSession(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
