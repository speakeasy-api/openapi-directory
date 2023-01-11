import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetPotsPathParams:
    investor_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'investor_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPotsQueryParams:
    financial_product_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'financial_product_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPotsHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPotsSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetPots200ApplicationJSON:
    r"""GetPots200ApplicationJSON
    Array of all active investment pots created by the investor
    """
    
    pots: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pots') }})
    

@dataclasses.dataclass
class GetPotsRequest:
    headers: GetPotsHeaders = dataclasses.field()
    path_params: GetPotsPathParams = dataclasses.field()
    query_params: GetPotsQueryParams = dataclasses.field()
    security: GetPotsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPotsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_pots_200_application_json_object: Optional[GetPots200ApplicationJSON] = dataclasses.field(default=None)
    get_pots_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pots_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pots_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pots_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pots_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_pots_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
