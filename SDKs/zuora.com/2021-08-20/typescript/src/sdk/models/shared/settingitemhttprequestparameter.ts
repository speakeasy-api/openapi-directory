import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SettingItemHttpRequestParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
