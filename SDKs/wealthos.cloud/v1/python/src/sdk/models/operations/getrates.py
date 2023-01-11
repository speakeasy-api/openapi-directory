import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security

class GetRatesRateTypeEnum(str, Enum):
    FX_SPOT = "fx-spot"


@dataclasses.dataclass
class GetRatesPathParams:
    rate_type: GetRatesRateTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'rate_type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRatesHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRatesSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetRates200ApplicationJSON:
    rates: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rates') }})
    

@dataclasses.dataclass
class GetRatesRequest:
    headers: GetRatesHeaders = dataclasses.field()
    path_params: GetRatesPathParams = dataclasses.field()
    security: GetRatesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_rates_200_application_json_object: Optional[GetRates200ApplicationJSON] = dataclasses.field(default=None)
    get_rates_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_rates_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_rates_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_rates_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_rates_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
