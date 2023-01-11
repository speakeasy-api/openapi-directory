import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteASharedLineGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sharedLineGroupId" })
  sharedLineGroupId: string;
}


export class DeleteASharedLineGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteASharedLineGroupPathParams;
}


export class DeleteASharedLineGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteASharedLineGroup204ApplicationJSONAny?: any;
}
