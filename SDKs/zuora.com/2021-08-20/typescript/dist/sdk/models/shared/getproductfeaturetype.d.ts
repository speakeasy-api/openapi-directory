import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for custom fields of a Product Feature object.
 *
 * @remarks
 *
 */
export declare class GetProductFeatureType extends SpeakeasyBase {
    /**
     * Feature code, up to 255 characters long.
     *
     * @remarks
     *
     */
    code?: string;
    /**
     * Feature description.
     *
     * @remarks
     *
     */
    description?: string;
    /**
     * Feature ID.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * Feature name, up to 255 characters long.
     *
     * @remarks
     *
     */
    name?: string;
    status?: string;
}
