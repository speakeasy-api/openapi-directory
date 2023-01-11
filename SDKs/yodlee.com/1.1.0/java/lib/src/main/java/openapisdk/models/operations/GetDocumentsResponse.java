package openapisdk.models.operations;



public class GetDocumentsResponse {
    public String contentType;
    public GetDocumentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DocumentResponse documentResponse;
    public GetDocumentsResponse withDocumentResponse(openapisdk.models.shared.DocumentResponse documentResponse) {
        this.documentResponse = documentResponse;
        return this;
    }
    public Long statusCode;
    public GetDocumentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public GetDocumentsResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}