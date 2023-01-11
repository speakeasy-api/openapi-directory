import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostBillingDocumentFilesDeletionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountIds" })
  accountIds?: string[];
}
