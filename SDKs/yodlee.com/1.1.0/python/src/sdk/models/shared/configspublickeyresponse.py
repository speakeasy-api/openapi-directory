import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configspublickey as shared_configspublickey


@dataclass_json
@dataclasses.dataclass
class ConfigsPublicKeyResponse:
    public_key: Optional[shared_configspublickey.ConfigsPublicKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKey') }})
    
