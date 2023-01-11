package openapisdk.models.operations;



public class GetCiscoSwitchResponse {
    public openapisdk.models.shared.CiscoSwitchDataSource ciscoSwitchDataSource;
    public GetCiscoSwitchResponse withCiscoSwitchDataSource(openapisdk.models.shared.CiscoSwitchDataSource ciscoSwitchDataSource) {
        this.ciscoSwitchDataSource = ciscoSwitchDataSource;
        return this;
    }
    public String contentType;
    public GetCiscoSwitchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCiscoSwitchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}