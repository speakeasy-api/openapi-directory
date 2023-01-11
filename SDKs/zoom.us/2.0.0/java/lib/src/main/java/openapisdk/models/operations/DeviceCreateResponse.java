package openapisdk.models.operations;



public class DeviceCreateResponse {
    public byte[] body;
    public DeviceCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeviceCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeviceCreateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeviceCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeviceCreateTheH323SipDeviceObject1 theH323SIPDeviceObject;
    public DeviceCreateResponse withTheH323SipDeviceObject(DeviceCreateTheH323SipDeviceObject1 theH323SIPDeviceObject) {
        this.theH323SIPDeviceObject = theH323SIPDeviceObject;
        return this;
    }
}