import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import artistcontract as shared_artistcontract

class ArtistForArtistForAPIContractLinkTypeEnum(str, Enum):
    CHARACTER_DESIGNER = "CharacterDesigner"
    GROUP = "Group"
    ILLUSTRATOR = "Illustrator"
    MANAGER = "Manager"
    VOICE_PROVIDER = "VoiceProvider"


@dataclass_json
@dataclasses.dataclass
class ArtistForArtistForAPIContract:
    artist: Optional[shared_artistcontract.ArtistContract] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artist') }})
    link_type: Optional[ArtistForArtistForAPIContractLinkTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkType') }})
    
