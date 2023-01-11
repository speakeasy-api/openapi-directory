package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DashboardCrc200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crc_ports_usage")
    public DashboardCrc200ApplicationJsonCrcPortsUsage[] crcPortsUsage;
    public DashboardCrc200ApplicationJson withCrcPortsUsage(DashboardCrc200ApplicationJsonCrcPortsUsage[] crcPortsUsage) {
        this.crcPortsUsage = crcPortsUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public LocalDate from;
    public DashboardCrc200ApplicationJson withFrom(LocalDate from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public LocalDate to;
    public DashboardCrc200ApplicationJson withTo(LocalDate to) {
        this.to = to;
        return this;
    }
}