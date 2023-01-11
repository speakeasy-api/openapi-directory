package openapisdk.models.operations;



public class GetSelectedMultipleResponse {
    public String contentType;
    public GetSelectedMultipleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetSelectedMultipleResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PageError pageError;
    public GetSelectedMultipleResponse withPageError(openapisdk.models.shared.PageError pageError) {
        this.pageError = pageError;
        return this;
    }
    public String[] selectedAreas;
    public GetSelectedMultipleResponse withSelectedAreas(String[] selectedAreas) {
        this.selectedAreas = selectedAreas;
        return this;
    }
    public Long statusCode;
    public GetSelectedMultipleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}