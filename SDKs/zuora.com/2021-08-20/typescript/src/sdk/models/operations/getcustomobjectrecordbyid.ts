import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCustomObjectRecordByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" })
  object: string;
}


export class GetCustomObjectRecordByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Version" })
  zuoraVersion?: Date;
}


export class GetCustomObjectRecordByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomObjectRecordByIdPathParams;

  @SpeakeasyMetadata()
  headers: GetCustomObjectRecordByIdHeaders;
}


export class GetCustomObjectRecordByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commonErrorResponse?: shared.CommonErrorResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customObjectRecordWithAllFields?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
