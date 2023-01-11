import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetEntitiesTypeStatusEnum {
    Provisioned = "Provisioned",
    Unprovisioned = "Unprovisioned"
}
export declare class GetEntitiesType extends SpeakeasyBase {
    displayName?: string;
    id?: string;
    locale?: string;
    name?: string;
    parentId?: string;
    status?: GetEntitiesTypeStatusEnum;
    tenantId?: string;
    timezone?: string;
}
