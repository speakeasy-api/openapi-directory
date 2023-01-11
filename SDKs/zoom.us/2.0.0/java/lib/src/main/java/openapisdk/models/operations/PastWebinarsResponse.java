package openapisdk.models.operations;



public class PastWebinarsResponse {
    public byte[] body;
    public PastWebinarsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PastWebinarsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PastWebinarsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PastWebinarsWebinarInstances webinarInstances;
    public PastWebinarsResponse withWebinarInstances(PastWebinarsWebinarInstances webinarInstances) {
        this.webinarInstances = webinarInstances;
        return this;
    }
}