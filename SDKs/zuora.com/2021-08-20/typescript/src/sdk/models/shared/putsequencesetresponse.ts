import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutSequenceSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
