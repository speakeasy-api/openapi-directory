# files

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [uploadFile](#uploadfile) - Uploads a temporary file (ie. for XML import). Returns token which can be used in other API calls.

## uploadFile

When a file is required by an operation (ie. task creation) it must be uploaded previously to the API.
Uploading a file will result in a file token, which can be used to reference this file in other API calls.
 Each file must be uploaded separately.
 Keep in mind that file token has limited validity (ie. 10 minutes).
 Therefore files must be uploaded just before issuing API call which reference them.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadFileResponse;
import org.openapis.openapi.models.shared.FileToUploadDto;
import org.openapis.openapi.models.shared.FileToUploadDtoFile;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.FileToUploadDto req = new FileToUploadDto() {{
                file = new FileToUploadDtoFile("accusantium".getBytes(), "beatae");;
            }};            

            UploadFileResponse res = sdk.files.uploadFile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
