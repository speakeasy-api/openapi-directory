package openapisdk.models.operations;



public class GetNetworthResponse {
    public String contentType;
    public GetNetworthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DerivedNetworthResponse derivedNetworthResponse;
    public GetNetworthResponse withDerivedNetworthResponse(openapisdk.models.shared.DerivedNetworthResponse derivedNetworthResponse) {
        this.derivedNetworthResponse = derivedNetworthResponse;
        return this;
    }
    public Long statusCode;
    public GetNetworthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public GetNetworthResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}