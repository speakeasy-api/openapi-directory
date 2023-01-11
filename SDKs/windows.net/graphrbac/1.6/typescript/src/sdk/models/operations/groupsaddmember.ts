import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupsAddMemberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupObjectId" })
  groupObjectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantID: string;
}


export class GroupsAddMemberQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class GroupsAddMemberRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  groupAddMemberParameters?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  groupAddMemberParameters1?: Record<string, Record<string, any>>;
}


export class GroupsAddMemberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupsAddMemberPathParams;

  @SpeakeasyMetadata()
  queryParams: GroupsAddMemberQueryParams;

  @SpeakeasyMetadata()
  request: GroupsAddMemberRequests;
}


export class GroupsAddMemberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
