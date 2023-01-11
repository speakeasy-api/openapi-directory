import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BadRequestResponseErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class BadRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Errors", elemType: BadRequestResponseErrors })
  errors?: BadRequestResponseErrors[];
}
