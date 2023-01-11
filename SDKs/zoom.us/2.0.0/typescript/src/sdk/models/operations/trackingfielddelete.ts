import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TrackingfieldDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fieldId" })
  fieldId: string;
}


export class TrackingfieldDeleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class TrackingfieldDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TrackingfieldDeletePathParams;

  @SpeakeasyMetadata()
  security: TrackingfieldDeleteSecurity;
}


export class TrackingfieldDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
