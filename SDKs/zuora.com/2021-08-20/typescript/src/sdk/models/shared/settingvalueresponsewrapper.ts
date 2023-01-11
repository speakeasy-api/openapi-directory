import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SettingValueResponse } from "./settingvalueresponse";


export enum SettingValueResponseWrapperMethodEnum {
    Get = "GET",
    Head = "HEAD",
    Post = "POST",
    Put = "PUT",
    Patch = "PATCH",
    Delete = "DELETE",
    Options = "OPTIONS",
    Trace = "TRACE"
}


export class SettingValueResponseWrapper extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: SettingValueResponseWrapperMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: SettingValueResponse;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
