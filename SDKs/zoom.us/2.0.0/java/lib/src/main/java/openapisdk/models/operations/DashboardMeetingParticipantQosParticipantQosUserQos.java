package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DashboardMeetingParticipantQosParticipantQosUserQos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("as_device_from_crc")
    public DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc asDeviceFromCrc;
    public DashboardMeetingParticipantQosParticipantQosUserQos withAsDeviceFromCrc(DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc asDeviceFromCrc) {
        this.asDeviceFromCrc = asDeviceFromCrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("as_device_to_crc")
    public DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc asDeviceToCrc;
    public DashboardMeetingParticipantQosParticipantQosUserQos withAsDeviceToCrc(DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc asDeviceToCrc) {
        this.asDeviceToCrc = asDeviceToCrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("as_input")
    public DashboardMeetingParticipantQosParticipantQosUserQosQosObject asInput;
    public DashboardMeetingParticipantQosParticipantQosUserQos withAsInput(DashboardMeetingParticipantQosParticipantQosUserQosQosObject asInput) {
        this.asInput = asInput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("as_output")
    public DashboardMeetingParticipantQosParticipantQosUserQosQosObject asOutput;
    public DashboardMeetingParticipantQosParticipantQosUserQos withAsOutput(DashboardMeetingParticipantQosParticipantQosUserQosQosObject asOutput) {
        this.asOutput = asOutput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_device_from_crc")
    public DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc audioDeviceFromCrc;
    public DashboardMeetingParticipantQosParticipantQosUserQos withAudioDeviceFromCrc(DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc audioDeviceFromCrc) {
        this.audioDeviceFromCrc = audioDeviceFromCrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_device_to_crc")
    public DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc audioDeviceToCrc;
    public DashboardMeetingParticipantQosParticipantQosUserQos withAudioDeviceToCrc(DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc audioDeviceToCrc) {
        this.audioDeviceToCrc = audioDeviceToCrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_input")
    public DashboardMeetingParticipantQosParticipantQosUserQosQosObject1 audioInput;
    public DashboardMeetingParticipantQosParticipantQosUserQos withAudioInput(DashboardMeetingParticipantQosParticipantQosUserQosQosObject1 audioInput) {
        this.audioInput = audioInput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_output")
    public DashboardMeetingParticipantQosParticipantQosUserQosQosObject1 audioOutput;
    public DashboardMeetingParticipantQosParticipantQosUserQos withAudioOutput(DashboardMeetingParticipantQosParticipantQosUserQosQosObject1 audioOutput) {
        this.audioOutput = audioOutput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpu_usage")
    public DashboardMeetingParticipantQosParticipantQosUserQosCpuUsage cpuUsage;
    public DashboardMeetingParticipantQosParticipantQosUserQos withCpuUsage(DashboardMeetingParticipantQosParticipantQosUserQosCpuUsage cpuUsage) {
        this.cpuUsage = cpuUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_time")
    public OffsetDateTime dateTime;
    public DashboardMeetingParticipantQosParticipantQosUserQos withDateTime(OffsetDateTime dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video_device_from_crc")
    public DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc videoDeviceFromCrc;
    public DashboardMeetingParticipantQosParticipantQosUserQos withVideoDeviceFromCrc(DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc videoDeviceFromCrc) {
        this.videoDeviceFromCrc = videoDeviceFromCrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video_device_to_crc")
    public DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc videoDeviceToCrc;
    public DashboardMeetingParticipantQosParticipantQosUserQos withVideoDeviceToCrc(DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc videoDeviceToCrc) {
        this.videoDeviceToCrc = videoDeviceToCrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video_input")
    public DashboardMeetingParticipantQosParticipantQosUserQosQosObject videoInput;
    public DashboardMeetingParticipantQosParticipantQosUserQos withVideoInput(DashboardMeetingParticipantQosParticipantQosUserQosQosObject videoInput) {
        this.videoInput = videoInput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video_output")
    public DashboardMeetingParticipantQosParticipantQosUserQosQosObject videoOutput;
    public DashboardMeetingParticipantQosParticipantQosUserQos withVideoOutput(DashboardMeetingParticipantQosParticipantQosUserQosQosObject videoOutput) {
        this.videoOutput = videoOutput;
        return this;
    }
}