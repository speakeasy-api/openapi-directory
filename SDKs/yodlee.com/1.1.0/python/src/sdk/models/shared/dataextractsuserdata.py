import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dataextractsaccount as shared_dataextractsaccount
from ..shared import dataextractsholding as shared_dataextractsholding
from ..shared import dataextractsprovideraccount as shared_dataextractsprovideraccount
from ..shared import dataextractstransaction as shared_dataextractstransaction
from ..shared import dataextractsuser as shared_dataextractsuser


@dataclass_json
@dataclasses.dataclass
class DataExtractsUserData:
    account: Optional[list[shared_dataextractsaccount.DataExtractsAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    holding: Optional[list[shared_dataextractsholding.DataExtractsHolding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holding') }})
    provider_account: Optional[list[shared_dataextractsprovideraccount.DataExtractsProviderAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerAccount') }})
    total_transactions_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalTransactionsCount') }})
    transaction: Optional[list[shared_dataextractstransaction.DataExtractsTransaction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    user: Optional[shared_dataextractsuser.DataExtractsUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
