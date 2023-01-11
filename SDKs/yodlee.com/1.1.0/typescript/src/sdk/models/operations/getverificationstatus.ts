import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVerificationStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=providerAccountId" })
  providerAccountId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=verificationType" })
  verificationType?: string;
}


export class GetVerificationStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetVerificationStatusQueryParams;
}


export class GetVerificationStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verificationStatusResponse?: shared.VerificationStatusResponse;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
