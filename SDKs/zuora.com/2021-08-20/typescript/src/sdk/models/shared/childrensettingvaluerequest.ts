import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ChildrenSettingValueRequestMethodEnum {
    Get = "GET",
    Head = "HEAD",
    Post = "POST",
    Put = "PUT",
    Patch = "PATCH",
    Delete = "DELETE",
    Options = "OPTIONS",
    Trace = "TRACE"
}


export class ChildrenSettingValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: ChildrenSettingValueRequestMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
