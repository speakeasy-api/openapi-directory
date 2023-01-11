import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateCallQueuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=callQueueId" })
  callQueueId: string;
}

export enum UpdateCallQueueApplicationJsonStatusEnum {
    Active = "active",
    Inactive = "inactive"
}


export class UpdateCallQueueApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=site_id" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: UpdateCallQueueApplicationJsonStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;
}

export enum UpdateCallQueueMultipartFormDataStatusEnum {
    Active = "active",
    Inactive = "inactive"
}


export class UpdateCallQueueMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=site_id" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=status" })
  status?: UpdateCallQueueMultipartFormDataStatusEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=timezone" })
  timezone?: string;
}


export class UpdateCallQueueRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: UpdateCallQueueApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: UpdateCallQueueMultipartFormData;
}


export class UpdateCallQueueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UpdateCallQueueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateCallQueuePathParams;

  @SpeakeasyMetadata()
  request?: UpdateCallQueueRequests;

  @SpeakeasyMetadata()
  security: UpdateCallQueueSecurity;
}


export class UpdateCallQueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateCallQueue204ApplicationJSONAny?: any;
}
