package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IpV4Address {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_address")
    public String ipAddress;
    public IpV4Address withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("netmask")
    public String netmask;
    public IpV4Address withNetmask(String netmask) {
        this.netmask = netmask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network_address")
    public String networkAddress;
    public IpV4Address withNetworkAddress(String networkAddress) {
        this.networkAddress = networkAddress;
        return this;
    }
}