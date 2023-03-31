# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreatePodcastRequestBodyFileLogo;
import org.openapis.openapi.models.operations.CreatePodcastRequestBody;
import org.openapis.openapi.models.operations.CreatePodcastRequest;
import org.openapis.openapi.models.operations.CreatePodcastResponse;
import org.openapis.openapi.models.shared.Podcast;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreatePodcastRequest req = new CreatePodcastRequest() {{
                request = new CreatePodcastRequestBody() {{
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
                }};
            }};            

            CreatePodcastResponse res = sdk.apiV2.createPodcast(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### apiV2

* `createPodcast` - Create podcast
* `createPodcastEpisode` - Create podcast episode
* `deletePodcast` - Delete podcast
* `deletePodcast1` - Delete podcast episode
* `getPartnerAggregatorStations` - List stations
* `getPodcast` - Get podcast
* `getPodcastCategories` - Get the list of Categories that can be used to filter podcasts in the search podcasts request
* `getPodcastCountries` - Get the list of Countries that can be used to filter podcasts in the search podcasts request
* `getPodcastEpisode` - Get podcast episode
* `getPodcastEpisodes` - Get podcast episodes
* `getPodcastLanguages` - Get the list of Languages that can be used to filter podcasts in the search podcasts request
* `getStationCountries` - Get the list of Countries that can be used to filter stations in the search stations request
* `getStationGenres` - Get the list of Genres that can be used to filter stations in the search stations request
* `getStationLanguages` - Get the list of Languages that can be used to filter stations in the search stations request
* `searchPodcasts` - Search podcasts
* `searchStations` - Search stations
* `updatePodcast` - Update podcast
* `updatePodcastEpisode` - Update podcast episode
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
