import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WebinarRegistrantStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: number;
}


export class WebinarRegistrantStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurrence_id" })
  occurrenceId?: string;
}

export enum WebinarRegistrantStatusApplicationJsonActionEnum {
    Approve = "approve",
    Cancel = "cancel",
    Deny = "deny"
}


export class WebinarRegistrantStatusApplicationJsonRegistrants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class WebinarRegistrantStatusApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: WebinarRegistrantStatusApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=registrants", elemType: WebinarRegistrantStatusApplicationJsonRegistrants })
  registrants?: WebinarRegistrantStatusApplicationJsonRegistrants[];
}

export enum WebinarRegistrantStatusMultipartFormDataActionEnum {
    Approve = "approve",
    Cancel = "cancel",
    Deny = "deny"
}


export class WebinarRegistrantStatusMultipartFormDataRegistrants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class WebinarRegistrantStatusMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=action" })
  action: WebinarRegistrantStatusMultipartFormDataActionEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=registrants;json=true", elemType: WebinarRegistrantStatusMultipartFormDataRegistrants })
  registrants?: WebinarRegistrantStatusMultipartFormDataRegistrants[];
}


export class WebinarRegistrantStatusRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: WebinarRegistrantStatusApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: WebinarRegistrantStatusMultipartFormData1;
}


export class WebinarRegistrantStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class WebinarRegistrantStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WebinarRegistrantStatusPathParams;

  @SpeakeasyMetadata()
  queryParams: WebinarRegistrantStatusQueryParams;

  @SpeakeasyMetadata()
  request: WebinarRegistrantStatusRequests;

  @SpeakeasyMetadata()
  security: WebinarRegistrantStatusSecurity;
}


export class WebinarRegistrantStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
