package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * DeviceUpdateTheH323SipDeviceObject
 * The H.323/SIP device object.
**/
public class DeviceUpdateTheH323SipDeviceObject {
    @JsonProperty("encryption")
@SpeakeasyMetadata("multipartForm:name=encryption")
    public DeviceUpdateTheH323SipDeviceObjectEncryptionEnum encryption;
    public DeviceUpdateTheH323SipDeviceObject withEncryption(DeviceUpdateTheH323SipDeviceObjectEncryptionEnum encryption) {
        this.encryption = encryption;
        return this;
    }
    @JsonProperty("ip")
@SpeakeasyMetadata("multipartForm:name=ip")
    public String ip;
    public DeviceUpdateTheH323SipDeviceObject withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonProperty("name")
@SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public DeviceUpdateTheH323SipDeviceObject withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("protocol")
@SpeakeasyMetadata("multipartForm:name=protocol")
    public DeviceUpdateTheH323SipDeviceObjectProtocolEnum protocol;
    public DeviceUpdateTheH323SipDeviceObject withProtocol(DeviceUpdateTheH323SipDeviceObjectProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
}