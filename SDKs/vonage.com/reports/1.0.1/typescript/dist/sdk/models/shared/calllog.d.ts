import { SpeakeasyBase } from "../../../internal/utils";
export declare class CallLog extends SpeakeasyBase {
    /**
     * Amount charged for the call
     */
    charge?: number;
    /**
     * Name of the destination device of the call
     */
    destinationDeviceName?: string;
    /**
     * Destination extension of the call
     */
    destinationExtension?: number;
    /**
     * SIP ID of the destination device of the call
     */
    destinationSipId?: string;
    /**
     * Destination user of the call
     */
    destinationUser?: string;
    /**
     * Full name of the destination user of the call
     */
    destinationUserFullName?: string;
    /**
     * Direction of the call
     */
    direction?: string;
    /**
     * End time of the call
     */
    end?: string;
    /**
     * Source number of the call
     */
    from?: string;
    /**
     * Unique identifier of the call
     */
    id?: string;
    /**
     * Indicates if call was on/off network
     */
    inNetwork?: boolean;
    /**
     * Indicates if call was international
     */
    international?: boolean;
    /**
     * Duration of the call in seconds
     */
    length?: number;
    /**
     * Rate charged for the call
     */
    rate?: number;
    /**
     * Indicates if call was recorded
     */
    recorded?: boolean;
    /**
     * Result of the call
     */
    result?: string;
    /**
     * Name of the source device of the call
     */
    sourceDeviceName?: string;
    /**
     * Source extension of the call
     */
    sourceExtension?: number;
    /**
     * SIP ID of the source device of the call
     */
    sourceSipId?: string;
    /**
     * Source user of the call
     */
    sourceUser?: string;
    /**
     * Full name of the source user of the call
     */
    sourceUserFullName?: string;
    /**
     * Start time of the call
     */
    start?: string;
    /**
     * Destination number of the call
     */
    to?: string;
}
