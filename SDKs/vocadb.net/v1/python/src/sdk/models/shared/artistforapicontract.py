import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import artistforartistforapicontract as shared_artistforartistforapicontract
from ..shared import artistcontract as shared_artistcontract
from ..shared import entrythumbforapicontract as shared_entrythumbforapicontract
from ..shared import localizedstringcontract as shared_localizedstringcontract
from ..shared import artistrelationsforapi as shared_artistrelationsforapi
from ..shared import tagusageforapicontract as shared_tagusageforapicontract
from ..shared import weblinkforapicontract as shared_weblinkforapicontract

class ArtistForAPIContractArtistTypeEnum(str, Enum):
    UNKNOWN = "Unknown"
    CIRCLE = "Circle"
    LABEL = "Label"
    PRODUCER = "Producer"
    ANIMATOR = "Animator"
    ILLUSTRATOR = "Illustrator"
    LYRICIST = "Lyricist"
    VOCALOID = "Vocaloid"
    UTAU = "UTAU"
    CE_VIO = "CeVIO"
    OTHER_VOICE_SYNTHESIZER = "OtherVoiceSynthesizer"
    OTHER_VOCALIST = "OtherVocalist"
    OTHER_GROUP = "OtherGroup"
    OTHER_INDIVIDUAL = "OtherIndividual"
    UTAITE = "Utaite"
    BAND = "Band"
    VOCALIST = "Vocalist"
    CHARACTER = "Character"
    SYNTHESIZER_V = "SynthesizerV"

class ArtistForAPIContractDefaultNameLanguageEnum(str, Enum):
    UNSPECIFIED = "Unspecified"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class ArtistForAPIContractStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass_json
@dataclasses.dataclass
class ArtistForAPIContract:
    additional_names: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalNames') }})
    artist_links: Optional[list[shared_artistforartistforapicontract.ArtistForArtistForAPIContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artistLinks') }})
    artist_links_reverse: Optional[list[shared_artistforartistforapicontract.ArtistForArtistForAPIContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artistLinksReverse') }})
    artist_type: Optional[ArtistForAPIContractArtistTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artistType') }})
    base_voicebank: Optional[shared_artistcontract.ArtistContract] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseVoicebank') }})
    create_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultName') }})
    default_name_language: Optional[ArtistForAPIContractDefaultNameLanguageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultNameLanguage') }})
    deleted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    main_picture: Optional[shared_entrythumbforapicontract.EntryThumbForAPIContract] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainPicture') }})
    merged_to: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergedTo') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    names: Optional[list[shared_localizedstringcontract.LocalizedStringContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    picture_mime: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictureMime') }})
    relations: Optional[shared_artistrelationsforapi.ArtistRelationsForAPI] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relations') }})
    release_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[ArtistForAPIContractStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[list[shared_tagusageforapicontract.TagUsageForAPIContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    web_links: Optional[list[shared_weblinkforapicontract.WebLinkForAPIContract]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webLinks') }})
    
