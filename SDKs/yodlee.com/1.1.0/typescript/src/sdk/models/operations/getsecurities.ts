import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSecuritiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=holdingId" })
  holdingId?: string;
}


export class GetSecuritiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSecuritiesQueryParams;
}


export class GetSecuritiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  holdingSecuritiesResponse?: shared.HoldingSecuritiesResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
