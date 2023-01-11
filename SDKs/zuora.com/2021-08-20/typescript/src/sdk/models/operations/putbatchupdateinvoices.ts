import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutBatchUpdateInvoicesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutBatchUpdateInvoicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutBatchUpdateInvoicesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutBatchInvoiceType;
}


export class PutBatchUpdateInvoicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commonResponseType?: shared.CommonResponseType;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
