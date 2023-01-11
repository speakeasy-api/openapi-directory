import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutRevproAccCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
