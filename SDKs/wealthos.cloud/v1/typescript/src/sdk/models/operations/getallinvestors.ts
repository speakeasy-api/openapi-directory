import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetAllInvestorsSortEnum {
    Asc = "asc",
    Desc = "desc"
}


export class GetAllInvestorsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_number" })
  pageNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetAllInvestorsSortEnum;
}


export class GetAllInvestorsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetAllInvestorsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


// GetAllInvestors200ApplicationJson
/** 
 * Array of investors
**/
export class GetAllInvestors200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=investors" })
  investors: any[];

  @SpeakeasyMetadata({ data: "json, name=next_page_available" })
  nextPageAvailable: boolean;
}


export class GetAllInvestorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAllInvestorsQueryParams;

  @SpeakeasyMetadata()
  headers: GetAllInvestorsHeaders;

  @SpeakeasyMetadata()
  security: GetAllInvestorsSecurity;
}


export class GetAllInvestorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAllInvestors200ApplicationJSONObject?: GetAllInvestors200ApplicationJson;

  @SpeakeasyMetadata()
  getAllInvestors400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getAllInvestors401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getAllInvestors403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getAllInvestors429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getAllInvestors500ApplicationJSONAny?: any;
}
