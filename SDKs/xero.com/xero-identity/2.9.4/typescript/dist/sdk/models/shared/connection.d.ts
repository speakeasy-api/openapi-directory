import { SpeakeasyBase } from "../../../internal/utils";
/**
 *
 * @see {@link http://developer.xero.com}
 */
export declare class Connection extends SpeakeasyBase {
    /**
     * Identifier shared across connections authorised at the same time
     */
    authEventId?: string;
    /**
     * The date when the user connected this tenant to your app
     */
    createdDateUtc?: Date;
    /**
     * Xero identifier
     */
    id?: string;
    /**
     * Xero identifier of organisation
     */
    tenantId?: string;
    /**
     * Xero tenant name
     */
    tenantName?: string;
    /**
     * Xero tenant type (i.e. ORGANISATION, PRACTICE)
     */
    tenantType?: string;
    /**
     * The date when the user most recently connected this tenant to your app. May differ to the created date if the user has disconnected and subsequently reconnected this tenant to your app.
     */
    updatedDateUtc?: Date;
}
