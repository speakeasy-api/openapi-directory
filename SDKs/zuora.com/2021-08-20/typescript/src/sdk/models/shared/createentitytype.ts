import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateEntityType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone: string;
}
