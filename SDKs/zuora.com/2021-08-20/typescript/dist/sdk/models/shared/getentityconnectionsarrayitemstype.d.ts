import { SpeakeasyBase } from "../../../internal/utils";
export declare class GETEntityConnectionsArrayItemsType extends SpeakeasyBase {
    /**
     * The ID of the connection.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The ID of the source entity in the connection.
     *
     * @remarks
     *
     */
    sourceEntityId?: string;
    /**
     * Status of the connection.
     *
     * @remarks
     *
     * Possible values:
     *  - `Connected`
     *  - `Pending`
     *  - `Disconnected`
     *
     */
    status?: string;
    /**
     * The ID of the target entity in the connection.
     *
     * @remarks
     *
     */
    targetEntityId?: string;
}
