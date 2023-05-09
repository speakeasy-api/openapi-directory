# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/zeno.fm/0.6-99cfdac/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.APIV2.CreatePodcast(ctx, operations.CreatePodcastRequestBody{
        FileLogo: operations.CreatePodcastRequestBodyFileLogo{
            Content: []byte("corrupti"),
            FileLogo: "provident",
        },
        Podcast: shared.Podcast{
            Author: sdk.String("distinctio"),
            Block: sdk.Bool(false),
            Categories: []string{
                "unde",
                "nulla",
                "corrupti",
                "illum",
            },
            Copyright: sdk.String("vel"),
            Country: sdk.String("Netherlands Antilles"),
            Description: "deserunt",
            Explicit: sdk.Bool(false),
            Image: sdk.String("suscipit"),
            Key: sdk.String("iure"),
            Keywords: []string{
                "debitis",
                "ipsa",
            },
            Language: "delectus",
            Link: sdk.String("tempora"),
            OwnerEmail: sdk.String("suscipit"),
            OwnerName: sdk.String("molestiae"),
            ShowType: sdk.String("minus"),
            Subtitle: sdk.String("placeat"),
            Summary: "voluptatum",
            Title: "Ms.",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [APIV2](docs/apiv2/README.md)

* [CreatePodcast](docs/apiv2/README.md#createpodcast) - Create podcast
* [CreatePodcastEpisode](docs/apiv2/README.md#createpodcastepisode) - Create podcast episode
* [DeletePodcast](docs/apiv2/README.md#deletepodcast) - Delete podcast
* [DeletePodcast1](docs/apiv2/README.md#deletepodcast1) - Delete podcast episode
* [GetPartnerAggregatorStations](docs/apiv2/README.md#getpartneraggregatorstations) - List stations
* [GetPodcast](docs/apiv2/README.md#getpodcast) - Get podcast
* [GetPodcastCategories](docs/apiv2/README.md#getpodcastcategories) - Get the list of Categories that can be used to filter podcasts in the search podcasts request
* [GetPodcastCountries](docs/apiv2/README.md#getpodcastcountries) - Get the list of Countries that can be used to filter podcasts in the search podcasts request
* [GetPodcastEpisode](docs/apiv2/README.md#getpodcastepisode) - Get podcast episode
* [GetPodcastEpisodes](docs/apiv2/README.md#getpodcastepisodes) - Get podcast episodes
* [GetPodcastLanguages](docs/apiv2/README.md#getpodcastlanguages) - Get the list of Languages that can be used to filter podcasts in the search podcasts request
* [GetStationCountries](docs/apiv2/README.md#getstationcountries) - Get the list of Countries that can be used to filter stations in the search stations request
* [GetStationGenres](docs/apiv2/README.md#getstationgenres) - Get the list of Genres that can be used to filter stations in the search stations request
* [GetStationLanguages](docs/apiv2/README.md#getstationlanguages) - Get the list of Languages that can be used to filter stations in the search stations request
* [SearchPodcasts](docs/apiv2/README.md#searchpodcasts) - Search podcasts
* [SearchStations](docs/apiv2/README.md#searchstations) - Search stations
* [UpdatePodcast](docs/apiv2/README.md#updatepodcast) - Update podcast
* [UpdatePodcastEpisode](docs/apiv2/README.md#updatepodcastepisode) - Update podcast episode
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
