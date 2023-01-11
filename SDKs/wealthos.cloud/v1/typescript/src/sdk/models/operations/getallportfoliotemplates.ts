import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllPortfolioTemplatesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetAllPortfolioTemplatesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


// GetAllPortfolioTemplates200ApplicationJson
/** 
 * Array of all portfolio templates applicable to the investor
**/
export class GetAllPortfolioTemplates200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portfolio_templates" })
  portfolioTemplates: any[];
}


export class GetAllPortfolioTemplatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetAllPortfolioTemplatesHeaders;

  @SpeakeasyMetadata()
  security: GetAllPortfolioTemplatesSecurity;
}


export class GetAllPortfolioTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAllPortfolioTemplates200ApplicationJSONObject?: GetAllPortfolioTemplates200ApplicationJson;

  @SpeakeasyMetadata()
  getAllPortfolioTemplates401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getAllPortfolioTemplates403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getAllPortfolioTemplates404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getAllPortfolioTemplates429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getAllPortfolioTemplates500ApplicationJSONAny?: any;
}
