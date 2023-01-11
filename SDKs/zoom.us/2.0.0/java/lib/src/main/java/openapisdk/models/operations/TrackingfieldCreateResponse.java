package openapisdk.models.operations;



public class TrackingfieldCreateResponse {
    public byte[] body;
    public TrackingfieldCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public TrackingfieldCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TrackingfieldCreateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TrackingfieldCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TrackingfieldCreateTrackingField1 trackingField;
    public TrackingfieldCreateResponse withTrackingField(TrackingfieldCreateTrackingField1 trackingField) {
        this.trackingField = trackingField;
        return this;
    }
}