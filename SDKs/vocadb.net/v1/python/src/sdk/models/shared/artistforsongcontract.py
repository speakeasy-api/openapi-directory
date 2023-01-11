import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import artistcontract as shared_artistcontract

class ArtistForSongContractCategoriesEnum(str, Enum):
    NOTHING = "Nothing"
    VOCALIST = "Vocalist"
    PRODUCER = "Producer"
    ANIMATOR = "Animator"
    LABEL = "Label"
    CIRCLE = "Circle"
    OTHER = "Other"
    BAND = "Band"
    ILLUSTRATOR = "Illustrator"
    SUBJECT = "Subject"

class ArtistForSongContractEffectiveRolesEnum(str, Enum):
    DEFAULT = "Default"
    ANIMATOR = "Animator"
    ARRANGER = "Arranger"
    COMPOSER = "Composer"
    DISTRIBUTOR = "Distributor"
    ILLUSTRATOR = "Illustrator"
    INSTRUMENTALIST = "Instrumentalist"
    LYRICIST = "Lyricist"
    MASTERING = "Mastering"
    PUBLISHER = "Publisher"
    VOCALIST = "Vocalist"
    VOICE_MANIPULATOR = "VoiceManipulator"
    OTHER = "Other"
    MIXER = "Mixer"
    CHORUS = "Chorus"
    ENCODER = "Encoder"
    VOCAL_DATA_PROVIDER = "VocalDataProvider"

class ArtistForSongContractRolesEnum(str, Enum):
    DEFAULT = "Default"
    ANIMATOR = "Animator"
    ARRANGER = "Arranger"
    COMPOSER = "Composer"
    DISTRIBUTOR = "Distributor"
    ILLUSTRATOR = "Illustrator"
    INSTRUMENTALIST = "Instrumentalist"
    LYRICIST = "Lyricist"
    MASTERING = "Mastering"
    PUBLISHER = "Publisher"
    VOCALIST = "Vocalist"
    VOICE_MANIPULATOR = "VoiceManipulator"
    OTHER = "Other"
    MIXER = "Mixer"
    CHORUS = "Chorus"
    ENCODER = "Encoder"
    VOCAL_DATA_PROVIDER = "VocalDataProvider"


@dataclass_json
@dataclasses.dataclass
class ArtistForSongContract:
    artist: Optional[shared_artistcontract.ArtistContract] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artist') }})
    categories: Optional[ArtistForSongContractCategoriesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    effective_roles: Optional[ArtistForSongContractEffectiveRolesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveRoles') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_custom_name: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isCustomName') }})
    is_support: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSupport') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    roles: Optional[ArtistForSongContractRolesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    
