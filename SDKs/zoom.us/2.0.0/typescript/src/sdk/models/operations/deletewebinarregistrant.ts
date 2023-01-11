import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteWebinarRegistrantPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registrantId" })
  registrantId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: number;
}


export class DeleteWebinarRegistrantQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurrence_id" })
  occurrenceId?: string;
}


export class DeleteWebinarRegistrantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteWebinarRegistrantPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteWebinarRegistrantQueryParams;
}


export class DeleteWebinarRegistrantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
