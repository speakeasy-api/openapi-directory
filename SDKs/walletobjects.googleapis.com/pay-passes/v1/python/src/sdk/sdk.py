
__doc__ = """ SDK Documentation: https://developers.google.com/pay/passes"""
import requests

from . import utils

from .eventticketclass import Eventticketclass
from .eventticketobject import Eventticketobject
from .flightclass import Flightclass
from .flightobject import Flightobject
from .giftcardclass import Giftcardclass
from .giftcardobject import Giftcardobject
from .issuer import Issuer
from .jwt import Jwt
from .loyaltyclass import Loyaltyclass
from .loyaltyobject import Loyaltyobject
from .offerclass import Offerclass
from .offerobject import Offerobject
from .permissions import Permissions
from .smarttap import Smarttap
from .transitclass import Transitclass
from .transitobject import Transitobject
from .valuablesclasses import Valuablesclasses
from .walletobjects import Walletobjects


SERVERS = [
	"https://walletobjects.googleapis.com/",
]


class SDK:
    r"""SDK Documentation: https://developers.google.com/pay/passes"""
    eventticketclass: Eventticketclass
    eventticketobject: Eventticketobject
    flightclass: Flightclass
    flightobject: Flightobject
    giftcardclass: Giftcardclass
    giftcardobject: Giftcardobject
    issuer: Issuer
    jwt: Jwt
    loyaltyclass: Loyaltyclass
    loyaltyobject: Loyaltyobject
    offerclass: Offerclass
    offerobject: Offerobject
    permissions: Permissions
    smarttap: Smarttap
    transitclass: Transitclass
    transitobject: Transitobject
    valuablesclasses: Valuablesclasses
    walletobjects: Walletobjects

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        self._init_sdks()


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        self._init_sdks()
    

    def config_client(self, client: requests.Session):
        self._client = client
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.eventticketclass = Eventticketclass(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.eventticketobject = Eventticketobject(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.flightclass = Flightclass(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.flightobject = Flightobject(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.giftcardclass = Giftcardclass(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.giftcardobject = Giftcardobject(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.issuer = Issuer(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.jwt = Jwt(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.loyaltyclass = Loyaltyclass(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.loyaltyobject = Loyaltyobject(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.offerclass = Offerclass(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.offerobject = Offerobject(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.permissions = Permissions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.smarttap = Smarttap(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.transitclass = Transitclass(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.transitobject = Transitobject(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.valuablesclasses = Valuablesclasses(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.walletobjects = Walletobjects(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    