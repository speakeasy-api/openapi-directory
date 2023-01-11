import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scheduledtransactiondetail as shared_scheduledtransactiondetail


@dataclass_json
@dataclasses.dataclass
class ScheduledTransactionResponseData:
    scheduled_transaction: shared_scheduledtransactiondetail.ScheduledTransactionDetail = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduled_transaction') }})
    

@dataclass_json
@dataclasses.dataclass
class ScheduledTransactionResponse:
    data: ScheduledTransactionResponseData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
