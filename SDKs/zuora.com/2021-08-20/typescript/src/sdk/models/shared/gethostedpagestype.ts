import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetHostedPageType } from "./gethostedpagetype";



export class GetHostedPagesType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hostedpages", elemType: GetHostedPageType })
  hostedpages?: GetHostedPageType[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
