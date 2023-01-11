import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddAzrLocationApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent_location_id" })
  parentLocationId?: string;
}


export class AddAzrLocationMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=parent_location_id" })
  parentLocationId?: string;
}


export class AddAzrLocationRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AddAzrLocationApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AddAzrLocationMultipartFormData;
}


export class AddAzrLocationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum AddAzrLocation200ApplicationJsonTypeEnum {
    Country = "country",
    States = "states",
    City = "city",
    Campus = "campus",
    Building = "building",
    Floor = "floor"
}


export class AddAzrLocation200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent_location_id" })
  parentLocationId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AddAzrLocation200ApplicationJsonTypeEnum;
}


export class AddAzrLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: AddAzrLocationRequests;

  @SpeakeasyMetadata()
  security: AddAzrLocationSecurity;
}


export class AddAzrLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addAZRLocation200ApplicationJSONObject?: AddAzrLocation200ApplicationJson;
}
