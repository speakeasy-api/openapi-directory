package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DashboardCrc200ApplicationJsonCrcPortsUsage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crc_ports_hour_usage")
    public DashboardCrc200ApplicationJsonCrcPortsUsageCrcPortsHourUsage[] crcPortsHourUsage;
    public DashboardCrc200ApplicationJsonCrcPortsUsage withCrcPortsHourUsage(DashboardCrc200ApplicationJsonCrcPortsUsageCrcPortsHourUsage[] crcPortsHourUsage) {
        this.crcPortsHourUsage = crcPortsHourUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_time")
    public OffsetDateTime dateTime;
    public DashboardCrc200ApplicationJsonCrcPortsUsage withDateTime(OffsetDateTime dateTime) {
        this.dateTime = dateTime;
        return this;
    }
}