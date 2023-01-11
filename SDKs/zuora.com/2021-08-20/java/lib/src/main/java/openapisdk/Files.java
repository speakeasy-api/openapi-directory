package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;

public class Files {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Files(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getFiles - Retrieve a file
     *
     * Retrieve files such as export results, invoices, and accounting period reports.
     * 
     * The response content type depends on the type of file that you retrieve.
     * For example, if you retrieve an invoice PDF, the value of the `Content-Type`
     * header in the response is `application/pdf;charset=UTF-8`.
     * 
     * Other content types include:
     * 
     * - `text/csv` for CSV files
     * - `application/msword` for Microsoft Word files
     * - `application/vnd.ms-excel` and `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
     *   for Microsoft Excel files (*.xls* and *.xlsx* respectively)
     * - `application/zip` and `application/x-gzip` for ZIP and Gzip files respectively
     * - `text/html` for HTML files
     * - `text/plain` for text files
     * 
     * The response always contains character encoding information in the `Content-Type` header.
     * For example, `Content-Type: application/zip;charset=UTF-8`.
     * 
     * **Note:** The maximum file size is 2,047 MB. If you have a data request that exceeds this limit, Zuora returns the following 403 response: `<security:max-object-size>2047MB</security:max-object-size>`. Submit a request at <a href="http://support.zuora.com/" target="_blank">Zuora Global Support</a> to determine if large file optimization is an option for you.
     * 
    **/
    public openapisdk.models.operations.GetFilesResponse getFiles(openapisdk.models.operations.GetFilesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/files/{file-id}", request.pathParams);
        
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

        openapisdk.models.operations.GetFilesResponse res = new openapisdk.models.operations.GetFilesResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
        }

        return res;
    }
	
}