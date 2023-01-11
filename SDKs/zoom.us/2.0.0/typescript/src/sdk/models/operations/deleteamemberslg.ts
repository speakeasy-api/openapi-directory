import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAMemberSlgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=memberId" })
  memberId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sharedLineGroupId" })
  sharedLineGroupId: string;
}


export class DeleteAMemberSlgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAMemberSlgPathParams;
}


export class DeleteAMemberSlgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
