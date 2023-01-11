import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRSforInvoiceItemManualDistributionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoice-item-id" })
  invoiceItemId: string;
}


export class PostRSforInvoiceItemManualDistributionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostRSforInvoiceItemManualDistributionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRSforInvoiceItemManualDistributionPathParams;

  @SpeakeasyMetadata()
  headers: PostRSforInvoiceItemManualDistributionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class PostRSforInvoiceItemManualDistributionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postRevenueScheduleByTransactionResponseType?: shared.PostRevenueScheduleByTransactionResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
