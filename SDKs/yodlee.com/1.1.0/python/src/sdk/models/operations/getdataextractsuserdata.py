import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import dataextractsuserdataresponse as shared_dataextractsuserdataresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class GetDataExtractsUserDataQueryParams:
    from_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'fromDate', 'style': 'form', 'explode': True }})
    login_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'loginName', 'style': 'form', 'explode': True }})
    to_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'toDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDataExtractsUserDataRequest:
    query_params: GetDataExtractsUserDataQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDataExtractsUserDataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    data_extracts_user_data_response: Optional[shared_dataextractsuserdataresponse.DataExtractsUserDataResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
