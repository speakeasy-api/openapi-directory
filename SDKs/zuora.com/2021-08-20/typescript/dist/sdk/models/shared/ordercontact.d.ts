import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Use this field to create a new account as the sold-to contact of the Order Line Item (OLI).
 *
 * You can either use this field to create a new account or use the `soldTo` field to assign an existing account as the sold-to contact of the OLI.
 *
 * If neither this field nor the `soldTo` field is set, the system will automatically set the default sold-to contact under the OLI's invoice owner account as the sold-to contact of the OLI.
 *
**/
export declare class OrderContact extends SpeakeasyBase {
    address1?: string;
    address2?: string;
    city?: string;
    country?: string;
    county?: string;
    firstName?: string;
    lastName?: string;
    postalCode?: string;
    state?: string;
}
