import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WebinarPanelistsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: number;
}


export class WebinarPanelistsDeleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class WebinarPanelistsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WebinarPanelistsDeletePathParams;

  @SpeakeasyMetadata()
  security: WebinarPanelistsDeleteSecurity;
}


export class WebinarPanelistsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
