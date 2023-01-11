import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInvestorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=investor_id" })
  investorId: string;
}


export class GetInvestorHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class GetInvestorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class GetInvestorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInvestorPathParams;

  @SpeakeasyMetadata()
  headers: GetInvestorHeaders;

  @SpeakeasyMetadata()
  security: GetInvestorSecurity;
}


export class GetInvestorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rootTypeForInvestor?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getInvestor400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getInvestor401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getInvestor403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getInvestor404ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getInvestor429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  getInvestor500ApplicationJSONAny?: any;
}
