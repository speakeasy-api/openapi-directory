import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import savetransaction as shared_savetransaction


@dataclass_json
@dataclasses.dataclass
class SaveTransactionsWrapper:
    transaction: Optional[shared_savetransaction.SaveTransaction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    transactions: Optional[list[shared_savetransaction.SaveTransaction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    
