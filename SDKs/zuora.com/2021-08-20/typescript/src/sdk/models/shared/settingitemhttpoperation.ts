import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SettingItemHttpRequestParameter } from "./settingitemhttprequestparameter";


export enum SettingItemHttpOperationMethodEnum {
    Get = "GET",
    Head = "HEAD",
    Post = "POST",
    Put = "PUT",
    Patch = "PATCH",
    Delete = "DELETE",
    Options = "OPTIONS",
    Trace = "TRACE"
}


export class SettingItemHttpOperation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: SettingItemHttpOperationMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: SettingItemHttpRequestParameter })
  parameters?: SettingItemHttpRequestParameter[];

  @SpeakeasyMetadata({ data: "json, name=requestType" })
  requestType?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=responseType" })
  responseType?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
