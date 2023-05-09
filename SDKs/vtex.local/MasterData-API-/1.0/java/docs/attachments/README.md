# attachments

## Overview

The `attachments` API allows you to upload and download files. 

In case of images, the `content-type` header is filled with` image/jpg`.

### Available Operations

* [retrieveattachment](#retrieveattachment) - Retrieve attachment
* [saveattachment](#saveattachment) - Save attachment

## retrieveattachment

Use this API to retrieve a file.

Be sure to include the file extension in the name. Like in this example:
```
/dataentities/CL/documents/123/file/attachments/image.png
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveattachmentRequest;
import org.openapis.openapi.models.operations.RetrieveattachmentResponse;
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

            RetrieveattachmentRequest req = new RetrieveattachmentRequest("vel", "error", "deserunt", "suscipit");            

            RetrieveattachmentResponse res = sdk.attachments.retrieveattachment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveattachment

This API allows you to save a file in a field of type `File`.

When using in javascript, you must add the header `content-type` with value `multipart/form-data;`

You can upload more than one file. Just add a new field in the `form-data` with type `File`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveattachmentRequest;
import org.openapis.openapi.models.operations.SaveattachmentRequestBody;
import org.openapis.openapi.models.operations.SaveattachmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure", "magnam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SaveattachmentRequest req = new SaveattachmentRequest("debitis", "ipsa", "delectus") {{
                requestBody = new SaveattachmentRequestBody(                new byte[][]{{
                                    add("suscipit".getBytes()),
                                    add("molestiae".getBytes()),
                                }});;
            }};            

            SaveattachmentResponse res = sdk.attachments.saveattachment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
