import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SettingValueRequest } from "./settingvaluerequest";



export class SettingsBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: SettingValueRequest })
  requests?: SettingValueRequest[];
}
