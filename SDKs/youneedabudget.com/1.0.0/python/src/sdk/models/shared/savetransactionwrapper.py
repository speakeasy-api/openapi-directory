import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import savetransaction as shared_savetransaction


@dataclass_json
@dataclasses.dataclass
class SaveTransactionWrapper:
    transaction: shared_savetransaction.SaveTransaction = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    
