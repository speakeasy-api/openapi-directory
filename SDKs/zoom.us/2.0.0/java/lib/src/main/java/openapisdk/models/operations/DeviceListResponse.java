package openapisdk.models.operations;



public class DeviceListResponse {
    public byte[] body;
    public DeviceListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeviceListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public DeviceListH323SipDeviceList h323SIPDeviceList;
    public DeviceListResponse withH323SipDeviceList(DeviceListH323SipDeviceList h323SIPDeviceList) {
        this.h323SIPDeviceList = h323SIPDeviceList;
        return this;
    }
    public Long statusCode;
    public DeviceListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}