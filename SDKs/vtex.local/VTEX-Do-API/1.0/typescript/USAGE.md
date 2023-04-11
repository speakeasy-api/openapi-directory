<!-- Start SDK Example Usage -->
```typescript
import {
  GetNoteRequest,
  GetNoteResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    appKey: "YOUR_API_KEY_HERE",
    appToken: "YOUR_API_KEY_HERE",
  },
});

const req: GetNoteRequest = {
  accept: "application/json",
  contentType: "application/json",
  noteId: "654321cba",
  reason: "data-validation",
};

sdk.note.getNote(req).then((res: GetNoteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->