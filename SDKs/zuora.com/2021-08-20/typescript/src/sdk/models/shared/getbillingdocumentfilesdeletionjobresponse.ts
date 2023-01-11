import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetBillingDocumentFilesDeletionJobResponseStatusEnum {
    Pending = "Pending",
    Processing = "Processing",
    Completed = "Completed",
    Error = "Error"
}


export class GetBillingDocumentFilesDeletionJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetBillingDocumentFilesDeletionJobResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
