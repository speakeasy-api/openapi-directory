import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantID: string;
}


export class GroupsCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class GroupsCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  groupCreateParameters?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  groupCreateParameters1?: Record<string, Record<string, any>>;
}


export class GroupsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupsCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: GroupsCreateQueryParams;

  @SpeakeasyMetadata()
  request: GroupsCreateRequests;
}


export class GroupsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  adGroup?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
