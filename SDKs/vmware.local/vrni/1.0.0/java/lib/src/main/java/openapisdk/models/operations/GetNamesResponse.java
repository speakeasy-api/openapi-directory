package openapisdk.models.operations;



public class GetNamesResponse {
    public String contentType;
    public GetNamesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NamesResponse namesResponse;
    public GetNamesResponse withNamesResponse(openapisdk.models.shared.NamesResponse namesResponse) {
        this.namesResponse = namesResponse;
        return this;
    }
    public Long statusCode;
    public GetNamesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}