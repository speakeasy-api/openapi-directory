import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pvextendedmetadata as shared_pvextendedmetadata

class PvContractPvTypeEnum(str, Enum):
    ORIGINAL = "Original"
    REPRINT = "Reprint"
    OTHER = "Other"

class PvContractServiceEnum(str, Enum):
    NICO_NICO_DOUGA = "NicoNicoDouga"
    YOUTUBE = "Youtube"
    SOUND_CLOUD = "SoundCloud"
    VIMEO = "Vimeo"
    PIAPRO = "Piapro"
    BILIBILI = "Bilibili"
    FILE = "File"
    LOCAL_FILE = "LocalFile"
    CREOFUGA = "Creofuga"
    BANDCAMP = "Bandcamp"


@dataclass_json
@dataclasses.dataclass
class PvContract:
    author: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    created_by: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    disabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    extended_metadata: Optional[shared_pvextendedmetadata.PvExtendedMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extendedMetadata') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    publish_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pv_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pvId') }})
    pv_type: Optional[PvContractPvTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pvType') }})
    service: Optional[PvContractServiceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    thumb_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbUrl') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
