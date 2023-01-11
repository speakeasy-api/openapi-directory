package openapisdk.models.operations;



public class GetProblemEventResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetProblemEventResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public GetProblemEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProblemEvent problemEvent;
    public GetProblemEventResponse withProblemEvent(openapisdk.models.shared.ProblemEvent problemEvent) {
        this.problemEvent = problemEvent;
        return this;
    }
    public Long statusCode;
    public GetProblemEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}