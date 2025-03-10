"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclasses.dataclass
class GetSellersByRegionRequest:
    
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    r"""HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand."""  
    content_type: str = dataclasses.field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    r"""Type of the content being sent."""  
    country: str = dataclasses.field(metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    r"""Three letter country code refering to the `postalCode` field."""  
    region_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'regionId', 'style': 'simple', 'explode': False }})
    r"""ID of the region corresponding to the shopper's location."""  
    geo_coordinates: Optional[list[float]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'geoCoordinates', 'style': 'form', 'explode': True }})
    r"""Geocoordinates (first longitude, semicolon, then latitude) corresponding to the shopper's location."""  
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'postalCode', 'style': 'form', 'explode': True }})
    r"""Postal code corresponding to the shopper's location."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetSellersByRegion200ApplicationJSONSellers:
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id'), 'exclude': lambda f: f is None }})
    r"""Seller ID."""  
    logo: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('logo'), 'exclude': lambda f: f is None }})
    r"""Seller logo."""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""Seller name."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetSellersByRegion200ApplicationJSON:
    r"""OK"""
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id'), 'exclude': lambda f: f is None }})
    r"""Region ID."""  
    sellers: Optional[list[GetSellersByRegion200ApplicationJSONSellers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sellers'), 'exclude': lambda f: f is None }})
    r"""Array with information on each seller retrieved for the given region."""  
    

@dataclasses.dataclass
class GetSellersByRegionResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    get_sellers_by_region_200_application_json_object: Optional[GetSellersByRegion200ApplicationJSON] = dataclasses.field(default=None)
    r"""OK"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    