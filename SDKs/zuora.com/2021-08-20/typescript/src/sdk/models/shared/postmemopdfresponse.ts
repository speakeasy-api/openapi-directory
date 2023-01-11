import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostMemoPdfResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
