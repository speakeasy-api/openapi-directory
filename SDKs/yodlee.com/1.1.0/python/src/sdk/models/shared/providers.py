import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import capability as shared_capability
from ..shared import providersdataset as shared_providersdataset

class ProvidersPriorityEnum(str, Enum):
    POPULAR = "POPULAR"
    SUGGESTED = "SUGGESTED"
    COBRAND = "COBRAND"
    SEARCH = "SEARCH"
    ALL = "ALL"

class ProvidersAccountTypeEnum(str, Enum):
    CURRENT = "CURRENT"
    BROKERAGE_CASH = "BROKERAGE_CASH"

class ProvidersAuthParameterEnum(str, Enum):
    AUTHORIZATION_CODE = "authorizationCode"
    ID_TOKEN = "idToken"
    AUTH_RESPONSE = "authResponse"

class ProvidersAuthTypeEnum(str, Enum):
    OAUTH = "OAUTH"
    CREDENTIALS = "CREDENTIALS"
    MFA_CREDENTIALS = "MFA_CREDENTIALS"

class ProvidersStatusEnum(str, Enum):
    SUPPORTED = "Supported"
    BETA = "Beta"
    UNSUPPORTED = "Unsupported"


@dataclass_json
@dataclasses.dataclass
class Providers:
    priority: Optional[ProvidersPriorityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PRIORITY') }})
    account_type: Optional[list[ProvidersAccountTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountType') }})
    associated_provider_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedProviderIds') }})
    auth_parameter: Optional[list[ProvidersAuthParameterEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authParameter') }})
    auth_type: Optional[ProvidersAuthTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authType') }})
    base_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseUrl') }})
    capability: Optional[list[shared_capability.Capability]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capability') }})
    country_iso_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryISOCode') }})
    dataset: Optional[list[shared_providersdataset.ProvidersDataset]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataset') }})
    favicon: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('favicon') }})
    forget_password_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forgetPasswordUrl') }})
    help: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('help') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_added_by_user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAddedByUser') }})
    is_auto_refresh_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAutoRefreshEnabled') }})
    is_consent_required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isConsentRequired') }})
    language_iso_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageISOCode') }})
    last_modified: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModified') }})
    login_help: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loginHelp') }})
    login_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loginUrl') }})
    logo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    primary_language_iso_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryLanguageISOCode') }})
    status: Optional[ProvidersStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
