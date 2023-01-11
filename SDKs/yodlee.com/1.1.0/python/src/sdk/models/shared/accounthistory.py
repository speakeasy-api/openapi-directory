import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import historicalbalance as shared_historicalbalance


@dataclass_json
@dataclasses.dataclass
class AccountHistory:
    historical_balances: Optional[list[shared_historicalbalance.HistoricalBalance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('historicalBalances') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
