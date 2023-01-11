import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import artistforapicontract as shared_artistforapicontract


@dataclass_json
@dataclasses.dataclass
class ArtistForUserForAPIContract:
    artist: Optional[shared_artistforapicontract.ArtistForAPIContract] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artist') }})
    
