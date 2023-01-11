import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ImGroupCreateApplicationJsonTypeEnum {
    Normal = "normal",
    Shared = "shared",
    Restricted = "restricted"
}


export class ImGroupCreateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=search_by_account" })
  searchByAccount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=search_by_domain" })
  searchByDomain?: boolean;

  @SpeakeasyMetadata({ data: "json, name=search_by_ma_account" })
  searchByMaAccount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ImGroupCreateApplicationJsonTypeEnum;
}

export enum ImGroupCreateMultipartFormDataTypeEnum {
    Normal = "normal",
    Shared = "shared",
    Restricted = "restricted"
}


export class ImGroupCreateMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=search_by_account" })
  searchByAccount?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=search_by_domain" })
  searchByDomain?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=search_by_ma_account" })
  searchByMaAccount?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type?: ImGroupCreateMultipartFormDataTypeEnum;
}


export class ImGroupCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: ImGroupCreateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: ImGroupCreateMultipartFormData;
}


export class ImGroupCreate201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=search_by_account" })
  searchByAccount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=search_by_domain" })
  searchByDomain?: boolean;

  @SpeakeasyMetadata({ data: "json, name=search_by_ma_account" })
  searchByMaAccount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=total_members" })
  totalMembers?: number;
}


export class ImGroupCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: ImGroupCreateRequests;
}


export class ImGroupCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  imGroupCreate201ApplicationJSONObject?: ImGroupCreate201ApplicationJson;
}
