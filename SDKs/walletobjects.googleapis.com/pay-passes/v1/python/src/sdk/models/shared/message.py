import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeinterval as shared_timeinterval
from ..shared import localizedstring as shared_localizedstring

class MessageMessageTypeEnum(str, Enum):
    MESSAGE_TYPE_UNSPECIFIED = "MESSAGE_TYPE_UNSPECIFIED"
    TEXT_UPPER = "TEXT"
    TEXT_LOWER = "text"
    EXPIRATION_NOTIFICATION_UPPER = "EXPIRATION_NOTIFICATION"
    EXPIRATION_NOTIFICATION_MIXED = "expirationNotification"


@dataclass_json
@dataclasses.dataclass
class Message:
    r"""Message
    A message that will be displayed with a Valuable
    """
    
    body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    display_interval: Optional[shared_timeinterval.TimeInterval] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayInterval') }})
    header: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    localized_body: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizedBody') }})
    localized_header: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizedHeader') }})
    message_type: Optional[MessageMessageTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageType') }})
    
