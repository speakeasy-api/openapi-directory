import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTrackingSourcesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: number;
}


export class GetTrackingSourcesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class GetTrackingSources200ApplicationJsonTrackingSources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=registration_count" })
  registrationCount?: number;

  @SpeakeasyMetadata({ data: "json, name=source_name" })
  sourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=tracking_url" })
  trackingUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=visitor_count" })
  visitorCount?: number;
}


export class GetTrackingSources200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;

  @SpeakeasyMetadata({ data: "json, name=tracking_sources", elemType: GetTrackingSources200ApplicationJsonTrackingSources })
  trackingSources?: GetTrackingSources200ApplicationJsonTrackingSources[];
}


export class GetTrackingSourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTrackingSourcesPathParams;

  @SpeakeasyMetadata()
  security: GetTrackingSourcesSecurity;
}


export class GetTrackingSourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTrackingSources200ApplicationJSONObject?: GetTrackingSources200ApplicationJson;
}
