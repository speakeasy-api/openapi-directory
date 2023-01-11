import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProxyActionexecuteRequestTypeEnum {
    InvoiceSplit = "InvoiceSplit"
}


export class ProxyActionexecuteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids: string[];

  @SpeakeasyMetadata({ data: "json, name=synchronous" })
  synchronous: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ProxyActionexecuteRequestTypeEnum;
}
