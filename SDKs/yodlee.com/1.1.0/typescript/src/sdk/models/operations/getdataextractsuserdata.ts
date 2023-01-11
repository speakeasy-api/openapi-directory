import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDataExtractsUserDataQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate" })
  fromDate: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=loginName" })
  loginName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate" })
  toDate: string;
}


export class GetDataExtractsUserDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDataExtractsUserDataQueryParams;
}


export class GetDataExtractsUserDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataExtractsUserDataResponse?: shared.DataExtractsUserDataResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
