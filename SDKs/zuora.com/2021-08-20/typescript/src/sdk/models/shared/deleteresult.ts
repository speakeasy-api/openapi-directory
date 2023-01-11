import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionsErrorResponse } from "./actionserrorresponse";



export class DeleteResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ActionsErrorResponse })
  errors?: ActionsErrorResponse[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
