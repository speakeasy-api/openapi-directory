import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ImGroupsImGroupListGroupsTypeEnum {
    Normal = "normal",
    Shared = "shared",
    Restricted = "restricted"
}


// ImGroupsImGroupListGroups
/** 
 * Group object.
**/
export class ImGroupsImGroupListGroups extends SpeakeasyBase {
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
  type?: ImGroupsImGroupListGroupsTypeEnum;
}


// ImGroupsImGroupList
/** 
 * List of IM Groups.
**/
export class ImGroupsImGroupList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groups", elemType: ImGroupsImGroupListGroups })
  groups?: ImGroupsImGroupListGroups[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class ImGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imGroupList?: ImGroupsImGroupList;

  @SpeakeasyMetadata()
  statusCode: number;
}
