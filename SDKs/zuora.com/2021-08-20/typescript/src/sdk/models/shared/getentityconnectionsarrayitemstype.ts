import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEntityConnectionsArrayItemsType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceEntityId" })
  sourceEntityId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=targetEntityId" })
  targetEntityId?: string;
}
