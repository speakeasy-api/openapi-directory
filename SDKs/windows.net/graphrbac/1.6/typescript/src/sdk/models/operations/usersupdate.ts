import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantID: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=upnOrObjectId" })
  upnOrObjectId: string;
}


export class UsersUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class UsersUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  userUpdateParameters?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  userUpdateParameters1?: Record<string, Record<string, any>>;
}


export class UsersUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: UsersUpdateQueryParams;

  @SpeakeasyMetadata()
  request: UsersUpdateRequests;
}


export class UsersUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;
}
