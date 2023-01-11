import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" })
  tenantID: string;
}


export class UsersCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" })
  apiVersion: string;
}


export class UsersCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  userCreateParameters?: Record<string, Record<string, any>>;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  userCreateParameters1?: Record<string, Record<string, any>>;
}


export class UsersCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: UsersCreateQueryParams;

  @SpeakeasyMetadata()
  request: UsersCreateRequests;
}


export class UsersCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  graphError?: shared.GraphError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  user?: Record<string, Record<string, any>>;
}
