import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteMembersOfSlgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sharedLineGroupId" })
  sharedLineGroupId: string;
}


export class DeleteMembersOfSlgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteMembersOfSlgPathParams;
}


export class DeleteMembersOfSlgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteMembersOfSLG204ApplicationJSONAny?: any;
}
