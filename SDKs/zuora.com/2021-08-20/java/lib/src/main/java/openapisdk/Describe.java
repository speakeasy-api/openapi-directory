package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;

public class Describe {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Describe(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getDescribe - Describe an object
     *
     * Provides a reference listing of each object that is available in your Zuora tenant.
     * 
     * The information returned by this call is useful if you are using [CRUD: Create Export](https://www.zuora.com/developer/api-reference/#operation/Object_POSTExport) or the [AQuA API](https://knowledgecenter.zuora.com/DC_Developers/T_Aggregate_Query_API) to create a data source export. See [Export ZOQL](https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL) for more information.
     * 
     * ## Response
     * The response contains an XML document that lists the fields of the specified object. Each of the object's fields is represented by a `<field>` element in the XML document.
     *     
     * Each `<field>` element contains the following elements:
     * 
     * | Element      | Description                                                                                                                                                                                                                                                                                  |
     * |--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
     * | `<name>`     | API name of the field.                                                                                                                                                                                                                                                                       |
     * | `<label>`    | Name of the field in the Zuora user interface.                                                                                                                                                                                                                                               |
     * | `<type>`     | Data type of the field. The possible data types are: `boolean`, `date`, `datetime`, `decimal`, `integer`, `picklist`, `text`, `timestamp`, and `ZOQL`. If the data type is `picklist`, the `<field>` element contains an `<options>` element that lists the possible values of the field.    |
     * | `<contexts>` | Specifies the availability of the field. If the `<contexts>` element lists the `export` context, the field is available for use in data source exports.                                                                                                                                                |
     * 
     * The `<field>` element contains other elements that provide legacy information about the field. This information is not directly related to the REST API.
     * 
     * Response sample:
     * ```xml
     * <?xml version="1.0" encoding="UTF-8"?>
     * <object>
     *   <name>ProductRatePlanCharge</name>
     *   <label>Product Rate Plan Charge</label>
     *   <fields>
     *     ...
     *     <field>
     *       <name>TaxMode</name>
     *       <label>Tax Mode</label>
     *       <type>picklist</type>
     *       <options>
     *         <option>TaxExclusive</option>
     *         <option>TaxInclusive</option>
     *       </options>
     *       <contexts>
     *         <context>export</context>
     *       </contexts>
     *       ...
     *     </field>
     *     ...
     *   </fields>
     * </object>
     * ```
     * 
     * It is strongly recommended that your integration checks `<contexts>` elements in the response. If your integration does not check `<contexts>` elements, your integration may process fields that are not available for use in data source exports. See [Changes to the Describe API](https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL/Changes_to_the_Describe_API) for more information.
     * 
    **/
    public openapisdk.models.operations.GetDescribeResponse getDescribe(openapisdk.models.operations.GetDescribeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/describe/{object}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDescribeResponse res = new openapisdk.models.operations.GetDescribeResponse() {{
            getDescribe200TextXMLString = null;
            getDescribe404TextXMLString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml; charset=utf-8")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.getDescribe200TextXMLString = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml; charset=utf-8")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.getDescribe404TextXMLString = out;
            }
        }

        return res;
    }
	
}