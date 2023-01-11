package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * DeviceCreateTheH323SipDeviceObject
 * The H.323/SIP device object.
**/
public class DeviceCreateTheH323SipDeviceObject {
    @JsonProperty("encryption")
@SpeakeasyMetadata("multipartForm:name=encryption")
    public DeviceCreateTheH323SipDeviceObjectEncryptionEnum encryption;
    public DeviceCreateTheH323SipDeviceObject withEncryption(DeviceCreateTheH323SipDeviceObjectEncryptionEnum encryption) {
        this.encryption = encryption;
        return this;
    }
    @JsonProperty("ip")
@SpeakeasyMetadata("multipartForm:name=ip")
    public String ip;
    public DeviceCreateTheH323SipDeviceObject withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonProperty("name")
@SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public DeviceCreateTheH323SipDeviceObject withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("protocol")
@SpeakeasyMetadata("multipartForm:name=protocol")
    public DeviceCreateTheH323SipDeviceObjectProtocolEnum protocol;
    public DeviceCreateTheH323SipDeviceObject withProtocol(DeviceCreateTheH323SipDeviceObjectProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
}