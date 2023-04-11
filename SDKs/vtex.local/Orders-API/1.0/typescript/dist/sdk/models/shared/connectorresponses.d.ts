import { SpeakeasyBase } from "../../../internal/utils";
export declare class ConnectorResponses extends SpeakeasyBase {
    /**
     * Information about the connector's responses.
     */
    message: string;
    /**
     * Connector return code.
     */
    returnCode: string;
    /**
     * Connector transaction ID.
     */
    tid: string;
    /**
     * Connector authorization ID.
     */
    authId: string;
}
