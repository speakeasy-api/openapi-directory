import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetEntitiesResponseTypeWithIdStatusEnum {
    Provisioned = "Provisioned",
    Unprovisioned = "Unprovisioned"
}
export declare class GetEntitiesResponseTypeWithId extends SpeakeasyBase {
    displayName?: string;
    id?: string;
    locale?: string;
    name?: string;
    parentId?: string;
    status?: GetEntitiesResponseTypeWithIdStatusEnum;
    success?: boolean;
    tenantId?: string;
    timezone?: string;
}
