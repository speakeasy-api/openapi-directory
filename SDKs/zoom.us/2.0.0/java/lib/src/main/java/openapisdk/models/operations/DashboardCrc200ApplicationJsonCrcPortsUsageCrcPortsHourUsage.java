package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DashboardCrc200ApplicationJsonCrcPortsUsageCrcPortsHourUsage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hour")
    public String hour;
    public DashboardCrc200ApplicationJsonCrcPortsUsageCrcPortsHourUsage withHour(String hour) {
        this.hour = hour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_usage")
    public Long maxUsage;
    public DashboardCrc200ApplicationJsonCrcPortsUsageCrcPortsHourUsage withMaxUsage(Long maxUsage) {
        this.maxUsage = maxUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_usage")
    public Long totalUsage;
    public DashboardCrc200ApplicationJsonCrcPortsUsageCrcPortsHourUsage withTotalUsage(Long totalUsage) {
        this.totalUsage = totalUsage;
        return this;
    }
}