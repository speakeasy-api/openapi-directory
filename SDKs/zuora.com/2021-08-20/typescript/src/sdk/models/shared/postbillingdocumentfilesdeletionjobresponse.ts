import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostBillingDocumentFilesDeletionJobResponseStatusEnum {
    Pending = "Pending"
}


export class PostBillingDocumentFilesDeletionJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PostBillingDocumentFilesDeletionJobResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
