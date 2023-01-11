import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WebinarPollDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pollId" })
  pollId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: number;
}


export class WebinarPollDeleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class WebinarPollDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WebinarPollDeletePathParams;

  @SpeakeasyMetadata()
  security: WebinarPollDeleteSecurity;
}


export class WebinarPollDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
