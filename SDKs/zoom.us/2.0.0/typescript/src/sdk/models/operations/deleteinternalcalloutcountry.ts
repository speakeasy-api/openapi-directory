import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteInternalCallOutCountryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=countryId" })
  countryId: string;
}


export class DeleteInternalCallOutCountryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteInternalCallOutCountryPathParams;
}


export class DeleteInternalCallOutCountryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteInternalCallOutCountry204ApplicationJSONAny?: any;
}
