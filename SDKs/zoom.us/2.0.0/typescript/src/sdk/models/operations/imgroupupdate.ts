import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImGroupUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}

export enum ImGroupUpdateApplicationJsonTypeEnum {
    Normal = "normal",
    Shared = "shared",
    Restricted = "restricted"
}


export class ImGroupUpdateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=search_by_account" })
  searchByAccount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=search_by_domain" })
  searchByDomain?: boolean;

  @SpeakeasyMetadata({ data: "json, name=search_by_ma_account" })
  searchByMaAccount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ImGroupUpdateApplicationJsonTypeEnum;
}

export enum ImGroupUpdateMultipartFormDataTypeEnum {
    Normal = "normal",
    Shared = "shared",
    Restricted = "restricted"
}


export class ImGroupUpdateMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=search_by_account" })
  searchByAccount?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=search_by_domain" })
  searchByDomain?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=search_by_ma_account" })
  searchByMaAccount?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type?: ImGroupUpdateMultipartFormDataTypeEnum;
}


export class ImGroupUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: ImGroupUpdateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: ImGroupUpdateMultipartFormData;
}


export class ImGroupUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ImGroupUpdatePathParams;

  @SpeakeasyMetadata()
  request: ImGroupUpdateRequests;
}


export class ImGroupUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
