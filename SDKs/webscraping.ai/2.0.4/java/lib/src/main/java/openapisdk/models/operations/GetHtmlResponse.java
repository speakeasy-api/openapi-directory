package openapisdk.models.operations;



public class GetHtmlResponse {
    public String contentType;
    public GetHtmlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetHtmlResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PageError pageError;
    public GetHtmlResponse withPageError(openapisdk.models.shared.PageError pageError) {
        this.pageError = pageError;
        return this;
    }
    public Long statusCode;
    public GetHtmlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getHTML200TextHTMLString;
    public GetHtmlResponse withGetHtml200TextHtmlString(String getHTML200TextHTMLString) {
        this.getHTML200TextHTMLString = getHTML200TextHTMLString;
        return this;
    }
}