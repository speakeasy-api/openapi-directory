import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// Groups200ApplicationJsonGroups
/** 
 * Group object.
**/
export class Groups200ApplicationJsonGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=total_members" })
  totalMembers?: number;
}


// Groups200ApplicationJson
/** 
 * List of Groups.
**/
export class Groups200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groups", elemType: Groups200ApplicationJsonGroups })
  groups?: Groups200ApplicationJsonGroups[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class GroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GroupsSecurity;
}


export class GroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  groups200ApplicationJSONObject?: Groups200ApplicationJson;
}
