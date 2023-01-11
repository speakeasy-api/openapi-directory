package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceListH323SipDeviceListTheH323SipDeviceObject
 * The H.323/SIP device object.
**/
public class DeviceListH323SipDeviceListTheH323SipDeviceObject {
    @JsonProperty("encryption")
    public DeviceListH323SipDeviceListTheH323SipDeviceObjectEncryptionEnum encryption;
    public DeviceListH323SipDeviceListTheH323SipDeviceObject withEncryption(DeviceListH323SipDeviceListTheH323SipDeviceObjectEncryptionEnum encryption) {
        this.encryption = encryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DeviceListH323SipDeviceListTheH323SipDeviceObject withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public DeviceListH323SipDeviceListTheH323SipDeviceObject withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public DeviceListH323SipDeviceListTheH323SipDeviceObject withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("protocol")
    public DeviceListH323SipDeviceListTheH323SipDeviceObjectProtocolEnum protocol;
    public DeviceListH323SipDeviceListTheH323SipDeviceObject withProtocol(DeviceListH323SipDeviceListTheH323SipDeviceObjectProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
}