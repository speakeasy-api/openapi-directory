import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChangeCallQueueManagerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=callQueueId" })
  callQueueId: string;
}


export class ChangeCallQueueManagerApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=member_id" })
  memberId?: string;
}


export class ChangeCallQueueManagerMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=member_id" })
  memberId?: string;
}


export class ChangeCallQueueManagerRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: ChangeCallQueueManagerApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: ChangeCallQueueManagerMultipartFormData;
}


export class ChangeCallQueueManagerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ChangeCallQueueManagerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChangeCallQueueManagerPathParams;

  @SpeakeasyMetadata()
  request?: ChangeCallQueueManagerRequests;

  @SpeakeasyMetadata()
  security: ChangeCallQueueManagerSecurity;
}


export class ChangeCallQueueManagerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  changeCallQueueManager204ApplicationJSONAny?: any;
}
