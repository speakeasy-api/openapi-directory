package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SnmpConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config_snmp_2c")
    public Snmp2cConfig configSnmp2c;
    public SnmpConfig withConfigSnmp2c(Snmp2cConfig configSnmp2c) {
        this.configSnmp2c = configSnmp2c;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config_snmp_3")
    public Snmp3Config configSnmp3;
    public SnmpConfig withConfigSnmp3(Snmp3Config configSnmp3) {
        this.configSnmp3 = configSnmp3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snmp_enabled")
    public Boolean snmpEnabled;
    public SnmpConfig withSnmpEnabled(Boolean snmpEnabled) {
        this.snmpEnabled = snmpEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snmp_version")
    public SnmpConfigSnmpVersionEnum snmpVersion;
    public SnmpConfig withSnmpVersion(SnmpConfigSnmpVersionEnum snmpVersion) {
        this.snmpVersion = snmpVersion;
        return this;
    }
}