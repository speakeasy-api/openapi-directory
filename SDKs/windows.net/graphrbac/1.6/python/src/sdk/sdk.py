

import requests
from sdk.models import shared
from . import utils

from .application import Application
from .applicationkeycredentials import ApplicationKeyCredentials
from .applicationowners import ApplicationOwners
from .applicationpasswordcredentials import ApplicationPasswordCredentials
from .domain import Domain
from .group import Group
from .groupowners import GroupOwners
from .groupsowners import GroupsOwners
from .oauth2permissiongrant_create import OAuth2PermissionGrantCreate
from .oauth2permissiongrant_list import OAuth2PermissionGrantList
from .oauth2permissiongrant_delete import OAuth2PermissionGrantDelete
from .objects import Objects
from .serviceprincipal import ServicePrincipal
from .serviceprincipalapproleassignedto import ServicePrincipalAppRoleAssignedTo
from .serviceprincipalapproleassignments import ServicePrincipalAppRoleAssignments
from .serviceprincipalkeycredentials import ServicePrincipalKeyCredentials
from .serviceprincipalowners import ServicePrincipalOwners
from .serviceprincipalpasswordcredentials import ServicePrincipalPasswordCredentials
from .serviceprincipalsbyappid import ServicePrincipalsByAppID
from .signedinuser import SignedInUser
from .user import User
from .deletedapplications import DeletedApplications


SERVERS = [
	"https://graph.windows.net",
]


class SDK:
    
    application: Application
    application_key_credentials: ApplicationKeyCredentials
    application_owners: ApplicationOwners
    application_password_credentials: ApplicationPasswordCredentials
    domain: Domain
    group: Group
    group_owners: GroupOwners
    groups_owners: GroupsOwners
    o_auth2_permission_grant_create: OAuth2PermissionGrantCreate
    o_auth2_permission_grant_list: OAuth2PermissionGrantList
    o_auth2_permission_grant_delete: OAuth2PermissionGrantDelete
    objects: Objects
    service_principal: ServicePrincipal
    service_principal_app_role_assigned_to: ServicePrincipalAppRoleAssignedTo
    service_principal_app_role_assignments: ServicePrincipalAppRoleAssignments
    service_principal_key_credentials: ServicePrincipalKeyCredentials
    service_principal_owners: ServicePrincipalOwners
    service_principal_password_credentials: ServicePrincipalPasswordCredentials
    service_principals_by_app_id: ServicePrincipalsByAppID
    signed_in_user: SignedInUser
    user: User
    deleted_applications: DeletedApplications

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        self._init_sdks()


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        self._init_sdks()
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        self._init_sdks()
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.application = Application(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.application_key_credentials = ApplicationKeyCredentials(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.application_owners = ApplicationOwners(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.application_password_credentials = ApplicationPasswordCredentials(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.domain = Domain(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.group = Group(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.group_owners = GroupOwners(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.groups_owners = GroupsOwners(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.o_auth2_permission_grant_create = OAuth2PermissionGrantCreate(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.o_auth2_permission_grant_list = OAuth2PermissionGrantList(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.o_auth2_permission_grant_delete = OAuth2PermissionGrantDelete(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.objects = Objects(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.service_principal = ServicePrincipal(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.service_principal_app_role_assigned_to = ServicePrincipalAppRoleAssignedTo(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.service_principal_app_role_assignments = ServicePrincipalAppRoleAssignments(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.service_principal_key_credentials = ServicePrincipalKeyCredentials(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.service_principal_owners = ServicePrincipalOwners(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.service_principal_password_credentials = ServicePrincipalPasswordCredentials(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.service_principals_by_app_id = ServicePrincipalsByAppID(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.signed_in_user = SignedInUser(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.user = User(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.deleted_applications = DeletedApplications(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    