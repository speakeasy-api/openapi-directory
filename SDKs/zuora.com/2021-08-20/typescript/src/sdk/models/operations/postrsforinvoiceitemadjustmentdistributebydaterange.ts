import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRSforInvoiceItemAdjustmentDistributeByDateRangePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoice-item-adj-key" })
  invoiceItemAdjKey: string;
}


export class PostRSforInvoiceItemAdjustmentDistributeByDateRangeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostRSforInvoiceItemAdjustmentDistributeByDateRangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRSforInvoiceItemAdjustmentDistributeByDateRangePathParams;

  @SpeakeasyMetadata()
  headers: PostRSforInvoiceItemAdjustmentDistributeByDateRangeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class PostRSforInvoiceItemAdjustmentDistributeByDateRangeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postRevenueScheduleByTransactionResponseType?: shared.PostRevenueScheduleByTransactionResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
