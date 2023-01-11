import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListSettingTemplatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" })
  siteId?: string;
}


export class ListSettingTemplatesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum ListSettingTemplates200ApplicationJsonTemplatesTypeEnum {
    User = "user",
    Group = "group",
    AutReceptionist = "autReceptionist",
    CommonArea = "commonArea",
    Zr = "zr",
    Interop = "interop"
}


export class ListSettingTemplates200ApplicationJsonTemplates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ListSettingTemplates200ApplicationJsonTemplatesTypeEnum;
}


export class ListSettingTemplates200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=templates", elemType: ListSettingTemplates200ApplicationJsonTemplates })
  templates?: ListSettingTemplates200ApplicationJsonTemplates[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class ListSettingTemplatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListSettingTemplatesQueryParams;

  @SpeakeasyMetadata()
  security: ListSettingTemplatesSecurity;
}


export class ListSettingTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listSettingTemplates200ApplicationJSONObject?: ListSettingTemplates200ApplicationJson;
}
