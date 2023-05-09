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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [apiV2](docs/apiv2/README.md)

* [createPodcast](docs/apiv2/README.md#createpodcast) - Create podcast
* [createPodcastEpisode](docs/apiv2/README.md#createpodcastepisode) - Create podcast episode
* [deletePodcast](docs/apiv2/README.md#deletepodcast) - Delete podcast
* [deletePodcast1](docs/apiv2/README.md#deletepodcast1) - Delete podcast episode
* [getPartnerAggregatorStations](docs/apiv2/README.md#getpartneraggregatorstations) - List stations
* [getPodcast](docs/apiv2/README.md#getpodcast) - Get podcast
* [getPodcastCategories](docs/apiv2/README.md#getpodcastcategories) - Get the list of Categories that can be used to filter podcasts in the search podcasts request
* [getPodcastCountries](docs/apiv2/README.md#getpodcastcountries) - Get the list of Countries that can be used to filter podcasts in the search podcasts request
* [getPodcastEpisode](docs/apiv2/README.md#getpodcastepisode) - Get podcast episode
* [getPodcastEpisodes](docs/apiv2/README.md#getpodcastepisodes) - Get podcast episodes
* [getPodcastLanguages](docs/apiv2/README.md#getpodcastlanguages) - Get the list of Languages that can be used to filter podcasts in the search podcasts request
* [getStationCountries](docs/apiv2/README.md#getstationcountries) - Get the list of Countries that can be used to filter stations in the search stations request
* [getStationGenres](docs/apiv2/README.md#getstationgenres) - Get the list of Genres that can be used to filter stations in the search stations request
* [getStationLanguages](docs/apiv2/README.md#getstationlanguages) - Get the list of Languages that can be used to filter stations in the search stations request
* [searchPodcasts](docs/apiv2/README.md#searchpodcasts) - Search podcasts
* [searchStations](docs/apiv2/README.md#searchstations) - Search stations
* [updatePodcast](docs/apiv2/README.md#updatepodcast) - Update podcast
* [updatePodcastEpisode](docs/apiv2/README.md#updatepodcastepisode) - Update podcast episode
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
