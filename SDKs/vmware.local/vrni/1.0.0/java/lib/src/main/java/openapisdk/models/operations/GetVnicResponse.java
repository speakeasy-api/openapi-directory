package openapisdk.models.operations;



public class GetVnicResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetVnicResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public openapisdk.models.shared.BaseVnic baseVnic;
    public GetVnicResponse withBaseVnic(openapisdk.models.shared.BaseVnic baseVnic) {
        this.baseVnic = baseVnic;
        return this;
    }
    public String contentType;
    public GetVnicResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVnicResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}