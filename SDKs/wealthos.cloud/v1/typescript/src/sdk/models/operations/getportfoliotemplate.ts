import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPortfolioTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_template_id" })
  portfolioTemplateId: string;
}


export class GetPortfolioTemplateHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetPortfolioTemplateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetPortfolioTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPortfolioTemplatePathParams;

  @SpeakeasyMetadata()
  headers: GetPortfolioTemplateHeaders;

  @SpeakeasyMetadata()
  security: GetPortfolioTemplateSecurity;
}


export class GetPortfolioTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPortfolioTemplate200ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPortfolioTemplate401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPortfolioTemplate403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPortfolioTemplate404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPortfolioTemplate429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getPortfolioTemplate500ApplicationJSONAny?: any;
}
