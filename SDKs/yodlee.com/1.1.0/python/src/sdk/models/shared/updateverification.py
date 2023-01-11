import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import verificationaccount as shared_verificationaccount
from ..shared import verificationtransaction as shared_verificationtransaction

class UpdateVerificationVerificationTypeEnum(str, Enum):
    MATCHING = "MATCHING"
    CHALLENGE_DEPOSIT = "CHALLENGE_DEPOSIT"


@dataclass_json
@dataclasses.dataclass
class UpdateVerificationInput:
    transaction: list[shared_verificationtransaction.VerificationTransaction] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    account: Optional[shared_verificationaccount.VerificationAccount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    account_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    provider_account_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerAccountId') }})
    verification_type: Optional[UpdateVerificationVerificationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationType') }})
    
