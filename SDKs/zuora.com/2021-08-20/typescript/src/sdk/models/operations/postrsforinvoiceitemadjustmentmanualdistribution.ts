import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRSforInvoiceItemAdjustmentManualDistributionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoice-item-adj-key" })
  invoiceItemAdjKey: string;
}


export class PostRSforInvoiceItemAdjustmentManualDistributionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostRSforInvoiceItemAdjustmentManualDistributionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRSforInvoiceItemAdjustmentManualDistributionPathParams;

  @SpeakeasyMetadata()
  headers: PostRSforInvoiceItemAdjustmentManualDistributionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class PostRSforInvoiceItemAdjustmentManualDistributionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postRevenueScheduleByTransactionResponseType?: shared.PostRevenueScheduleByTransactionResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
