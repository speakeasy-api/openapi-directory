import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transactiondetail as shared_transactiondetail


@dataclass_json
@dataclasses.dataclass
class TransactionsResponseData:
    server_knowledge: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_knowledge') }})
    transactions: list[shared_transactiondetail.TransactionDetail] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionsResponse:
    data: TransactionsResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
