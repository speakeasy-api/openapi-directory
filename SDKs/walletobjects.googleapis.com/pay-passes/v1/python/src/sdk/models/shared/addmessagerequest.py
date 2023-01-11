import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import message as shared_message


@dataclass_json
@dataclasses.dataclass
class AddMessageRequest:
    r"""AddMessageRequest
    Resource used when the AddMessage endpoints are called.
    """
    
    message: Optional[shared_message.Message] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
