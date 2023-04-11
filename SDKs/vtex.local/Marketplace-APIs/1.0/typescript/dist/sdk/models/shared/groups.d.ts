import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Array of groups attached to the seller. Groups are defined by key-words that group sellers into categories defined by the marketplace when adding a new seller through the [Configure Seller Account](https://developers.vtex.com/vtex-rest-api/reference/sellers#putupsertseller) endpoint. It is possible to filter sellers by group in the Seller Management page in your VTEX Admin. Know more about groups through our [Seller Management](https://help.vtex.com/en/tutorial/gerenciamento-de-sellers-beta--6eEiOISwxuAWJ8w6MtK7iv#groups) documentation.
 */
export declare class Groups extends SpeakeasyBase {
    /**
     * Group's unique identifier code.
     */
    id?: string;
    /**
     * Name of the tag chosen to identify the group.
     */
    name?: string;
}
