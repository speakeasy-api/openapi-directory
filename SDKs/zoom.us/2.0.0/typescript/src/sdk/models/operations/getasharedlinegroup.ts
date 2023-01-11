import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetASharedLineGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sharedLineGroupId" })
  sharedLineGroupId: string;
}


export class GetASharedLineGroup200ApplicationJsonMembersCommonAreaPhones extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class GetASharedLineGroup200ApplicationJsonMembersUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GetASharedLineGroup200ApplicationJsonMembers
/** 
 * View current [members](https://support.zoom.us/hc/en-us/articles/360038850792-Setting-up-shared-line-groups#h_3ffbbb77-a009-4c09-91e4-81fc264b61d6) of the shared line group.
**/
export class GetASharedLineGroup200ApplicationJsonMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=common_area_phones", elemType: GetASharedLineGroup200ApplicationJsonMembersCommonAreaPhones })
  commonAreaPhones?: GetASharedLineGroup200ApplicationJsonMembersCommonAreaPhones[];

  @SpeakeasyMetadata({ data: "json, name=users", elemType: GetASharedLineGroup200ApplicationJsonMembersUsers })
  users?: GetASharedLineGroup200ApplicationJsonMembersUsers[];
}


export class GetASharedLineGroup200ApplicationJsonPhoneNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}


// GetASharedLineGroup200ApplicationJsonSite
/** 
 * Site assigned to the Shared Line Group.
**/
export class GetASharedLineGroup200ApplicationJsonSite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum GetASharedLineGroup200ApplicationJsonStatusEnum {
    Active = "active",
    Inactive = "inactive"
}


export class GetASharedLineGroup200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: GetASharedLineGroup200ApplicationJsonMembers;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: GetASharedLineGroup200ApplicationJsonPhoneNumbers })
  phoneNumbers?: GetASharedLineGroup200ApplicationJsonPhoneNumbers[];

  @SpeakeasyMetadata({ data: "json, name=primary_number" })
  primaryNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: GetASharedLineGroup200ApplicationJsonSite;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetASharedLineGroup200ApplicationJsonStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;
}


export class GetASharedLineGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetASharedLineGroupPathParams;
}


export class GetASharedLineGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getASharedLineGroup200ApplicationJSONObject?: GetASharedLineGroup200ApplicationJson;
}
