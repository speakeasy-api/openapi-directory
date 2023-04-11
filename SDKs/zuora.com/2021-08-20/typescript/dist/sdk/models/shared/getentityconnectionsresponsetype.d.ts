import { SpeakeasyBase } from "../../../internal/utils";
import { GETEntityConnectionsArrayItemsType } from "./getentityconnectionsarrayitemstype";
export declare class GETEntityConnectionsResponseType extends SpeakeasyBase {
    /**
     * Container for one or more connections that are related to the entity.
     *
     * @remarks
     *
     */
    entityConnections?: GETEntityConnectionsArrayItemsType[];
    /**
     * URL to retrieve the next page of the response if it exists; otherwise absent.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * Returns `true` if the request was processed successfully.
     *
     * @remarks
     *
     */
    success?: boolean;
}
