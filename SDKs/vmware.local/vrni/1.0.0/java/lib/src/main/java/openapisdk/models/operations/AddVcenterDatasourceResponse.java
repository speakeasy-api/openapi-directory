package openapisdk.models.operations;



public class AddVcenterDatasourceResponse {
    public openapisdk.models.shared.ApiError apiError;
    public AddVcenterDatasourceResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public AddVcenterDatasourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddVcenterDatasourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VCenterDataSource vCenterDataSource;
    public AddVcenterDatasourceResponse withVCenterDataSource(openapisdk.models.shared.VCenterDataSource vCenterDataSource) {
        this.vCenterDataSource = vCenterDataSource;
        return this;
    }
}