import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectBulkDeleteFilter } from "./customobjectbulkdeletefilter";


export enum CustomObjectBulkJobRequestNamespaceEnum {
    Default = "default",
    ComZuora = "com_zuora"
}

export enum CustomObjectBulkJobRequestOperationEnum {
    Delete = "delete",
    Create = "create"
}


export class CustomObjectBulkJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: CustomObjectBulkDeleteFilter;

  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace: CustomObjectBulkJobRequestNamespaceEnum;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation: CustomObjectBulkJobRequestOperationEnum;
}
