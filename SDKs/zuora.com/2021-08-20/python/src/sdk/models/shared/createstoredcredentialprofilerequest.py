import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CreateStoredCredentialProfileRequestActionEnum(str, Enum):
    ACTIVATE = "Activate"
    PERSIST = "Persist"

class CreateStoredCredentialProfileRequestConsentAgreementSrcEnum(str, Enum):
    EXTERNAL = "External"

class CreateStoredCredentialProfileRequestStatusEnum(str, Enum):
    AGREED = "Agreed"
    ACTIVE = "Active"

class CreateStoredCredentialProfileRequestTypeEnum(str, Enum):
    RECURRING = "Recurring"
    UNSCHEDULED = "Unscheduled"


@dataclass_json
@dataclasses.dataclass
class CreateStoredCredentialProfileRequest:
    consent_agreement_src: CreateStoredCredentialProfileRequestConsentAgreementSrcEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentAgreementSrc') }})
    status: CreateStoredCredentialProfileRequestStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: CreateStoredCredentialProfileRequestTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    action: Optional[CreateStoredCredentialProfileRequestActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    agreed_on: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agreedOn'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    auth_gateway: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authGateway') }})
    card_security_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardSecurityCode') }})
    consent_agreement_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentAgreementRef') }})
    network_transaction_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkTransactionId') }})
    
