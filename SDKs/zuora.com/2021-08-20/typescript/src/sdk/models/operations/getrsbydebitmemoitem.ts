import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRSbyDebitMemoItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dmi-id" })
  dmiId: string;
}


export class GetRSbyDebitMemoItemHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetRSbyDebitMemoItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRSbyDebitMemoItemPathParams;

  @SpeakeasyMetadata()
  headers: GetRSbyDebitMemoItemHeaders;
}


export class GetRSbyDebitMemoItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getrsDetailType?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
