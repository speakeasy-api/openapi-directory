import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountdataset as shared_accountdataset
from ..shared import loginform as shared_loginform
from ..shared import provideraccountpreferences as shared_provideraccountpreferences

class ProviderAccountDetailAggregationSourceEnum(str, Enum):
    SYSTEM = "SYSTEM"
    USER = "USER"

class ProviderAccountDetailOauthMigrationStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    TO_BE_MIGRATED = "TO_BE_MIGRATED"
    COMPLETED = "COMPLETED"

class ProviderAccountDetailStatusEnum(str, Enum):
    LOGIN_IN_PROGRESS = "LOGIN_IN_PROGRESS"
    USER_INPUT_REQUIRED = "USER_INPUT_REQUIRED"
    IN_PROGRESS = "IN_PROGRESS"
    PARTIAL_SUCCESS = "PARTIAL_SUCCESS"
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"
    MIGRATION_IN_PROGRESS = "MIGRATION_IN_PROGRESS"


@dataclass_json
@dataclasses.dataclass
class ProviderAccountDetail:
    consent_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentId') }})
    aggregation_source: Optional[ProviderAccountDetailAggregationSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregationSource') }})
    created_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdDate') }})
    dataset: Optional[list[shared_accountdataset.AccountDataset]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataset') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_manual: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isManual') }})
    last_updated: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated') }})
    login_form: Optional[list[shared_loginform.LoginForm]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loginForm') }})
    oauth_migration_status: Optional[ProviderAccountDetailOauthMigrationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthMigrationStatus') }})
    preferences: Optional[shared_provideraccountpreferences.ProviderAccountPreferences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferences') }})
    provider_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerId') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: Optional[ProviderAccountDetailStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
