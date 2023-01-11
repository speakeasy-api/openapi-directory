import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AddSettingTemplateApplicationJsonTypeEnum {
    User = "user",
    Group = "group",
    AutoReceptionist = "autoReceptionist",
    Commonarea = "commonarea",
    Interop = "interop"
}


export class AddSettingTemplateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=site_id" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: AddSettingTemplateApplicationJsonTypeEnum;
}

export enum AddSettingTemplateMultipartFormDataTypeEnum {
    User = "user",
    Group = "group",
    AutoReceptionist = "autoReceptionist",
    Commonarea = "commonarea",
    Interop = "interop"
}


export class AddSettingTemplateMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=site_id" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type: AddSettingTemplateMultipartFormDataTypeEnum;
}


export class AddSettingTemplateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AddSettingTemplateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AddSettingTemplateMultipartFormData;
}


export class AddSettingTemplate201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AddSettingTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: AddSettingTemplateRequests;
}


export class AddSettingTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addSettingTemplate201ApplicationJSONObject?: AddSettingTemplate201ApplicationJson;
}
