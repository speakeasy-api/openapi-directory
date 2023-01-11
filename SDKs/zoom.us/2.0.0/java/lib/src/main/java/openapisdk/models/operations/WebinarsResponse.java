package openapisdk.models.operations;



public class WebinarsResponse {
    public byte[] body;
    public WebinarsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public WebinarsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public WebinarsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public WebinarsUserList userList;
    public WebinarsResponse withUserList(WebinarsUserList userList) {
        this.userList = userList;
        return this;
    }
}