import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostEmailBillingDocumentsfromBillRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billRunId" })
  billRunId: string;
}


export class PostEmailBillingDocumentsfromBillRunHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostEmailBillingDocumentsfromBillRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostEmailBillingDocumentsfromBillRunPathParams;

  @SpeakeasyMetadata()
  headers: PostEmailBillingDocumentsfromBillRunHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PostEmailBillingDocfromBillRunType;
}


export class PostEmailBillingDocumentsfromBillRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commonResponseType?: shared.CommonResponseType;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
