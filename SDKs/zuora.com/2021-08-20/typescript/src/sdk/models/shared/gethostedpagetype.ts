import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHostedPageType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageId" })
  pageId?: string;

  @SpeakeasyMetadata({ data: "json, name=pageName" })
  pageName?: string;

  @SpeakeasyMetadata({ data: "json, name=pageType" })
  pageType?: string;

  @SpeakeasyMetadata({ data: "json, name=pageVersion" })
  pageVersion?: string;
}
