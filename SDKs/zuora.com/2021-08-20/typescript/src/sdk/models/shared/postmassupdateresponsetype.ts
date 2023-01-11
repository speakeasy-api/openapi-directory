import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostMassUpdateResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bulkKey" })
  bulkKey?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
