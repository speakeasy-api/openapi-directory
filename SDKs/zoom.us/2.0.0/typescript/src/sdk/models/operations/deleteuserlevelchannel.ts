import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteUserLevelChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelId" })
  channelId: string;
}


export class DeleteUserLevelChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteUserLevelChannelPathParams;
}


export class DeleteUserLevelChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteUserLevelChannel204ApplicationJSONAny?: any;
}
