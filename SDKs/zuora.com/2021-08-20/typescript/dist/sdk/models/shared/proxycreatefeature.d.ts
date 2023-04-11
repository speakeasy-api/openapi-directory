import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of the feature.
 *
 * @remarks
 *
 */
export declare enum ProxyCreateFeatureStatusEnum {
    Active = "Active",
    Inactive = "Inactive"
}
/**
 * Container for custom fields of a Feature object.
 *
 * @remarks
 *
 */
export declare class ProxyCreateFeature extends SpeakeasyBase {
    /**
     * Description of the feature.
     *
     * @remarks
     *
     */
    description?: string;
    /**
     * Unique code of the feature.
     *
     * @remarks
     *
     */
    featureCode: string;
    /**
     * Name of the feature.
     *
     * @remarks
     *
     */
    name: string;
    /**
     * Status of the feature.
     *
     * @remarks
     *
     */
    status?: ProxyCreateFeatureStatusEnum;
}
