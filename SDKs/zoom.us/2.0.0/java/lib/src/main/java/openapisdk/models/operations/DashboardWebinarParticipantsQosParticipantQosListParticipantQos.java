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
 * DashboardWebinarParticipantsQosParticipantQosListParticipantQos
 * Participant QOS.
**/
public class DashboardWebinarParticipantsQosParticipantQosListParticipantQos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device")
    public String device;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQos withDevice(String device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQos withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("harddisk_id")
    public String harddiskId;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQos withHarddiskId(String harddiskId) {
        this.harddiskId = harddiskId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_address")
    public String ipAddress;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQos withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("join_time")
    public OffsetDateTime joinTime;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQos withJoinTime(OffsetDateTime joinTime) {
        this.joinTime = joinTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("leave_time")
    public OffsetDateTime leaveTime;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQos withLeaveTime(OffsetDateTime leaveTime) {
        this.leaveTime = leaveTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQos withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mac_addr")
    public String macAddr;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQos withMacAddr(String macAddr) {
        this.macAddr = macAddr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pc_name")
    public String pcName;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQos withPcName(String pcName) {
        this.pcName = pcName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public String userId;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQos withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_name")
    public String userName;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQos withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_qos")
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos[] userQos;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQos withUserQos(DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos[] userQos) {
        this.userQos = userQos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQos withVersion(String version) {
        this.version = version;
        return this;
    }
}