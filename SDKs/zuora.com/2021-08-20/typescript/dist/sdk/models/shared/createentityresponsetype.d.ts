import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateEntityResponseTypeStatusEnum {
    Provisioned = "Provisioned",
    Unprovisioned = "Unprovisioned"
}
export declare class CreateEntityResponseType extends SpeakeasyBase {
    displayName?: string;
    id?: string;
    locale?: string;
    name?: string;
    parentId?: string;
    status?: CreateEntityResponseTypeStatusEnum;
    success?: boolean;
    tenantId?: string;
    timezone?: string;
}
