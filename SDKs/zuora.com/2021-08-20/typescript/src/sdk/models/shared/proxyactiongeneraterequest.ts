import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProxyActiongenerateRequestTypeEnum {
    Invoice = "Invoice"
}


export class ProxyActiongenerateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objects" })
  objects: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ProxyActiongenerateRequestTypeEnum;
}
