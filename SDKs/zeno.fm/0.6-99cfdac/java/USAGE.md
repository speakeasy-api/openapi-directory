<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreatePodcastRequestBodyFileLogo;
import org.openapis.openapi.models.operations.CreatePodcastRequestBody;
import org.openapis.openapi.models.operations.CreatePodcastResponse;
import org.openapis.openapi.models.shared.Podcast;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePodcastRequestBody req = new CreatePodcastRequestBody() {{
                fileLogo = new CreatePodcastRequestBodyFileLogo() {{
                    content = "corrupti".getBytes();
                    fileLogo = "provident";
                }};
                podcast = new Podcast() {{
                    author = "distinctio";
                    block = false;
                    categories = new String[]{{
                        add("unde"),
                        add("nulla"),
                        add("corrupti"),
                        add("illum"),
                    }};
                    copyright = "vel";
                    country = "Netherlands Antilles";
                    description = "deserunt";
                    explicit = false;
                    image = "suscipit";
                    key = "iure";
                    keywords = new String[]{{
                        add("debitis"),
                        add("ipsa"),
                    }};
                    language = "delectus";
                    link = "tempora";
                    ownerEmail = "suscipit";
                    ownerName = "molestiae";
                    showType = "minus";
                    subtitle = "placeat";
                    summary = "voluptatum";
                    title = "Ms.";
                }};
            }}            

            CreatePodcastResponse res = sdk.apiV2.createPodcast(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->