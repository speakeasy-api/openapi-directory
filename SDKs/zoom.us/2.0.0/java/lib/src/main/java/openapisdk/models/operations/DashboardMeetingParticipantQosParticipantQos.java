package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * DashboardMeetingParticipantQosParticipantQos
 * Participant QOS.
**/
public class DashboardMeetingParticipantQosParticipantQos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device")
    public String device;
    public DashboardMeetingParticipantQosParticipantQos withDevice(String device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public DashboardMeetingParticipantQosParticipantQos withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("harddisk_id")
    public String harddiskId;
    public DashboardMeetingParticipantQosParticipantQos withHarddiskId(String harddiskId) {
        this.harddiskId = harddiskId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_address")
    public String ipAddress;
    public DashboardMeetingParticipantQosParticipantQos withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("join_time")
    public OffsetDateTime joinTime;
    public DashboardMeetingParticipantQosParticipantQos withJoinTime(OffsetDateTime joinTime) {
        this.joinTime = joinTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("leave_time")
    public OffsetDateTime leaveTime;
    public DashboardMeetingParticipantQosParticipantQos withLeaveTime(OffsetDateTime leaveTime) {
        this.leaveTime = leaveTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public DashboardMeetingParticipantQosParticipantQos withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mac_addr")
    public String macAddr;
    public DashboardMeetingParticipantQosParticipantQos withMacAddr(String macAddr) {
        this.macAddr = macAddr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pc_name")
    public String pcName;
    public DashboardMeetingParticipantQosParticipantQos withPcName(String pcName) {
        this.pcName = pcName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public String userId;
    public DashboardMeetingParticipantQosParticipantQos withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_name")
    public String userName;
    public DashboardMeetingParticipantQosParticipantQos withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_qos")
    public DashboardMeetingParticipantQosParticipantQosUserQos[] userQos;
    public DashboardMeetingParticipantQosParticipantQos withUserQos(DashboardMeetingParticipantQosParticipantQosUserQos[] userQos) {
        this.userQos = userQos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public DashboardMeetingParticipantQosParticipantQos withVersion(String version) {
        this.version = version;
        return this;
    }
}