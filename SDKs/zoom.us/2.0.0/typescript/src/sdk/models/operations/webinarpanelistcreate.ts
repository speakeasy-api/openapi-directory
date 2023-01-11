import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WebinarPanelistCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: number;
}


// WebinarPanelistCreateApplicationJsonPanelists
/** 
 * Panelist base object.
**/
export class WebinarPanelistCreateApplicationJsonPanelists extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// WebinarPanelistCreateApplicationJson
/** 
 * Webinar panelist.
**/
export class WebinarPanelistCreateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=panelists", elemType: WebinarPanelistCreateApplicationJsonPanelists })
  panelists?: WebinarPanelistCreateApplicationJsonPanelists[];
}


// WebinarPanelistCreateMultipartFormDataPanelists
/** 
 * Panelist base object.
**/
export class WebinarPanelistCreateMultipartFormDataPanelists extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// WebinarPanelistCreateMultipartFormData1
/** 
 * Webinar panelist.
**/
export class WebinarPanelistCreateMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=panelists;json=true", elemType: WebinarPanelistCreateMultipartFormDataPanelists })
  panelists?: WebinarPanelistCreateMultipartFormDataPanelists[];
}


export class WebinarPanelistCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: WebinarPanelistCreateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: WebinarPanelistCreateMultipartFormData1;
}


export class WebinarPanelistCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class WebinarPanelistCreate201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}


export class WebinarPanelistCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WebinarPanelistCreatePathParams;

  @SpeakeasyMetadata()
  request: WebinarPanelistCreateRequests;

  @SpeakeasyMetadata()
  security: WebinarPanelistCreateSecurity;
}


export class WebinarPanelistCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webinarPanelistCreate201ApplicationJSONObject?: WebinarPanelistCreate201ApplicationJson;
}
