import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ProxyActionqueryRequestConf:
    batch_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchSize') }})
    

@dataclass_json
@dataclasses.dataclass
class ProxyActionqueryRequest:
    query_string: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryString') }})
    conf: Optional[ProxyActionqueryRequestConf] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conf') }})
    
