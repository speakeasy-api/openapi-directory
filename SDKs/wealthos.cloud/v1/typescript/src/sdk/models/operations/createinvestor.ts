import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateInvestorHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey: string;
}


export class CreateInvestorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiSecretKey: shared.SchemeApiSecretKey;
}


export class CreateInvestorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateInvestorHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;

  @SpeakeasyMetadata()
  security: CreateInvestorSecurity;
}


export class CreateInvestorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rootTypeForInvestorCreationResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createInvestor400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createInvestor401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createInvestor403ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createInvestor429ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  createInvestor500ApplicationJSONAny?: any;
}
