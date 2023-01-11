import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userforapicontract as shared_userforapicontract

class UserMessageContractInboxEnum(str, Enum):
    NOTHING = "Nothing"
    RECEIVED = "Received"
    SENT = "Sent"
    NOTIFICATIONS = "Notifications"


@dataclass_json
@dataclasses.dataclass
class UserMessageContract:
    body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    created_formatted: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdFormatted') }})
    high_priority: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highPriority') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    inbox: Optional[UserMessageContractInboxEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbox') }})
    read: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read') }})
    receiver: Optional[shared_userforapicontract.UserForAPIContract] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receiver') }})
    sender: Optional[shared_userforapicontract.UserForAPIContract] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sender') }})
    subject: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    
