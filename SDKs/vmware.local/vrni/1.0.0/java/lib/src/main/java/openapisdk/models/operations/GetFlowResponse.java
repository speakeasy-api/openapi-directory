package openapisdk.models.operations;



public class GetFlowResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetFlowResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public GetFlowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Flow flow;
    public GetFlowResponse withFlow(openapisdk.models.shared.Flow flow) {
        this.flow = flow;
        return this;
    }
    public Long statusCode;
    public GetFlowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}