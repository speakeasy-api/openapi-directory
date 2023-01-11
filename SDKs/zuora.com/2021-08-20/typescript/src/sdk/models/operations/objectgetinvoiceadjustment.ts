import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ObjectGetInvoiceAdjustmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ObjectGetInvoiceAdjustmentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;
}


export class ObjectGetInvoiceAdjustmentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class ObjectGetInvoiceAdjustmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ObjectGetInvoiceAdjustmentPathParams;

  @SpeakeasyMetadata()
  queryParams: ObjectGetInvoiceAdjustmentQueryParams;

  @SpeakeasyMetadata()
  headers: ObjectGetInvoiceAdjustmentHeaders;
}


export class ObjectGetInvoiceAdjustmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  proxyGetInvoiceAdjustment?: Record<string, any>;

  @SpeakeasyMetadata()
  proxyNoDataResponse?: shared.ProxyNoDataResponse;

  @SpeakeasyMetadata()
  proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
