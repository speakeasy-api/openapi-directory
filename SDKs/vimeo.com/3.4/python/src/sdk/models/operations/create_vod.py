import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import on_demand_page as shared_on_demand_page


@dataclasses.dataclass
class CreateVodPathParams:
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class CreateVodRequestBodyAcceptedCurrenciesEnum(str, Enum):
    AUD = "AUD"
    CAD = "CAD"
    CHF = "CHF"
    DKK = "DKK"
    EUR = "EUR"
    GBP = "GBP"
    JPY = "JPY"
    KRW = "KRW"
    NOK = "NOK"
    PLN = "PLN"
    SEK = "SEK"
    USD = "USD"


@dataclass_json
@dataclasses.dataclass
class CreateVodRequestBodyBuyPrice:
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
class CreateVodRequestBodyBuy:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    price: Optional[CreateVodRequestBodyBuyPrice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    
class CreateVodRequestBodyContentRatingEnum(str, Enum):
    DRUGS = "drugs"
    LANGUAGE = "language"
    NUDITY = "nudity"
    SAFE = "safe"
    UNRATED = "unrated"
    VIOLENCE = "violence"


@dataclass_json
@dataclasses.dataclass
class CreateVodRequestBodyEpisodesBuyPrice:
    usd: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('USD') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateVodRequestBodyEpisodesBuy:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    price: Optional[CreateVodRequestBodyEpisodesBuyPrice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    
class CreateVodRequestBodyEpisodesRentPeriodEnum(str, Enum):
    ONE_WEEK = "1 week"
    ONE_YEAR = "1 year"
    TWENTY_FOUR_HOUR = "24 hour"
    THREE_MONTH = "3 month"
    THIRTY_DAY = "30 day"
    FORTY_EIGHT_HOUR = "48 hour"
    SIX_MONTH = "6 month"
    SEVENTY_TWO_HOUR = "72 hour"


@dataclass_json
@dataclasses.dataclass
class CreateVodRequestBodyEpisodesRentPrice:
    usd: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('USD') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateVodRequestBodyEpisodesRent:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    period: Optional[CreateVodRequestBodyEpisodesRentPeriodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    price: Optional[CreateVodRequestBodyEpisodesRentPrice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateVodRequestBodyEpisodes:
    buy: Optional[CreateVodRequestBodyEpisodesBuy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buy') }})
    rent: Optional[CreateVodRequestBodyEpisodesRent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rent') }})
    
class CreateVodRequestBodyRentPeriodEnum(str, Enum):
    ONE_WEEK = "1 week"
    ONE_YEAR = "1 year"
    TWENTY_FOUR_HOUR = "24 hour"
    THREE_MONTH = "3 month"
    THIRTY_DAY = "30 day"
    FORTY_EIGHT_HOUR = "48 hour"
    SIX_MONTH = "6 month"
    SEVENTY_TWO_HOUR = "72 hour"


@dataclass_json
@dataclasses.dataclass
class CreateVodRequestBodyRentPrice:
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
class CreateVodRequestBodyRent:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    period: Optional[CreateVodRequestBodyRentPeriodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    price: Optional[CreateVodRequestBodyRentPrice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateVodRequestBodySubscriptionMonthlyPrice:
    usd: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('USD') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateVodRequestBodySubscriptionMonthly:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    price: Optional[CreateVodRequestBodySubscriptionMonthlyPrice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateVodRequestBodySubscription:
    monthly: Optional[CreateVodRequestBodySubscriptionMonthly] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly') }})
    
class CreateVodRequestBodyTypeEnum(str, Enum):
    FILM = "film"
    SERIES = "series"


@dataclass_json
@dataclasses.dataclass
class CreateVodRequestBody:
    content_rating: CreateVodRequestBodyContentRatingEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_rating') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: CreateVodRequestBodyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    accepted_currencies: Optional[CreateVodRequestBodyAcceptedCurrenciesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accepted_currencies') }})
    buy: Optional[CreateVodRequestBodyBuy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buy') }})
    domain_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain_link') }})
    episodes: Optional[CreateVodRequestBodyEpisodes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('episodes') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    rent: Optional[CreateVodRequestBodyRent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rent') }})
    subscription: Optional[CreateVodRequestBodySubscription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    

@dataclasses.dataclass
class CreateVodRequest:
    path_params: CreateVodPathParams = dataclasses.field()
    request: CreateVodRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateVodResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    on_demand_page: Optional[shared_on_demand_page.OnDemandPage] = dataclasses.field(default=None)
    
