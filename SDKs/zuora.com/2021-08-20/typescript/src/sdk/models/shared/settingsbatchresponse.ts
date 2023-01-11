import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SettingValueResponseWrapper } from "./settingvalueresponsewrapper";



export class SettingsBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=responses", elemType: SettingValueResponseWrapper })
  responses?: SettingValueResponseWrapper[];
}
