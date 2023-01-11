package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeviceUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeviceUpdateTheH323SipDeviceObject theH323SIPDeviceObject;
    public DeviceUpdateRequests withTheH323SipDeviceObject(DeviceUpdateTheH323SipDeviceObject theH323SIPDeviceObject) {
        this.theH323SIPDeviceObject = theH323SIPDeviceObject;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public DeviceUpdateTheH323SipDeviceObject theH323SIPDeviceObject1;
    public DeviceUpdateRequests withTheH323SipDeviceObject1(DeviceUpdateTheH323SipDeviceObject theH323SIPDeviceObject1) {
        this.theH323SIPDeviceObject1 = theH323SIPDeviceObject1;
        return this;
    }
}