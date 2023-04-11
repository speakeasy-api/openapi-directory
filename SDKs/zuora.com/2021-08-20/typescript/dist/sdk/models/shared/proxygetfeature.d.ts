import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for custom fields of a Feature object.
 *
 * @remarks
 *
 */
export declare class ProxyGetFeature extends SpeakeasyBase {
    /**
     *  Internal Zuora ID of the user who created the feature **Character limit**: 32
     */
    createdById?: string;
    /**
     *  Date and time when the feature was created **Character limit**: 29
     */
    createdDate?: Date;
    /**
     *  Description of the feature **Character limit**: 1000
     */
    description?: string;
    /**
     *  Unique code of the feature **Character limit**: 255
     */
    featureCode?: string;
    /**
     * Object identifier.
     */
    id?: string;
    /**
     *  Name of the feature **Character limit**: 255
     */
    name?: string;
    /**
     *  Status of the feature, Active or Inactive **Character limit**: 8
     */
    status?: string;
    /**
     *  Internal Zuora ID of the user who last updated the feature **Character limit**: 32
     */
    updatedById?: string;
    /**
     *  Date and time when the feature was last updated **Character limit**: 29
     */
    updatedDate?: Date;
}
