import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UnassignMemberFromCallQueuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=callQueueId" })
  callQueueId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=memberId" })
  memberId: string;
}


export class UnassignMemberFromCallQueueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UnassignMemberFromCallQueueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnassignMemberFromCallQueuePathParams;

  @SpeakeasyMetadata()
  security: UnassignMemberFromCallQueueSecurity;
}


export class UnassignMemberFromCallQueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unassignMemberFromCallQueue204ApplicationJSONAny?: any;
}
