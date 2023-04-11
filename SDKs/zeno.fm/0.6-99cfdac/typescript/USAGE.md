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