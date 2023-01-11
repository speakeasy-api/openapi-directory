import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSipTrunkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=trunkId" })
  trunkId: string;
}


export class DeleteSipTrunkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSipTrunkPathParams;
}


export class DeleteSipTrunkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteSIPTrunk204ApplicationJSONObject?: Record<string, any>;
}
