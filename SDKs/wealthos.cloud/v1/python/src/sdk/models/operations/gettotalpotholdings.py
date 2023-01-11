import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetTotalPotHoldingsPathParams:
    investor_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'investor_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTotalPotHoldingsHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTotalPotHoldingsSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTotalPotHoldingsRequest:
    headers: GetTotalPotHoldingsHeaders = dataclasses.field()
    path_params: GetTotalPotHoldingsPathParams = dataclasses.field()
    security: GetTotalPotHoldingsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTotalPotHoldingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_total_pot_holdings_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_total_pot_holdings_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_total_pot_holdings_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_total_pot_holdings_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_total_pot_holdings_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_total_pot_holdings_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
