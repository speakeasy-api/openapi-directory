import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a group of URIs that provide terms of service, marketing, support and privacy policy information about an application. The default value for each string is null.
 */
export declare class InformationalUrl extends SpeakeasyBase {
    /**
     * The marketing URI
     */
    marketing?: string;
    /**
     * The privacy policy URI
     */
    privacy?: string;
    /**
     * The support URI
     */
    support?: string;
    /**
     * The terms of service URI
     */
    termsOfService?: string;
}
