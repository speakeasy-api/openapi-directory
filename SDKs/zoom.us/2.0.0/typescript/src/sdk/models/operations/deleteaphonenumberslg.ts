import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAPhoneNumberSlgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=phoneNumberId" })
  phoneNumberId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sharedLineGroupId" })
  sharedLineGroupId: string;
}


export class DeleteAPhoneNumberSlgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAPhoneNumberSlgPathParams;
}


export class DeleteAPhoneNumberSlgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
