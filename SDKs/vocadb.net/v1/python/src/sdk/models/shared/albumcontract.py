import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import optionaldatetimecontract as shared_optionaldatetimecontract
from ..shared import releaseeventforapicontract as shared_releaseeventforapicontract
from ..shared import releaseeventforapicontract as shared_releaseeventforapicontract

class AlbumContractDiscTypeEnum(str, Enum):
    UNKNOWN = "Unknown"
    ALBUM = "Album"
    SINGLE = "Single"
    EP = "EP"
    SPLIT_ALBUM = "SplitAlbum"
    COMPILATION = "Compilation"
    VIDEO = "Video"
    ARTBOOK = "Artbook"
    GAME = "Game"
    FANMADE = "Fanmade"
    INSTRUMENTAL = "Instrumental"
    OTHER = "Other"

class AlbumContractStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass_json
@dataclasses.dataclass
class AlbumContract:
    additional_names: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalNames') }})
    artist_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artistString') }})
    cover_picture_mime: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverPictureMime') }})
    create_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    disc_type: Optional[AlbumContractDiscTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discType') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rating_average: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratingAverage') }})
    rating_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratingCount') }})
    release_date: Optional[shared_optionaldatetimecontract.OptionalDateTimeContract] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseDate') }})
    release_event: Optional[shared_releaseeventforapicontract.ReleaseEventForAPIContract] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseEvent') }})
    status: Optional[AlbumContractStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class AlbumContractInput:
    additional_names: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalNames') }})
    artist_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artistString') }})
    cover_picture_mime: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverPictureMime') }})
    create_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    disc_type: Optional[AlbumContractDiscTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discType') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rating_average: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratingAverage') }})
    rating_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratingCount') }})
    release_date: Optional[shared_optionaldatetimecontract.OptionalDateTimeContract] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseDate') }})
    release_event: Optional[shared_releaseeventforapicontract.ReleaseEventForAPIContractInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseEvent') }})
    status: Optional[AlbumContractStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
