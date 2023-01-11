import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetInvestmentProductCategoryIdEnum {
    Funds = "funds"
}


export class GetInvestmentProductPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category_id" })
  categoryId: GetInvestmentProductCategoryIdEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=investment_product_id" })
  investmentProductId: string;
}


export class GetInvestmentProductHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetInvestmentProductSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetInvestmentProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInvestmentProductPathParams;

  @SpeakeasyMetadata()
  headers: GetInvestmentProductHeaders;

  @SpeakeasyMetadata()
  security: GetInvestmentProductSecurity;
}


export class GetInvestmentProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getInvestmentProduct200ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getInvestmentProduct401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getInvestmentProduct403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getInvestmentProduct404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getInvestmentProduct429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getInvestmentProduct500ApplicationJSONAny?: any;
}
