import { SpeakeasyBase } from "../../../internal/utils";
import { OAuth2PermissionGrant } from "./oauth2permissiongrant";
/**
 * Server response for get oauth2 permissions grants
 */
export declare class OAuth2PermissionGrantListResult extends SpeakeasyBase {
    /**
     * the URL to get the next set of results.
     */
    odataNextLink?: string;
    /**
     * the list of oauth2 permissions grants
     */
    value?: OAuth2PermissionGrant[];
}
