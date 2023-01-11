import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRevProAccountingCodesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutRevProAccountingCodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutRevProAccountingCodesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RevproAccountingCodes;
}


export class PutRevProAccountingCodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  putRevproAccCodeResponse?: shared.PutRevproAccCodeResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
