import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ObjectPutInvoiceAdjustmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ObjectPutInvoiceAdjustmentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rejectUnknownFields" })
  rejectUnknownFields?: boolean;
}


export class ObjectPutInvoiceAdjustmentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class ObjectPutInvoiceAdjustmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ObjectPutInvoiceAdjustmentPathParams;

  @SpeakeasyMetadata()
  queryParams: ObjectPutInvoiceAdjustmentQueryParams;

  @SpeakeasyMetadata()
  headers: ObjectPutInvoiceAdjustmentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class ObjectPutInvoiceAdjustmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  proxyCreateOrModifyResponse?: shared.ProxyCreateOrModifyResponse;

  @SpeakeasyMetadata()
  proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
