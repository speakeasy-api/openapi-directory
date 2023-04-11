import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateEntityType extends SpeakeasyBase {
    /**
     * The display name of the entity that is shown in the Zuora UI and APIs
     *
     * @remarks
     *
     * **Note:** If you do not specify the display name in the request, the entity name is used as the display name.
     */
    displayName?: string;
    /**
     * The locale that is used in this entity.
     */
    locale: string;
    /**
     * The name of the entity that is the entity identifier and is unique across all entities in a multi-entity hierarchy.
     *
     * @remarks
     *
     * **Note:** Only alphanumeric characters (letters A–Z and a–z, and digits 0–9), space, period, and hyphen are allowed to be used in entity names.
     */
    name: string;
    /**
     * The Id of the entity under which you want to create an entity.
     *
     * @remarks
     * You can get the parent entity Id by using the GET Entities call.
     */
    parentId: string;
    /**
     * The time zone that is used in this entity.
     */
    timezone: string;
}
