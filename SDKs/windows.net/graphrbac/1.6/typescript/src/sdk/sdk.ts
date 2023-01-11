import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { Application } from "./application";
import { ApplicationKeyCredentials } from "./applicationkeycredentials";
import { ApplicationOwners } from "./applicationowners";
import { ApplicationPasswordCredentials } from "./applicationpasswordcredentials";
import { Domain } from "./domain";
import { Group } from "./group";
import { GroupOwners } from "./groupowners";
import { GroupsOwners } from "./groupsowners";
import { OAuth2PermissionGrantCreate } from "./oauth2permissiongrantcreate";
import { OAuth2PermissionGrantList } from "./oauth2permissiongrantlist";
import { OAuth2PermissionGrantDelete } from "./oauth2permissiongrantdelete";
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
import { DeletedApplications } from "./deletedapplications";


export const ServerList = [
	"https://graph.windows.net",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}


export class SDK {
  public application: Application;
  public applicationKeyCredentials: ApplicationKeyCredentials;
  public applicationOwners: ApplicationOwners;
  public applicationPasswordCredentials: ApplicationPasswordCredentials;
  public domain: Domain;
  public group: Group;
  public groupOwners: GroupOwners;
  public groupsOwners: GroupsOwners;
  public oAuth2PermissionGrantCreate: OAuth2PermissionGrantCreate;
  public oAuth2PermissionGrantList: OAuth2PermissionGrantList;
  public oAuth2PermissionGrantDelete: OAuth2PermissionGrantDelete;
  public objects: Objects;
  public servicePrincipal: ServicePrincipal;
  public servicePrincipalAppRoleAssignedTo: ServicePrincipalAppRoleAssignedTo;
  public servicePrincipalAppRoleAssignments: ServicePrincipalAppRoleAssignments;
  public servicePrincipalKeyCredentials: ServicePrincipalKeyCredentials;
  public servicePrincipalOwners: ServicePrincipalOwners;
  public servicePrincipalPasswordCredentials: ServicePrincipalPasswordCredentials;
  public servicePrincipalsByAppId: ServicePrincipalsByAppId;
  public signedInUser: SignedInUser;
  public user: User;
  public deletedApplications: DeletedApplications;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
      let security: Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
    this.application = new Application(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.applicationKeyCredentials = new ApplicationKeyCredentials(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.applicationOwners = new ApplicationOwners(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.applicationPasswordCredentials = new ApplicationPasswordCredentials(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.domain = new Domain(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.group = new Group(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.groupOwners = new GroupOwners(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.groupsOwners = new GroupsOwners(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.oAuth2PermissionGrantCreate = new OAuth2PermissionGrantCreate(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.oAuth2PermissionGrantList = new OAuth2PermissionGrantList(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.oAuth2PermissionGrantDelete = new OAuth2PermissionGrantDelete(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.objects = new Objects(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.servicePrincipal = new ServicePrincipal(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.servicePrincipalAppRoleAssignedTo = new ServicePrincipalAppRoleAssignedTo(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.servicePrincipalAppRoleAssignments = new ServicePrincipalAppRoleAssignments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.servicePrincipalKeyCredentials = new ServicePrincipalKeyCredentials(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.servicePrincipalOwners = new ServicePrincipalOwners(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.servicePrincipalPasswordCredentials = new ServicePrincipalPasswordCredentials(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.servicePrincipalsByAppId = new ServicePrincipalsByAppId(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.signedInUser = new SignedInUser(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.user = new User(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.deletedApplications = new DeletedApplications(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}