import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ObjectGetPaymentMethodTransactionLogPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ObjectGetPaymentMethodTransactionLogQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;
}


export class ObjectGetPaymentMethodTransactionLogHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class ObjectGetPaymentMethodTransactionLogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ObjectGetPaymentMethodTransactionLogPathParams;

  @SpeakeasyMetadata()
  queryParams: ObjectGetPaymentMethodTransactionLogQueryParams;

  @SpeakeasyMetadata()
  headers: ObjectGetPaymentMethodTransactionLogHeaders;
}


export class ObjectGetPaymentMethodTransactionLogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  proxyGetPaymentMethodTransactionLog?: shared.ProxyGetPaymentMethodTransactionLog;

  @SpeakeasyMetadata()
  proxyNoDataResponse?: shared.ProxyNoDataResponse;

  @SpeakeasyMetadata()
  proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
