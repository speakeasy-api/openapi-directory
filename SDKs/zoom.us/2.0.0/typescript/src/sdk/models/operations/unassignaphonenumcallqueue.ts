import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UnassignAPhoneNumCallQueuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=callQueueId" })
  callQueueId: string;
}


export class UnassignAPhoneNumCallQueueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UnassignAPhoneNumCallQueueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnassignAPhoneNumCallQueuePathParams;

  @SpeakeasyMetadata()
  security: UnassignAPhoneNumCallQueueSecurity;
}


export class UnassignAPhoneNumCallQueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unassignAPhoneNumCallQueue204ApplicationJSONObject?: Record<string, any>;
}
