import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transactiondetail as shared_transactiondetail


@dataclass_json
@dataclasses.dataclass
class TransactionResponseData:
    transaction: shared_transactiondetail.TransactionDetail = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionResponse:
    data: TransactionResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
