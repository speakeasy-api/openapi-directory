package openapisdk.models.operations;



public class WebinarPanelistsResponse {
    public byte[] body;
    public WebinarPanelistsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public WebinarPanelistsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public WebinarPanelistsPanelistList panelistList;
    public WebinarPanelistsResponse withPanelistList(WebinarPanelistsPanelistList panelistList) {
        this.panelistList = panelistList;
        return this;
    }
    public Long statusCode;
    public WebinarPanelistsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}