import { Application } from "./application";
import { ApplicationKeyCredentials } from "./applicationkeycredentials";
import { ApplicationOwners } from "./applicationowners";
import { ApplicationPasswordCredentials } from "./applicationpasswordcredentials";
import { DeletedApplications } from "./deletedapplications";
import { Domain } from "./domain";
import { Group } from "./group";
import { GroupOwners } from "./groupowners";
import { GroupsOwners } from "./groupsowners";
import * as shared from "./models/shared";
import { OAuth2PermissionGrantCreate } from "./oauth2permissiongrantcreate";
import { OAuth2PermissionGrantDelete } from "./oauth2permissiongrantdelete";
import { OAuth2PermissionGrantList } from "./oauth2permissiongrantlist";
import { Objects } from "./objects";
import { ServicePrincipal } from "./serviceprincipal";
import { ServicePrincipalAppRoleAssignedTo } from "./serviceprincipalapproleassignedto";
import { ServicePrincipalAppRoleAssignments } from "./serviceprincipalapproleassignments";
import { ServicePrincipalKeyCredentials } from "./serviceprincipalkeycredentials";
import { ServicePrincipalOwners } from "./serviceprincipalowners";
import { ServicePrincipalPasswordCredentials } from "./serviceprincipalpasswordcredentials";
import { ServicePrincipalsByAppId } from "./serviceprincipalsbyappid";
import { SignedInUser } from "./signedinuser";
import { User } from "./user";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://graph.windows.net"];
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
 * The Graph RBAC Management Client
 */
export declare class SDK {
    application: Application;
    applicationKeyCredentials: ApplicationKeyCredentials;
    applicationOwners: ApplicationOwners;
    applicationPasswordCredentials: ApplicationPasswordCredentials;
    domain: Domain;
    group: Group;
    groupOwners: GroupOwners;
    groupsOwners: GroupsOwners;
    oAuth2PermissionGrantCreate: OAuth2PermissionGrantCreate;
    oAuth2PermissionGrantList: OAuth2PermissionGrantList;
    oAuth2PermissionGrantDelete: OAuth2PermissionGrantDelete;
    objects: Objects;
    servicePrincipal: ServicePrincipal;
    servicePrincipalAppRoleAssignedTo: ServicePrincipalAppRoleAssignedTo;
    servicePrincipalAppRoleAssignments: ServicePrincipalAppRoleAssignments;
    servicePrincipalKeyCredentials: ServicePrincipalKeyCredentials;
    servicePrincipalOwners: ServicePrincipalOwners;
    servicePrincipalPasswordCredentials: ServicePrincipalPasswordCredentials;
    servicePrincipalsByAppId: ServicePrincipalsByAppId;
    signedInUser: SignedInUser;
    user: User;
    deletedApplications: DeletedApplications;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
