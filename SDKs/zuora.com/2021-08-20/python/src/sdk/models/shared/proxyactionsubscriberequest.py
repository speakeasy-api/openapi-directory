import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscriberequest as shared_subscriberequest


@dataclass_json
@dataclasses.dataclass
class ProxyActionsubscribeRequest:
    subscribes: list[shared_subscriberequest.SubscribeRequest] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribes') }})
    
