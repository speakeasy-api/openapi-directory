import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChangeParentLocationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=locationId" })
  locationId: string;
}


export class ChangeParentLocationApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parent_location_id" })
  parentLocationId?: string;
}


export class ChangeParentLocationMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=parent_location_id" })
  parentLocationId?: string;
}


export class ChangeParentLocationRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: ChangeParentLocationApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: ChangeParentLocationMultipartFormData;
}


export class ChangeParentLocationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ChangeParentLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChangeParentLocationPathParams;

  @SpeakeasyMetadata()
  request?: ChangeParentLocationRequests;

  @SpeakeasyMetadata()
  security: ChangeParentLocationSecurity;
}


export class ChangeParentLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  changeParentLocation204ApplicationJSONAny?: any;
}
