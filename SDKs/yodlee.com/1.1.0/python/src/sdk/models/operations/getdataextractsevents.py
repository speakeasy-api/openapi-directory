import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import dataextractseventresponse as shared_dataextractseventresponse
from ..shared import yodleeerror as shared_yodleeerror


@dataclasses.dataclass
class GetDataExtractsEventsQueryParams:
    event_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'eventName', 'style': 'form', 'explode': True }})
    from_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'fromDate', 'style': 'form', 'explode': True }})
    to_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'toDate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDataExtractsEventsRequest:
    query_params: GetDataExtractsEventsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDataExtractsEventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    data_extracts_event_response: Optional[shared_dataextractseventresponse.DataExtractsEventResponse] = dataclasses.field(default=None)
    yodlee_error: Optional[shared_yodleeerror.YodleeError] = dataclasses.field(default=None)
    
