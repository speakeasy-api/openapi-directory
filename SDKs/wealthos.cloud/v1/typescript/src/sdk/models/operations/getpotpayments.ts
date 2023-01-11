import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPotPaymentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pot_id" })
  potId: string;
}


export class GetPotPaymentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_number" })
  pageNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payment_type" })
  paymentType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=purpose" })
  purpose?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=service_provider" })
  serviceProvider?: string;
}


export class GetPotPaymentsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetPotPaymentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetPotPayments200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_available" })
  nextPageAvailable: boolean;

  @SpeakeasyMetadata({ data: "json, name=payments" })
  payments: any[];

  @SpeakeasyMetadata({ data: "json, name=pot_id" })
  potId: string;
}


export class GetPotPaymentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPotPaymentsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPotPaymentsQueryParams;

  @SpeakeasyMetadata()
  headers: GetPotPaymentsHeaders;

  @SpeakeasyMetadata()
  security: GetPotPaymentsSecurity;
}


export class GetPotPaymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPotPayments200ApplicationJSONObject?: GetPotPayments200ApplicationJson;

  @SpeakeasyMetadata()
  getPotPayments401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPotPayments403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPotPayments404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPotPayments429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPotPayments500ApplicationJSONAny?: any;
}
