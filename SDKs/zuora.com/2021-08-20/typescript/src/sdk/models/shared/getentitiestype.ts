import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetEntitiesTypeStatusEnum {
    Provisioned = "Provisioned",
    Unprovisioned = "Unprovisioned"
}


export class GetEntitiesType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetEntitiesTypeStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tenantId" })
  tenantId?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;
}
