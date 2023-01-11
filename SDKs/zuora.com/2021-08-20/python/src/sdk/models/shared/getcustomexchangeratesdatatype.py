import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetCustomExchangeRatesDataTypeListOfExchangeRates:
    r"""GetCustomExchangeRatesDataTypeListOfExchangeRates
    Container for exchange rate information on a given date. The field name is the date in `yyyy-mm-dd` format, for example, 2016-01-15.
    
    """
    
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CURRENCY') }})
    provider_exchange_rate_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerExchangeRateDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCustomExchangeRatesDataType:
    date_: Optional[GetCustomExchangeRatesDataTypeListOfExchangeRates] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DATE') }})
    
