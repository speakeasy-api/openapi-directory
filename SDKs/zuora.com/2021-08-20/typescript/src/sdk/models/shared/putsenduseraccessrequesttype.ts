import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutSendUserAccessRequestType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=targetEntityIds" })
  targetEntityIds: string[];
}
