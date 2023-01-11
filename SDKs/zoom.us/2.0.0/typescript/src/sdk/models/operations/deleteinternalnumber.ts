import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteInternalNumberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=numberId" })
  numberId: string;
}


export class DeleteInternalNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteInternalNumberPathParams;
}


export class DeleteInternalNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteInternalNumber204ApplicationJSONAny?: any;
}
