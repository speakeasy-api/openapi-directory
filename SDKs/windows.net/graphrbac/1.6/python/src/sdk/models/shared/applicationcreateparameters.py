import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import approle as shared_approle
from ..shared import groupmembershipclaims_enum as shared_groupmembershipclaims_enum
from ..shared import informationalurl as shared_informationalurl
from ..shared import oauth2permission as shared_oauth2permission
from ..shared import optionalclaims as shared_optionalclaims
from ..shared import preauthorizedapplication as shared_preauthorizedapplication


@dataclass_json
@dataclasses.dataclass
class ApplicationCreateParameters:
    r"""ApplicationCreateParameters
    Active Directive Application common properties shared among GET, POST and PATCH
    """
    
    display_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    allow_guests_sign_in: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowGuestsSignIn') }})
    allow_passthrough_users: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowPassthroughUsers') }})
    app_logo_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appLogoUrl') }})
    app_permissions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appPermissions') }})
    app_roles: Optional[list[shared_approle.AppRole]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appRoles') }})
    available_to_other_tenants: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableToOtherTenants') }})
    error_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorUrl') }})
    group_membership_claims: Optional[shared_groupmembershipclaims_enum.GroupMembershipClaimsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupMembershipClaims') }})
    homepage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homepage') }})
    identifier_uris: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifierUris') }})
    informational_urls: Optional[shared_informationalurl.InformationalURL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('informationalUrls') }})
    is_device_only_auth_supported: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDeviceOnlyAuthSupported') }})
    key_credentials: Optional[list[dict[str, dict[str, Any]]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyCredentials') }})
    known_client_applications: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('knownClientApplications') }})
    logout_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logoutUrl') }})
    oauth2_allow_implicit_flow: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth2AllowImplicitFlow') }})
    oauth2_allow_url_path_matching: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth2AllowUrlPathMatching') }})
    oauth2_permissions: Optional[list[shared_oauth2permission.OAuth2Permission]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth2Permissions') }})
    oauth2_require_post_response: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth2RequirePostResponse') }})
    optional_claims: Optional[shared_optionalclaims.OptionalClaims] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optionalClaims') }})
    org_restrictions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgRestrictions') }})
    password_credentials: Optional[list[dict[str, dict[str, Any]]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordCredentials') }})
    pre_authorized_applications: Optional[list[shared_preauthorizedapplication.PreAuthorizedApplication]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preAuthorizedApplications') }})
    public_client: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicClient') }})
    publisher_domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherDomain') }})
    reply_urls: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replyUrls') }})
    required_resource_access: Optional[list[dict[str, dict[str, Any]]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiredResourceAccess') }})
    saml_metadata_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samlMetadataUrl') }})
    sign_in_audience: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signInAudience') }})
    www_homepage: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wwwHomepage') }})
    
