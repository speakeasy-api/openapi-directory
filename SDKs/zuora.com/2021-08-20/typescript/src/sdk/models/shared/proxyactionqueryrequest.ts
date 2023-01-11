import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProxyActionqueryRequestConf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchSize" })
  batchSize?: number;
}


export class ProxyActionqueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conf" })
  conf?: ProxyActionqueryRequestConf;

  @SpeakeasyMetadata({ data: "json, name=queryString" })
  queryString: string;
}
