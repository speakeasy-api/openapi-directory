import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountaddress as shared_accountaddress
from ..shared import paymentidentifier as shared_paymentidentifier
from ..shared import paymentbanktransfercode as shared_paymentbanktransfercode


@dataclass_json
@dataclasses.dataclass
class PaymentProfile:
    address: Optional[list[shared_accountaddress.AccountAddress]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    identifier: Optional[shared_paymentidentifier.PaymentIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    payment_bank_transfer_code: Optional[shared_paymentbanktransfercode.PaymentBankTransferCode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentBankTransferCode') }})
    
