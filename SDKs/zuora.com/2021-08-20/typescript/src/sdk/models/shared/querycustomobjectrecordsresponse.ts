import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QueryCustomObjectRecordsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=records" })
  records: Record<string, any>[];
}
