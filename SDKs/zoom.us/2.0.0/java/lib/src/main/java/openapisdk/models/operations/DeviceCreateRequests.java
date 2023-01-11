package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeviceCreateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeviceCreateTheH323SipDeviceObject theH323SIPDeviceObject;
    public DeviceCreateRequests withTheH323SipDeviceObject(DeviceCreateTheH323SipDeviceObject theH323SIPDeviceObject) {
        this.theH323SIPDeviceObject = theH323SIPDeviceObject;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public DeviceCreateTheH323SipDeviceObject theH323SIPDeviceObject1;
    public DeviceCreateRequests withTheH323SipDeviceObject1(DeviceCreateTheH323SipDeviceObject theH323SIPDeviceObject1) {
        this.theH323SIPDeviceObject1 = theH323SIPDeviceObject1;
        return this;
    }
}