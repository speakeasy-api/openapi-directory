package openapisdk.models.operations;



public class GetSelectedResponse {
    public String contentType;
    public GetSelectedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetSelectedResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PageError pageError;
    public GetSelectedResponse withPageError(openapisdk.models.shared.PageError pageError) {
        this.pageError = pageError;
        return this;
    }
    public Long statusCode;
    public GetSelectedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getSelected200TextHTMLString;
    public GetSelectedResponse withGetSelected200TextHtmlString(String getSelected200TextHTMLString) {
        this.getSelected200TextHTMLString = getSelected200TextHTMLString;
        return this;
    }
}