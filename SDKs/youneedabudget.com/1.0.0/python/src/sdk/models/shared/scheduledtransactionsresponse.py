import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scheduledtransactiondetail as shared_scheduledtransactiondetail


@dataclass_json
@dataclasses.dataclass
class ScheduledTransactionsResponseData:
    scheduled_transactions: list[shared_scheduledtransactiondetail.ScheduledTransactionDetail] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduled_transactions') }})
    server_knowledge: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_knowledge') }})
    

@dataclass_json
@dataclasses.dataclass
class ScheduledTransactionsResponse:
    data: ScheduledTransactionsResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
