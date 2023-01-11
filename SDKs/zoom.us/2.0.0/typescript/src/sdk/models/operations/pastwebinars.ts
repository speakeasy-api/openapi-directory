import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PastWebinarsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: number;
}


export class PastWebinarsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class PastWebinarsWebinarInstancesWebinars extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


// PastWebinarsWebinarInstances
/** 
 * List of webinars.
**/
export class PastWebinarsWebinarInstances extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webinars", elemType: PastWebinarsWebinarInstancesWebinars })
  webinars?: PastWebinarsWebinarInstancesWebinars[];
}


export class PastWebinarsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PastWebinarsPathParams;

  @SpeakeasyMetadata()
  security: PastWebinarsSecurity;
}


export class PastWebinarsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webinarInstances?: PastWebinarsWebinarInstances;
}
