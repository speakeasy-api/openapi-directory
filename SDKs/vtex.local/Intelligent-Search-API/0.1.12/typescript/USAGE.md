<!-- Start SDK Example Usage -->
```typescript
import {
  GetAutocompleteSuggestionsRequest,
  GetAutocompleteSuggestionsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAutocompleteSuggestionsRequest = {
  locale: "corrupti",
  query: "provident",
};

sdk.autocomplete.getAutocompleteSuggestions(req).then((res: GetAutocompleteSuggestionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->