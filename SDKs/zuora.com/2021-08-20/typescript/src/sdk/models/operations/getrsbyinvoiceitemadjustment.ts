import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRSbyInvoiceItemAdjustmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoice-item-adj-key" })
  invoiceItemAdjKey: string;
}


export class GetRSbyInvoiceItemAdjustmentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetRSbyInvoiceItemAdjustmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRSbyInvoiceItemAdjustmentPathParams;

  @SpeakeasyMetadata()
  headers: GetRSbyInvoiceItemAdjustmentHeaders;
}


export class GetRSbyInvoiceItemAdjustmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getrsDetailType?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
