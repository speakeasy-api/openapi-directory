import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the entity.
 */
export declare enum CreateEntityResponseTypeStatusEnum {
    Provisioned = "Provisioned",
    Unprovisioned = "Unprovisioned"
}
export declare class CreateEntityResponseType extends SpeakeasyBase {
    /**
     * The display name of the entity that is shown in the Zuora UI and APIs.
     */
    displayName?: string;
    /**
     * The entity Id.
     */
    id?: string;
    /**
     * The locale that is used in this entity.
     */
    locale?: string;
    /**
     * The name of the entity.
     */
    name?: string;
    /**
     * The Id of the parent entity.
     */
    parentId?: string;
    /**
     * The status of the entity.
     */
    status?: CreateEntityResponseTypeStatusEnum;
    /**
     * Returns `true` if the request is successful.
     */
    success?: boolean;
    /**
     * The Id of the tenant that the entity belongs to.
     */
    tenantId?: string;
    /**
     * The time zone that is used in this entity.
     */
    timezone?: string;
}
