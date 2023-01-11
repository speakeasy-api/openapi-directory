import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeetingRegistrantStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: number;
}


export class MeetingRegistrantStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurrence_id" })
  occurrenceId?: string;
}

export enum MeetingRegistrantStatusApplicationJsonActionEnum {
    Approve = "approve",
    Cancel = "cancel",
    Deny = "deny"
}


export class MeetingRegistrantStatusApplicationJsonRegistrants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class MeetingRegistrantStatusApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: MeetingRegistrantStatusApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=registrants", elemType: MeetingRegistrantStatusApplicationJsonRegistrants })
  registrants?: MeetingRegistrantStatusApplicationJsonRegistrants[];
}

export enum MeetingRegistrantStatusMultipartFormDataActionEnum {
    Approve = "approve",
    Cancel = "cancel",
    Deny = "deny"
}


export class MeetingRegistrantStatusMultipartFormDataRegistrants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class MeetingRegistrantStatusMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=action" })
  action: MeetingRegistrantStatusMultipartFormDataActionEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=registrants;json=true", elemType: MeetingRegistrantStatusMultipartFormDataRegistrants })
  registrants?: MeetingRegistrantStatusMultipartFormDataRegistrants[];
}


export class MeetingRegistrantStatusRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: MeetingRegistrantStatusApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: MeetingRegistrantStatusMultipartFormData1;
}


export class MeetingRegistrantStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class MeetingRegistrantStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MeetingRegistrantStatusPathParams;

  @SpeakeasyMetadata()
  queryParams: MeetingRegistrantStatusQueryParams;

  @SpeakeasyMetadata()
  request: MeetingRegistrantStatusRequests;

  @SpeakeasyMetadata()
  security: MeetingRegistrantStatusSecurity;
}


export class MeetingRegistrantStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
