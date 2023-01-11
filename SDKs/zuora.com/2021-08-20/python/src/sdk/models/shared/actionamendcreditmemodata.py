import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actionamendcreditmemo as shared_actionamendcreditmemo
from ..shared import actionamendcreditmemoitem as shared_actionamendcreditmemoitem


@dataclass_json
@dataclasses.dataclass
class ActionAmendCreditMemoData:
    credit_memo: Optional[shared_actionamendcreditmemo.ActionAmendCreditMemo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditMemo') }})
    credit_memo_item: Optional[list[shared_actionamendcreditmemoitem.ActionAmendCreditMemoItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditMemoItem') }})
    
