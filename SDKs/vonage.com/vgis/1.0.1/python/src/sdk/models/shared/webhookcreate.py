import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WebhookCreateEventsEnum(str, Enum):
    CALL = "CALL"

class WebhookCreateMetadataPolicyEnum(str, Enum):
    NONE = "NONE"
    HEADER = "HEADER"
    BODY = "BODY"

class WebhookCreateSigningAlgoEnum(str, Enum):
    HMAC_SHA256 = "HMAC_SHA256"


@dataclass_json
@dataclasses.dataclass
class WebhookCreate:
    events: Optional[list[WebhookCreateEventsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    metadata_policy: Optional[WebhookCreateMetadataPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataPolicy') }})
    signing_algo: Optional[WebhookCreateSigningAlgoEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signingAlgo') }})
    signing_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signingKey') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
