package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import org.apache.http.NameValuePair;

public class WeatherForecast {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public WeatherForecast(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getVisualCrossingWebServicesRestServicesWeatherdataForecast - Weather Forecast API
     *
     * Provides access to weather forecast information. The forecast is available for up to 15 days at the hourly, 12 hour and daily summary level.
    **/
    public openapisdk.models.operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse getVisualCrossingWebServicesRestServicesWeatherdataForecast(openapisdk.models.operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/VisualCrossingWebServices/rest/services/weatherdata/forecast");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse res = new openapisdk.models.operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
}