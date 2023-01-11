package openapisdk.models.operations;



public class AddPhoneDeviceRequest {
    public AddPhoneDeviceRequests request;
    public AddPhoneDeviceRequest withRequest(AddPhoneDeviceRequests request) {
        this.request = request;
        return this;
    }
    public AddPhoneDeviceSecurity security;
    public AddPhoneDeviceRequest withSecurity(AddPhoneDeviceSecurity security) {
        this.security = security;
        return this;
    }
}