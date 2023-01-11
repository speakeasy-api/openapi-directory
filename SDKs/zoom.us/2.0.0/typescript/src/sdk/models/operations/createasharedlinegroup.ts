import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateASharedLineGroupApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=site_id" })
  siteId?: string;
}


export class CreateASharedLineGroupMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=display_name" })
  displayName: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=site_id" })
  siteId?: string;
}


export class CreateASharedLineGroupRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: CreateASharedLineGroupApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: CreateASharedLineGroupMultipartFormData;
}


export class CreateASharedLineGroupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class CreateASharedLineGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: CreateASharedLineGroupRequests;

  @SpeakeasyMetadata()
  security: CreateASharedLineGroupSecurity;
}


export class CreateASharedLineGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createASharedLineGroup200ApplicationJSONAny?: any;
}
