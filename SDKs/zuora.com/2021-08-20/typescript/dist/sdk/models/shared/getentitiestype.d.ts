import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the entity.
 *
 * @remarks
 *
 */
export declare enum GETEntitiesTypeStatusEnum {
    Provisioned = "Provisioned",
    Unprovisioned = "Unprovisioned"
}
export declare class GETEntitiesType extends SpeakeasyBase {
    /**
     * The display name of the entity that is shown in the Zuora UI and APIs.
     *
     * @remarks
     *
     */
    displayName?: string;
    /**
     * The entity Id.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The locale that is used in this entity.
     *
     * @remarks
     *
     */
    locale?: string;
    /**
     * The name of the entity.
     *
     * @remarks
     *
     */
    name?: string;
    /**
     * The Id of the parent entity.
     *
     * @remarks
     *
     */
    parentId?: string;
    /**
     * The status of the entity.
     *
     * @remarks
     *
     */
    status?: GETEntitiesTypeStatusEnum;
    /**
     * The Id of the tenant that the entity belongs to.
     *
     * @remarks
     *
     */
    tenantId?: string;
    /**
     * The time zone that is used in this entity.
     *
     * @remarks
     *
     */
    timezone?: string;
}
