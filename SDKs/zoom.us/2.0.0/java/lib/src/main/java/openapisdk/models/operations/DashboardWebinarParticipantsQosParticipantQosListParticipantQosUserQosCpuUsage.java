package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("system_max_cpu_usage")
    public String systemMaxCpuUsage;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage withSystemMaxCpuUsage(String systemMaxCpuUsage) {
        this.systemMaxCpuUsage = systemMaxCpuUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zoom_avg_cpu_usage")
    public String zoomAvgCpuUsage;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage withZoomAvgCpuUsage(String zoomAvgCpuUsage) {
        this.zoomAvgCpuUsage = zoomAvgCpuUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zoom_max_cpu_usage")
    public String zoomMaxCpuUsage;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage withZoomMaxCpuUsage(String zoomMaxCpuUsage) {
        this.zoomMaxCpuUsage = zoomMaxCpuUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zoom_min_cpu_usage")
    public String zoomMinCpuUsage;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage withZoomMinCpuUsage(String zoomMinCpuUsage) {
        this.zoomMinCpuUsage = zoomMinCpuUsage;
        return this;
    }
}