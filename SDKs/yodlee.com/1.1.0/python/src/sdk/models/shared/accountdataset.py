import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AccountDatasetAdditionalStatusEnum(str, Enum):
    LOGIN_IN_PROGRESS = "LOGIN_IN_PROGRESS"
    DATA_RETRIEVAL_IN_PROGRESS = "DATA_RETRIEVAL_IN_PROGRESS"
    ACCT_SUMMARY_RECEIVED = "ACCT_SUMMARY_RECEIVED"
    AVAILABLE_DATA_RETRIEVED = "AVAILABLE_DATA_RETRIEVED"
    PARTIAL_DATA_RETRIEVED = "PARTIAL_DATA_RETRIEVED"
    DATA_RETRIEVAL_FAILED = "DATA_RETRIEVAL_FAILED"
    DATA_NOT_AVAILABLE = "DATA_NOT_AVAILABLE"
    ACCOUNT_LOCKED = "ACCOUNT_LOCKED"
    ADDL_AUTHENTICATION_REQUIRED = "ADDL_AUTHENTICATION_REQUIRED"
    BETA_SITE_DEV_IN_PROGRESS = "BETA_SITE_DEV_IN_PROGRESS"
    CREDENTIALS_UPDATE_NEEDED = "CREDENTIALS_UPDATE_NEEDED"
    INCORRECT_CREDENTIALS = "INCORRECT_CREDENTIALS"
    PROPERTY_VALUE_NOT_AVAILABLE = "PROPERTY_VALUE_NOT_AVAILABLE"
    INVALID_ADDL_INFO_PROVIDED = "INVALID_ADDL_INFO_PROVIDED"
    REQUEST_TIME_OUT = "REQUEST_TIME_OUT"
    SITE_BLOCKING_ERROR = "SITE_BLOCKING_ERROR"
    UNEXPECTED_SITE_ERROR = "UNEXPECTED_SITE_ERROR"
    SITE_NOT_SUPPORTED = "SITE_NOT_SUPPORTED"
    SITE_UNAVAILABLE = "SITE_UNAVAILABLE"
    TECH_ERROR = "TECH_ERROR"
    USER_ACTION_NEEDED_AT_SITE = "USER_ACTION_NEEDED_AT_SITE"
    SITE_SESSION_INVALIDATED = "SITE_SESSION_INVALIDATED"
    NEW_AUTHENTICATION_REQUIRED = "NEW_AUTHENTICATION_REQUIRED"
    DATASET_NOT_SUPPORTED = "DATASET_NOT_SUPPORTED"
    ENROLLMENT_REQUIRED_FOR_DATASET = "ENROLLMENT_REQUIRED_FOR_DATASET"
    CONSENT_REQUIRED = "CONSENT_REQUIRED"
    CONSENT_EXPIRED = "CONSENT_EXPIRED"
    CONSENT_REVOKED = "CONSENT_REVOKED"
    INCORRECT_OAUTH_TOKEN = "INCORRECT_OAUTH_TOKEN"
    MIGRATION_IN_PROGRESS = "MIGRATION_IN_PROGRESS"

class AccountDatasetNameEnum(str, Enum):
    BASIC_AGG_DATA = "BASIC_AGG_DATA"
    ADVANCE_AGG_DATA = "ADVANCE_AGG_DATA"
    ACCT_PROFILE = "ACCT_PROFILE"
    DOCUMENT = "DOCUMENT"

class AccountDatasetUpdateEligibilityEnum(str, Enum):
    ALLOW_UPDATE = "ALLOW_UPDATE"
    ALLOW_UPDATE_WITH_CREDENTIALS = "ALLOW_UPDATE_WITH_CREDENTIALS"
    DISALLOW_UPDATE = "DISALLOW_UPDATE"


@dataclass_json
@dataclasses.dataclass
class AccountDataset:
    additional_status: Optional[AccountDatasetAdditionalStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalStatus') }})
    last_update_attempt: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateAttempt') }})
    last_updated: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated') }})
    name: Optional[AccountDatasetNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    next_update_scheduled: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextUpdateScheduled') }})
    update_eligibility: Optional[AccountDatasetUpdateEligibilityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateEligibility') }})
    
