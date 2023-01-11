import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePortfolioTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_template_id" })
  portfolioTemplateId: string;
}


export class UpdatePortfolioTemplateHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class UpdatePortfolioTemplateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class UpdatePortfolioTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePortfolioTemplatePathParams;

  @SpeakeasyMetadata()
  headers: UpdatePortfolioTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;

  @SpeakeasyMetadata()
  security: UpdatePortfolioTemplateSecurity;
}


export class UpdatePortfolioTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updatePortfolioTemplate200ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updatePortfolioTemplate400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updatePortfolioTemplate401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updatePortfolioTemplate403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updatePortfolioTemplate404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updatePortfolioTemplate409ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updatePortfolioTemplate429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  updatePortfolioTemplate500ApplicationJSONAny?: any;
}
