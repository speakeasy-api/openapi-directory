# note

### Available Operations

* [getNote](#getnote) - Retrieve Note
* [getNotesbyorderId](#getnotesbyorderid) - Get Notes by orderId
* [newNote](#newnote) - Create Note

## getNote

Retrieves a given note in VTEX DO, filtering by `noteId`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNoteRequest;
import org.openapis.openapi.models.operations.GetNoteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio", "quibusdam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNoteRequest req = new GetNoteRequest("application/json", "application/json", "654321cba") {{
                reason = "data-validation";
            }};            

            GetNoteResponse res = sdk.note.getNote(req);

            if (res.getNote200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNotesbyorderId

Retrieves notes related to a specific `orderId`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNotesbyorderIdRequest;
import org.openapis.openapi.models.operations.GetNotesbyorderIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde", "nulla") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNotesbyorderIdRequest req = new GetNotesbyorderIdRequest("application/json", "application/json", "1172452900788-01") {{
                page = 3L;
                perPage = 20L;
                reason = "data-validation";
            }};            

            GetNotesbyorderIdResponse res = sdk.note.getNotesbyorderId(req);

            if (res.getNotesbyorderId200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## newNote

This endpoint creates a new note in VTEX DO. Be aware of the following limitations:

- The maximum number of notes for an order is 30.

- The maximum number of characters in a note's description is 2000.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NewNoteRequest;
import org.openapis.openapi.models.operations.NewNoteRequestBody;
import org.openapis.openapi.models.operations.NewNoteRequestBodyTarget;
import org.openapis.openapi.models.operations.NewNoteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti", "illum") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            NewNoteRequest req = new NewNoteRequest("application/json", "application/json") {{
                requestBody = new NewNoteRequestBody("Order ID in the marketplace is 786-09.", "oms",                 new NewNoteRequestBodyTarget() {{
                                    id = "v964735bdev-01";
                                    type = "order";
                                    url = "https://basedevmkp.vtexcommercebeta.com.br/admin/checkout/#/orders/v964741bdev-01";
                                }};);;
            }};            

            NewNoteResponse res = sdk.note.newNote(req);

            if (res.newNote200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
