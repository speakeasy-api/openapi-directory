package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("as_device_from_crc")
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc asDeviceFromCrc;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos withAsDeviceFromCrc(DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc asDeviceFromCrc) {
        this.asDeviceFromCrc = asDeviceFromCrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("as_device_to_crc")
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc asDeviceToCrc;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos withAsDeviceToCrc(DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc asDeviceToCrc) {
        this.asDeviceToCrc = asDeviceToCrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("as_input")
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject asInput;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos withAsInput(DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject asInput) {
        this.asInput = asInput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("as_output")
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject asOutput;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos withAsOutput(DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject asOutput) {
        this.asOutput = asOutput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_device_from_crc")
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc audioDeviceFromCrc;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos withAudioDeviceFromCrc(DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc audioDeviceFromCrc) {
        this.audioDeviceFromCrc = audioDeviceFromCrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_device_to_crc")
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc audioDeviceToCrc;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos withAudioDeviceToCrc(DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc audioDeviceToCrc) {
        this.audioDeviceToCrc = audioDeviceToCrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_input")
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 audioInput;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos withAudioInput(DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 audioInput) {
        this.audioInput = audioInput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_output")
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 audioOutput;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos withAudioOutput(DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 audioOutput) {
        this.audioOutput = audioOutput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpu_usage")
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage cpuUsage;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos withCpuUsage(DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage cpuUsage) {
        this.cpuUsage = cpuUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_time")
    public OffsetDateTime dateTime;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos withDateTime(OffsetDateTime dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video_device_from_crc")
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc videoDeviceFromCrc;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos withVideoDeviceFromCrc(DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc videoDeviceFromCrc) {
        this.videoDeviceFromCrc = videoDeviceFromCrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video_device_to_crc")
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc videoDeviceToCrc;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos withVideoDeviceToCrc(DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc videoDeviceToCrc) {
        this.videoDeviceToCrc = videoDeviceToCrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video_input")
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject videoInput;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos withVideoInput(DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject videoInput) {
        this.videoInput = videoInput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video_output")
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject videoOutput;
    public DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos withVideoOutput(DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject videoOutput) {
        this.videoOutput = videoOutput;
        return this;
    }
}