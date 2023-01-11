import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCallLogPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=callLogId" })
  callLogId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class DeleteCallLogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteCallLogPathParams;
}


export class DeleteCallLogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteCallLog204ApplicationJSONAny?: any;
}
