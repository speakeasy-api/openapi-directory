import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import verificationaccount as shared_verificationaccount

class VerificationVerificationTypeEnum(str, Enum):
    MATCHING = "MATCHING"
    CHALLENGE_DEPOSIT = "CHALLENGE_DEPOSIT"

class VerificationReasonEnum(str, Enum):
    DATA_NOT_AVAILABLE = "DATA_NOT_AVAILABLE"
    ACCOUNT_HOLDER_MISMATCH = "ACCOUNT_HOLDER_MISMATCH"
    FULL_ACCOUNT_NUMBER_AND_BANK_TRANSFER_CODE_NOT_AVAILABLE = "FULL_ACCOUNT_NUMBER_AND_BANK_TRANSFER_CODE_NOT_AVAILABLE"
    FULL_ACCOUNT_NUMBER_NOT_AVAILABLE = "FULL_ACCOUNT_NUMBER_NOT_AVAILABLE"
    BANK_TRANSFER_CODE_NOT_AVAILABLE = "BANK_TRANSFER_CODE_NOT_AVAILABLE"
    EXPIRED = "EXPIRED"
    DATA_MISMATCH = "DATA_MISMATCH"
    INSTRUCTION_GENERATION_ERROR = "INSTRUCTION_GENERATION_ERROR"

class VerificationVerificationStatusEnum(str, Enum):
    INITIATED = "INITIATED"
    DEPOSITED = "DEPOSITED"
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"


@dataclass_json
@dataclasses.dataclass
class VerificationInput:
    account: Optional[shared_verificationaccount.VerificationAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    account_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    provider_account_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerAccountId') }})
    verification_type: Optional[VerificationVerificationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationType') }})
    

@dataclass_json
@dataclasses.dataclass
class Verification:
    account: Optional[shared_verificationaccount.VerificationAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    account_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    provider_account_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerAccountId') }})
    reason: Optional[VerificationReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    verification_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationDate') }})
    verification_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationId') }})
    verification_status: Optional[VerificationVerificationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationStatus') }})
    verification_type: Optional[VerificationVerificationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationType') }})
    
