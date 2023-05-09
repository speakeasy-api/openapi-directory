<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePodcastRequestBody;
import org.openapis.openapi.models.operations.CreatePodcastRequestBodyFileLogo;
import org.openapis.openapi.models.operations.CreatePodcastResponse;
import org.openapis.openapi.models.shared.Podcast;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePodcastRequestBody req = new CreatePodcastRequestBody(                new CreatePodcastRequestBodyFileLogo("provident".getBytes(), "distinctio");,                 new Podcast(                new String[]{{
                                                add("unde"),
                                                add("nulla"),
                                                add("corrupti"),
                                                add("illum"),
                                            }}, "vel", "error", "deserunt", "suscipit") {{
                                author = "iure";
                                block = false;
                                copyright = "magnam";
                                country = "Togo";
                                explicit = false;
                                image = "ipsa";
                                key = "delectus";
                                keywords = new String[]{{
                                    add("suscipit"),
                                    add("molestiae"),
                                }};
                                link = "minus";
                                ownerEmail = "placeat";
                                ownerName = "voluptatum";
                                showType = "iusto";
                                subtitle = "excepturi";
                            }};);            

            CreatePodcastResponse res = sdk.apiV2.createPodcast(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->