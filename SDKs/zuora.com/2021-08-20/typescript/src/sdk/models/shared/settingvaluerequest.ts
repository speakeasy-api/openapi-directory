import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChildrenSettingValueRequest } from "./childrensettingvaluerequest";


export enum SettingValueRequestMethodEnum {
    Get = "GET",
    Head = "HEAD",
    Post = "POST",
    Put = "PUT",
    Patch = "PATCH",
    Delete = "DELETE",
    Options = "OPTIONS",
    Trace = "TRACE"
}


export class SettingValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=children", elemType: ChildrenSettingValueRequest })
  children?: ChildrenSettingValueRequest[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: SettingValueRequestMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
