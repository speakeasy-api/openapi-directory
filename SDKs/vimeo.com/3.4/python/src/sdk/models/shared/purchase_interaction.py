import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PurchaseInteractionBuy:
    r"""PurchaseInteractionBuy
    Information on purchasing this video.
    """
    
    drm: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drm') }})
    
class PurchaseInteractionSubscribeStreamEnum(str, Enum):
    AVAILABLE = "available"
    PURCHASED = "purchased"
    RESTRICTED = "restricted"
    UNAVAILABLE = "unavailable"


@dataclass_json
@dataclasses.dataclass
class PurchaseInteractionSubscribe:
    r"""PurchaseInteractionSubscribe
    Information on subscribing to this video.
    """
    
    drm: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drm') }})
    expires_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_time') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    purchase_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchase_time') }})
    stream: Optional[PurchaseInteractionSubscribeStreamEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclasses.dataclass
class PurchaseInteraction:
    buy: Optional[PurchaseInteractionBuy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buy') }})
    rent: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rent') }})
    subscribe: Optional[PurchaseInteractionSubscribe] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribe') }})
    
