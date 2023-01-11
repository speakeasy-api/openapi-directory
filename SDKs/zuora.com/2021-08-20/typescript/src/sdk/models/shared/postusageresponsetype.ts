import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostUsageResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkImportStatus" })
  checkImportStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
