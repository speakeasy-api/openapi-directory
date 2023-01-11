import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transactiondetail as shared_transactiondetail


@dataclass_json
@dataclasses.dataclass
class SaveTransactionsResponseData:
    server_knowledge: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_knowledge') }})
    transaction_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction_ids') }})
    duplicate_import_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicate_import_ids') }})
    transaction: Optional[shared_transactiondetail.TransactionDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    transactions: Optional[list[shared_transactiondetail.TransactionDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    

@dataclass_json
@dataclasses.dataclass
class SaveTransactionsResponse:
    data: SaveTransactionsResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
