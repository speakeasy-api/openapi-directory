import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AutoRefreshAdditionalStatusEnum(str, Enum):
    SCHEDULED = "SCHEDULED"
    TEMP_ERROR = "TEMP_ERROR"
    SITE_BLOCKING = "SITE_BLOCKING"
    SITE_NOT_SUPPORTED = "SITE_NOT_SUPPORTED"
    REAL_TIME_MFA_REQUIRED = "REAL_TIME_MFA_REQUIRED"
    USER_ACTION_REQUIRED = "USER_ACTION_REQUIRED"
    UNSUBSCRIBED = "UNSUBSCRIBED"
    MANUAL_ACCOUNT = "MANUAL_ACCOUNT"

class AutoRefreshStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclasses.dataclass
class AutoRefresh:
    additional_status: Optional[AutoRefreshAdditionalStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalStatus') }})
    as_of_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asOfDate') }})
    status: Optional[AutoRefreshStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
