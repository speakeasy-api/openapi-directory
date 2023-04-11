import { Account } from "./account";
import { AppKeys } from "./appkeys";
import * as shared from "./models/shared";
import { Roles } from "./roles";
import { Store } from "./store";
import { User } from "./user";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://vtex.local", "https://{accountName}.{environment}.com.br"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * ## Welcome!
 *
 * @remarks
 *
 * The License Manager API allows you to create users, modify their names and emails, as well as add and remove roles from users.
 *
 * ### ATTRIBUTES
 *
 * |Attribute name | Description |
 * |:------------|--------------|
 * |accountName | Account name in VTEX License Manager |
 * |environment | Environment on which you want to run the query e.g. vtexcommercestable |
 * |userId      | Unique user identification string |
 * |roleId      | Integer that represents a role, can be looked up on the License Manager UI |
 */
export declare class SDK {
    account: Account;
    appKeys: AppKeys;
    roles: Roles;
    store: Store;
    user: User;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
