import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security

class GetAllInvestorsSortEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclasses.dataclass
class GetAllInvestorsQueryParams:
    page_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_number', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    sort: Optional[GetAllInvestorsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAllInvestorsHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllInvestorsSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetAllInvestors200ApplicationJSON:
    r"""GetAllInvestors200ApplicationJSON
    Array of investors
    """
    
    investors: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('investors') }})
    next_page_available: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_available') }})
    

@dataclasses.dataclass
class GetAllInvestorsRequest:
    headers: GetAllInvestorsHeaders = dataclasses.field()
    query_params: GetAllInvestorsQueryParams = dataclasses.field()
    security: GetAllInvestorsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAllInvestorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_all_investors_200_application_json_object: Optional[GetAllInvestors200ApplicationJSON] = dataclasses.field(default=None)
    get_all_investors_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_all_investors_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_all_investors_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_all_investors_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_all_investors_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
