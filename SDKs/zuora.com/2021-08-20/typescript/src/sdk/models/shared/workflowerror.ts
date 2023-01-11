import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WorkflowErrorCodeEnum {
    Invalid = "invalid"
}


export class WorkflowError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: WorkflowErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
