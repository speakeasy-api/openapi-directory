import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import on_demand_page as shared_on_demand_page

class CreateVodAlt1RequestBodyAcceptedCurrenciesEnum(str, Enum):
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
class CreateVodAlt1RequestBodyBuyPrice:
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
class CreateVodAlt1RequestBodyBuy:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    price: Optional[CreateVodAlt1RequestBodyBuyPrice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    
class CreateVodAlt1RequestBodyContentRatingEnum(str, Enum):
    DRUGS = "drugs"
    LANGUAGE = "language"
    NUDITY = "nudity"
    SAFE = "safe"
    UNRATED = "unrated"
    VIOLENCE = "violence"


@dataclass_json
@dataclasses.dataclass
class CreateVodAlt1RequestBodyEpisodesBuyPrice:
    usd: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('USD') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateVodAlt1RequestBodyEpisodesBuy:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    price: Optional[CreateVodAlt1RequestBodyEpisodesBuyPrice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    
class CreateVodAlt1RequestBodyEpisodesRentPeriodEnum(str, Enum):
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
class CreateVodAlt1RequestBodyEpisodesRentPrice:
    usd: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('USD') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateVodAlt1RequestBodyEpisodesRent:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    period: Optional[CreateVodAlt1RequestBodyEpisodesRentPeriodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    price: Optional[CreateVodAlt1RequestBodyEpisodesRentPrice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateVodAlt1RequestBodyEpisodes:
    buy: Optional[CreateVodAlt1RequestBodyEpisodesBuy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buy') }})
    rent: Optional[CreateVodAlt1RequestBodyEpisodesRent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rent') }})
    
class CreateVodAlt1RequestBodyRentPeriodEnum(str, Enum):
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
class CreateVodAlt1RequestBodyRentPrice:
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
class CreateVodAlt1RequestBodyRent:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    period: Optional[CreateVodAlt1RequestBodyRentPeriodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    price: Optional[CreateVodAlt1RequestBodyRentPrice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateVodAlt1RequestBodySubscriptionMonthlyPrice:
    usd: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('USD') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateVodAlt1RequestBodySubscriptionMonthly:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    price: Optional[CreateVodAlt1RequestBodySubscriptionMonthlyPrice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateVodAlt1RequestBodySubscription:
    monthly: Optional[CreateVodAlt1RequestBodySubscriptionMonthly] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly') }})
    
class CreateVodAlt1RequestBodyTypeEnum(str, Enum):
    FILM = "film"
    SERIES = "series"


@dataclass_json
@dataclasses.dataclass
class CreateVodAlt1RequestBody:
    content_rating: CreateVodAlt1RequestBodyContentRatingEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_rating') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: CreateVodAlt1RequestBodyTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    accepted_currencies: Optional[CreateVodAlt1RequestBodyAcceptedCurrenciesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accepted_currencies') }})
    buy: Optional[CreateVodAlt1RequestBodyBuy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buy') }})
    domain_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain_link') }})
    episodes: Optional[CreateVodAlt1RequestBodyEpisodes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('episodes') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    rent: Optional[CreateVodAlt1RequestBodyRent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rent') }})
    subscription: Optional[CreateVodAlt1RequestBodySubscription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    

@dataclasses.dataclass
class CreateVodAlt1Request:
    request: CreateVodAlt1RequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateVodAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    on_demand_page: Optional[shared_on_demand_page.OnDemandPage] = dataclasses.field(default=None)
    
