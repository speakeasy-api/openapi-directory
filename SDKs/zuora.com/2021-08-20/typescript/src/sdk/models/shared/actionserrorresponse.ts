import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
