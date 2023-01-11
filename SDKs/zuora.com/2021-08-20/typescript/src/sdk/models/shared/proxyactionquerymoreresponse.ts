import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProxyActionqueryMoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=done" })
  done?: boolean;

  @SpeakeasyMetadata({ data: "json, name=queryLocator" })
  queryLocator?: string;

  @SpeakeasyMetadata({ data: "json, name=records" })
  records?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;
}
