import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountDisassociatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class AccountDisassociateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountDisassociatePathParams;
}


export class AccountDisassociateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
