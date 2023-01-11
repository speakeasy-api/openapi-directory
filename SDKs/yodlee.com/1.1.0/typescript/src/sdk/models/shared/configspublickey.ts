import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfigsPublicKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;
}
