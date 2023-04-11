# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/zeno.fm/0.6-99cfdac/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/zeno.fm/0.6-99cfdac/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreatePodcastRequestBody,
  CreatePodcastResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: CreatePodcastRequestBody = {
  fileLogo: {
    content: "corrupti".encode(),
    fileLogo: "provident",
  },
  podcast: {
    author: "distinctio",
    block: false,
    categories: [
      "unde",
      "nulla",
      "corrupti",
      "illum",
    ],
    copyright: "vel",
    country: "Netherlands Antilles",
    description: "deserunt",
    explicit: false,
    image: "suscipit",
    key: "iure",
    keywords: [
      "debitis",
      "ipsa",
    ],
    language: "delectus",
    link: "tempora",
    ownerEmail: "suscipit",
    ownerName: "molestiae",
    showType: "minus",
    subtitle: "placeat",
    summary: "voluptatum",
    title: "Ms.",
  },
};

sdk.apiV2.createPodcast(req).then((res: CreatePodcastResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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

