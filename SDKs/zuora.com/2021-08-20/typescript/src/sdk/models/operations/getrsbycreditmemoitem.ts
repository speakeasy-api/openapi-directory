import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRSbyCreditMemoItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cmi-id" })
  cmiId: string;
}


export class GetRSbyCreditMemoItemHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetRSbyCreditMemoItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRSbyCreditMemoItemPathParams;

  @SpeakeasyMetadata()
  headers: GetRSbyCreditMemoItemHeaders;
}


export class GetRSbyCreditMemoItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getrsDetailType?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
