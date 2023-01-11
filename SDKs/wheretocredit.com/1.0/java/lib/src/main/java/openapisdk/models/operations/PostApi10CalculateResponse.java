package openapisdk.models.operations;



public class PostApi10CalculateResponse {
    public openapisdk.models.shared.CalculateResult[] calculateResults;
    public PostApi10CalculateResponse withCalculateResults(openapisdk.models.shared.CalculateResult[] calculateResults) {
        this.calculateResults = calculateResults;
        return this;
    }
    public String contentType;
    public PostApi10CalculateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostApi10CalculateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}