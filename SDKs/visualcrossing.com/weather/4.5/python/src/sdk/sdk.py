
__doc__ = """ SDK Documentation: https://www.visualcrossing.com/weather-api-documentation - https://www.visualcrossing.com/weather-api-documentation"""
import requests

from . import utils

from .historical_weather import HistoricalWeather
from .weather_forecast import WeatherForecast


SERVERS = [
	"https://weather.visualcrossing.com",
]


class SDK:
    r"""SDK Documentation: https://www.visualcrossing.com/weather-api-documentation - https://www.visualcrossing.com/weather-api-documentation"""
    historical_weather: HistoricalWeather
    weather_forecast: WeatherForecast

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
        
        self.historical_weather = HistoricalWeather(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.weather_forecast = WeatherForecast(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    