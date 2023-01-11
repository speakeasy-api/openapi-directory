package openapisdk.models.operations;



public class GetDescribeResponse {
    public String contentType;
    public GetDescribeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String getDescribe200TextXMLString;
    public GetDescribeResponse withGetDescribe200TextXmlString(String getDescribe200TextXMLString) {
        this.getDescribe200TextXMLString = getDescribe200TextXMLString;
        return this;
    }
    public String getDescribe404TextXMLString;
    public GetDescribeResponse withGetDescribe404TextXmlString(String getDescribe404TextXMLString) {
        this.getDescribe404TextXMLString = getDescribe404TextXMLString;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDescribeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDescribeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}