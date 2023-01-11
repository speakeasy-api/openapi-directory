import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import listvaluablesclassesresponse as shared_listvaluablesclassesresponse

class WalletobjectsValuablesclassesListRequestedTypeEnum(str, Enum):
    VALUABLE_TYPE_UNSPECIFIED = "VALUABLE_TYPE_UNSPECIFIED"
    VALUABLE_TYPE_GIFT_CARD = "VALUABLE_TYPE_GIFT_CARD"
    VALUABLE_TYPE_LOYALTY = "VALUABLE_TYPE_LOYALTY"
    VALUABLE_TYPE_OFFER = "VALUABLE_TYPE_OFFER"
    VALUABLE_TYPE_EVENT_TICKET = "VALUABLE_TYPE_EVENT_TICKET"
    VALUABLE_TYPE_FLIGHT = "VALUABLE_TYPE_FLIGHT"
    VALUABLE_TYPE_TRANSIT = "VALUABLE_TYPE_TRANSIT"


@dataclasses.dataclass
class WalletobjectsValuablesclassesListQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    issuer_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'issuerId', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    requested_type: Optional[list[WalletobjectsValuablesclassesListRequestedTypeEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'requestedType', 'style': 'form', 'explode': True }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class WalletobjectsValuablesclassesListSecurity:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class WalletobjectsValuablesclassesListRequest:
    query_params: WalletobjectsValuablesclassesListQueryParams = dataclasses.field()
    security: WalletobjectsValuablesclassesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class WalletobjectsValuablesclassesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_valuables_classes_response: Optional[shared_listvaluablesclassesresponse.ListValuablesClassesResponse] = dataclasses.field(default=None)
    
