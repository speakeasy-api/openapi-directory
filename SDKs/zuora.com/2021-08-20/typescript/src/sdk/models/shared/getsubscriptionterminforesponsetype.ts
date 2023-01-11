import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Term } from "./term";



export class GetSubscriptionTermInfoResponseTypeReasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSubscriptionTermInfoResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=processId" })
  processId?: string;

  @SpeakeasyMetadata({ data: "json, name=reasons", elemType: GetSubscriptionTermInfoResponseTypeReasons })
  reasons?: GetSubscriptionTermInfoResponseTypeReasons[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=terms", elemType: Term })
  terms?: Term[];
}
