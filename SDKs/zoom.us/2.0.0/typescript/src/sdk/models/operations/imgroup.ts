import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}

export enum ImGroup200ApplicationJsonTypeEnum {
    Normal = "normal",
    Shared = "shared",
    Restricted = "restricted"
}


// ImGroup200ApplicationJson
/** 
 * Group object.
**/
export class ImGroup200ApplicationJson extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ImGroup200ApplicationJsonTypeEnum;
}


export class ImGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ImGroupPathParams;
}


export class ImGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  imGroup200ApplicationJSONObject?: ImGroup200ApplicationJson;
}
