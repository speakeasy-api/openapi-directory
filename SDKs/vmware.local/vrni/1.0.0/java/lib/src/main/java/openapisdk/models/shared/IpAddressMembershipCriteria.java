package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IpAddressMembershipCriteria
 * Ip Address membership definition
**/
public class IpAddressMembershipCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_addresses")
    public String[] ipAddresses;
    public IpAddressMembershipCriteria withIpAddresses(String[] ipAddresses) {
        this.ipAddresses = ipAddresses;
        return this;
    }
}