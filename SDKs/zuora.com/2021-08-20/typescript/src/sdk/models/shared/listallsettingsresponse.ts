import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SettingItemWithOperationsInformation } from "./settingitemwithoperationsinformation";



export class ListAllSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=settings", elemType: SettingItemWithOperationsInformation })
  settings?: SettingItemWithOperationsInformation[];
}
