import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import derivednetworthresponse as shared_derivednetworthresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class GetNetworthQueryParams:
    account_ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'accountIds', 'style': 'form', 'explode': True }})
    container: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'container', 'style': 'form', 'explode': True }})
    from_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fromDate', 'style': 'form', 'explode': True }})
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    interval: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'interval', 'style': 'form', 'explode': True }})
    skip: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    to_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'toDate', 'style': 'form', 'explode': True }})
    top: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'top', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNetworthRequest:
    query_params: GetNetworthQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworthResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    derived_networth_response: Optional[shared_derivednetworthresponse.DerivedNetworthResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
