import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ObjectDeleteInvoiceItemAdjustmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ObjectDeleteInvoiceItemAdjustmentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class ObjectDeleteInvoiceItemAdjustmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ObjectDeleteInvoiceItemAdjustmentPathParams;

  @SpeakeasyMetadata()
  headers: ObjectDeleteInvoiceItemAdjustmentHeaders;
}


export class ObjectDeleteInvoiceItemAdjustmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  proxyDeleteResponse?: shared.ProxyDeleteResponse;

  @SpeakeasyMetadata()
  proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
