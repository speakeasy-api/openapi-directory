import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostEntityConnectionsType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=targetEntityId" })
  targetEntityId: string;
}
