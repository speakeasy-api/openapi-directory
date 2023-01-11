import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAccountingCodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ac-id" })
  acId: string;
}


export class GetAccountingCodeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetAccountingCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountingCodePathParams;

  @SpeakeasyMetadata()
  headers: GetAccountingCodeHeaders;
}


export class GetAccountingCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAccountingCodeItemType?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
