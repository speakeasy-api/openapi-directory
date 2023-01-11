import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DataExtractsEventLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=methodType" })
  methodType?: string;

  @SpeakeasyMetadata({ data: "json, name=rel" })
  rel?: string;
}
