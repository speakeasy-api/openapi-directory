import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLiveStreamDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: string;
}


export class GetLiveStreamDetails200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=page_url" })
  pageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=stream_key" })
  streamKey?: string;

  @SpeakeasyMetadata({ data: "json, name=stream_url" })
  streamUrl?: string;
}


export class GetLiveStreamDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLiveStreamDetailsPathParams;
}


export class GetLiveStreamDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLiveStreamDetails200ApplicationJSONObject?: GetLiveStreamDetails200ApplicationJson;
}
