import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserPermissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UserPermission200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}


export class UserPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserPermissionPathParams;
}


export class UserPermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userPermission200ApplicationJSONObject?: UserPermission200ApplicationJson;
}
