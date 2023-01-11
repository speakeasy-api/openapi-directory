import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteVoicemailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=voicemailId" })
  voicemailId: string;
}


export class DeleteVoicemailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteVoicemailPathParams;
}


export class DeleteVoicemailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteVoicemail204ApplicationJSONAny?: any;
}
