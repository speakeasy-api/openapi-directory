import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hybridtransaction as shared_hybridtransaction


@dataclass_json
@dataclasses.dataclass
class HybridTransactionsResponseData:
    transactions: list[shared_hybridtransaction.HybridTransaction] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    

@dataclass_json
@dataclasses.dataclass
class HybridTransactionsResponse:
    data: HybridTransactionsResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
