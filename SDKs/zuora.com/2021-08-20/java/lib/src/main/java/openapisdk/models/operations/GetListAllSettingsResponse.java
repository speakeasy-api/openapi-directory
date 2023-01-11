package openapisdk.models.operations;



public class GetListAllSettingsResponse {
    public byte[] body;
    public GetListAllSettingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetListAllSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetListAllSettingsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ListAllSettingsResponse listAllSettingsResponse;
    public GetListAllSettingsResponse withListAllSettingsResponse(openapisdk.models.shared.ListAllSettingsResponse listAllSettingsResponse) {
        this.listAllSettingsResponse = listAllSettingsResponse;
        return this;
    }
    public Long statusCode;
    public GetListAllSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}