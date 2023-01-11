import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostCustomObjectRecordsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowPartialSuccess" })
  allowPartialSuccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=records" })
  records: Record<string, any>[];
}
