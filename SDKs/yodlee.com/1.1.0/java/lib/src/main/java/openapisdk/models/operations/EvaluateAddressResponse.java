package openapisdk.models.operations;



public class EvaluateAddressResponse {
    public String contentType;
    public EvaluateAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EvaluateAddressResponse evaluateAddressResponse;
    public EvaluateAddressResponse withEvaluateAddressResponse(openapisdk.models.shared.EvaluateAddressResponse evaluateAddressResponse) {
        this.evaluateAddressResponse = evaluateAddressResponse;
        return this;
    }
    public Long statusCode;
    public EvaluateAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public EvaluateAddressResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}