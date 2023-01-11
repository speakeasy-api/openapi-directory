import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionsErrorResponse } from "./actionserrorresponse";



export class SaveResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Errors", elemType: ActionsErrorResponse })
  errors?: ActionsErrorResponse[];

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Success" })
  success?: boolean;
}
