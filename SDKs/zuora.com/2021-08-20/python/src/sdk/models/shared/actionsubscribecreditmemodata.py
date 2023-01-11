import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionsubscribecreditmemo as shared_actionsubscribecreditmemo
from ..shared import actionsubscribecreditmemoitem as shared_actionsubscribecreditmemoitem


@dataclass_json
@dataclasses.dataclass
class ActionSubscribeCreditMemoData:
    credit_memo: Optional[shared_actionsubscribecreditmemo.ActionSubscribeCreditMemo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditMemo') }})
    credit_memo_item: Optional[list[shared_actionsubscribecreditmemoitem.ActionSubscribeCreditMemoItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditMemoItem') }})
    
