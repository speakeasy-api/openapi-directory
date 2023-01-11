package openapisdk.models.operations;



public class AddCiscoSwitchResponse {
    public openapisdk.models.shared.ApiError apiError;
    public AddCiscoSwitchResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public openapisdk.models.shared.CiscoSwitchDataSource ciscoSwitchDataSource;
    public AddCiscoSwitchResponse withCiscoSwitchDataSource(openapisdk.models.shared.CiscoSwitchDataSource ciscoSwitchDataSource) {
        this.ciscoSwitchDataSource = ciscoSwitchDataSource;
        return this;
    }
    public String contentType;
    public AddCiscoSwitchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddCiscoSwitchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}