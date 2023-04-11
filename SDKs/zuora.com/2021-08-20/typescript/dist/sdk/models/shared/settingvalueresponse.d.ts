import { SpeakeasyBase } from "../../../internal/utils";
export declare class SettingValueResponse extends SpeakeasyBase {
    /**
     * Response body if the request is executed successfully.
     */
    body?: Record<string, any>;
    /**
     * An array of error messages if errors occur when executing the request.
     *
     * @remarks
     *
     */
    errorMessages?: string[];
    /**
     * User readable response status, for example, 502 BAD_GATEWAY.
     *
     * @remarks
     *
     */
    status?: string;
}
