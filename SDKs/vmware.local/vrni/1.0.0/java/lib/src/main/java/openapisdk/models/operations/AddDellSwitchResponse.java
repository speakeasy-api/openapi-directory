package openapisdk.models.operations;



public class AddDellSwitchResponse {
    public openapisdk.models.shared.ApiError apiError;
    public AddDellSwitchResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public AddDellSwitchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DellSwitchDataSource dellSwitchDataSource;
    public AddDellSwitchResponse withDellSwitchDataSource(openapisdk.models.shared.DellSwitchDataSource dellSwitchDataSource) {
        this.dellSwitchDataSource = dellSwitchDataSource;
        return this;
    }
    public Long statusCode;
    public AddDellSwitchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}