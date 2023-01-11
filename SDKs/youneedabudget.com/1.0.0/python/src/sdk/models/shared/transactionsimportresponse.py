import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TransactionsImportResponseData:
    transaction_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction_ids') }})
    

@dataclass_json
@dataclasses.dataclass
class TransactionsImportResponse:
    data: TransactionsImportResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
