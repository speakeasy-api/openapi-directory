<!-- Start SDK Example Usage -->
```typescript
import {
  GetAudioRequest,
  GetAudioResponse,
  GetAudioUseCanonicalEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAudioRequest = {
  limit: 548814,
  useCanonical: GetAudioUseCanonicalEnum.True,
  word: "distinctio",
};

sdk.word.getAudio(req).then((res: GetAudioResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->