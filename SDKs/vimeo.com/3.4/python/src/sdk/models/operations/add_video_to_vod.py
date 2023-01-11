import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import legacy_error as shared_legacy_error
from ..shared import on_demand_video as shared_on_demand_video


@dataclasses.dataclass
class AddVideoToVodPathParams:
    ondemand_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AddVideoToVodRequestBodyBuyPrice:
    aud: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AUD') }})
    cad: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CAD') }})
    chf: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CHF') }})
    dkk: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DKK') }})
    eur: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EUR') }})
    gbp: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GBP') }})
    jpy: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JPY') }})
    krw: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KRW') }})
    nok: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NOK') }})
    pln: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PLN') }})
    sek: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SEK') }})
    usd: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('USD') }})
    

@dataclass_json
@dataclasses.dataclass
class AddVideoToVodRequestBodyBuy:
    price: Optional[AddVideoToVodRequestBodyBuyPrice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    

@dataclass_json
@dataclasses.dataclass
class AddVideoToVodRequestBodyRentPrice:
    aud: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AUD') }})
    cad: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CAD') }})
    chf: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CHF') }})
    dkk: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DKK') }})
    eur: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EUR') }})
    gbp: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GBP') }})
    jpy: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JPY') }})
    krw: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KRW') }})
    nok: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NOK') }})
    pln: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PLN') }})
    sek: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SEK') }})
    usd: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('USD') }})
    

@dataclass_json
@dataclasses.dataclass
class AddVideoToVodRequestBodyRent:
    price: Optional[AddVideoToVodRequestBodyRentPrice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    
class AddVideoToVodRequestBodyTypeEnum(str, Enum):
    EXTRA = "extra"
    MAIN = "main"
    TRAILER = "trailer"


@dataclass_json
@dataclasses.dataclass
class AddVideoToVodRequestBody:
    type: AddVideoToVodRequestBodyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    buy: Optional[AddVideoToVodRequestBodyBuy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buy') }})
    position: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    release_year: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('release_year') }})
    rent: Optional[AddVideoToVodRequestBodyRent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rent') }})
    

@dataclasses.dataclass
class AddVideoToVodSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AddVideoToVodRequest:
    path_params: AddVideoToVodPathParams = dataclasses.field()
    request: AddVideoToVodRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/vnd.vimeo.ondemand.video+json' }})
    security: AddVideoToVodSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AddVideoToVodResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    on_demand_video: Optional[shared_on_demand_video.OnDemandVideo] = dataclasses.field(default=None)
    
