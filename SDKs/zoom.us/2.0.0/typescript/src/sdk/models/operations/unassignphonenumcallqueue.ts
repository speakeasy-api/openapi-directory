import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UnAssignPhoneNumCallQueuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=callQueueId" })
  callQueueId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=phoneNumberId" })
  phoneNumberId: string;
}


export class UnAssignPhoneNumCallQueueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UnAssignPhoneNumCallQueueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnAssignPhoneNumCallQueuePathParams;

  @SpeakeasyMetadata()
  security: UnAssignPhoneNumCallQueueSecurity;
}


export class UnAssignPhoneNumCallQueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unAssignPhoneNumCallQueue204ApplicationJSONObject?: Record<string, any>;
}
