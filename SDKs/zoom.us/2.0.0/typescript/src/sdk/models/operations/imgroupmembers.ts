import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImGroupMembersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class ImGroupMembersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_number" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class ImGroupMembersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// ImGroupMembersGroupMemberListMembers
/** 
 * Group member object.
**/
export class ImGroupMembersGroupMemberListMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}


// ImGroupMembersGroupMemberList
/** 
 * Pagination Object.
**/
export class ImGroupMembersGroupMemberList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=members", elemType: ImGroupMembersGroupMemberListMembers })
  members?: ImGroupMembersGroupMemberListMembers[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_number" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class ImGroupMembersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ImGroupMembersPathParams;

  @SpeakeasyMetadata()
  queryParams: ImGroupMembersQueryParams;

  @SpeakeasyMetadata()
  security: ImGroupMembersSecurity;
}


export class ImGroupMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  groupMemberList?: ImGroupMembersGroupMemberList;

  @SpeakeasyMetadata()
  statusCode: number;
}
