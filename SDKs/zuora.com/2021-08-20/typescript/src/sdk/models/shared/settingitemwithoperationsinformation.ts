import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SettingItemHttpOperation } from "./settingitemhttpoperation";


export enum SettingItemWithOperationsInformationContextEnum {
    Tenant = "Tenant",
    Entity = "Entity",
    User = "User",
    None = "None"
}


export class SettingItemWithOperationsInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: SettingItemWithOperationsInformationContextEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=httpOperations", elemType: SettingItemHttpOperation })
  httpOperations?: SettingItemHttpOperation[];

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=pathPattern" })
  pathPattern?: string;
}
