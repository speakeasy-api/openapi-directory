package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceCreateTheH323SipDeviceObject1
 * The H.323/SIP device object.
**/
public class DeviceCreateTheH323SipDeviceObject1 {
    @JsonProperty("encryption")
    public DeviceCreateTheH323SipDeviceObjectEncryptionEnum encryption;
    public DeviceCreateTheH323SipDeviceObject1 withEncryption(DeviceCreateTheH323SipDeviceObjectEncryptionEnum encryption) {
        this.encryption = encryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DeviceCreateTheH323SipDeviceObject1 withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public DeviceCreateTheH323SipDeviceObject1 withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public DeviceCreateTheH323SipDeviceObject1 withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("protocol")
    public DeviceCreateTheH323SipDeviceObjectProtocolEnum protocol;
    public DeviceCreateTheH323SipDeviceObject1 withProtocol(DeviceCreateTheH323SipDeviceObjectProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
}