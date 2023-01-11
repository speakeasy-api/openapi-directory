import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddBatchWebinarRegistrantsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: string;
}


export class AddBatchWebinarRegistrantsApplicationJsonRegistrants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;
}


export class AddBatchWebinarRegistrantsApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_approve" })
  autoApprove?: boolean;

  @SpeakeasyMetadata({ data: "json, name=registrants", elemType: AddBatchWebinarRegistrantsApplicationJsonRegistrants })
  registrants?: AddBatchWebinarRegistrantsApplicationJsonRegistrants[];
}


export class AddBatchWebinarRegistrantsMultipartFormDataRegistrants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;
}


export class AddBatchWebinarRegistrantsMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=auto_approve" })
  autoApprove?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=registrants;json=true", elemType: AddBatchWebinarRegistrantsMultipartFormDataRegistrants })
  registrants?: AddBatchWebinarRegistrantsMultipartFormDataRegistrants[];
}


export class AddBatchWebinarRegistrantsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AddBatchWebinarRegistrantsApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AddBatchWebinarRegistrantsMultipartFormData1;
}


export class AddBatchWebinarRegistrantsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth?: shared.SchemeOAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer?: shared.SchemeBearer;
}


export class AddBatchWebinarRegistrants200ApplicationJsonRegistrants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=join_url" })
  joinUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=registrant_id" })
  registrantId?: string;
}


export class AddBatchWebinarRegistrants200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registrants", elemType: AddBatchWebinarRegistrants200ApplicationJsonRegistrants })
  registrants?: AddBatchWebinarRegistrants200ApplicationJsonRegistrants[];
}


export class AddBatchWebinarRegistrantsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddBatchWebinarRegistrantsPathParams;

  @SpeakeasyMetadata()
  request?: AddBatchWebinarRegistrantsRequests;

  @SpeakeasyMetadata()
  security: AddBatchWebinarRegistrantsSecurity;
}


export class AddBatchWebinarRegistrantsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addBatchWebinarRegistrants200ApplicationJSONObject?: AddBatchWebinarRegistrants200ApplicationJson;
}
