package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("as_device_from_crc")
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc asDeviceFromCrc;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos withAsDeviceFromCrc(DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc asDeviceFromCrc) {
        this.asDeviceFromCrc = asDeviceFromCrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("as_device_to_crc")
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc asDeviceToCrc;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos withAsDeviceToCrc(DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc asDeviceToCrc) {
        this.asDeviceToCrc = asDeviceToCrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("as_input")
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject asInput;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos withAsInput(DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject asInput) {
        this.asInput = asInput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("as_output")
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject asOutput;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos withAsOutput(DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject asOutput) {
        this.asOutput = asOutput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_device_from_crc")
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc audioDeviceFromCrc;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos withAudioDeviceFromCrc(DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc audioDeviceFromCrc) {
        this.audioDeviceFromCrc = audioDeviceFromCrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_device_to_crc")
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc audioDeviceToCrc;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos withAudioDeviceToCrc(DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc audioDeviceToCrc) {
        this.audioDeviceToCrc = audioDeviceToCrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_input")
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 audioInput;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos withAudioInput(DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 audioInput) {
        this.audioInput = audioInput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_output")
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 audioOutput;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos withAudioOutput(DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 audioOutput) {
        this.audioOutput = audioOutput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpu_usage")
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage cpuUsage;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos withCpuUsage(DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage cpuUsage) {
        this.cpuUsage = cpuUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_time")
    public OffsetDateTime dateTime;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos withDateTime(OffsetDateTime dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video_device_from_crc")
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc videoDeviceFromCrc;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos withVideoDeviceFromCrc(DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc videoDeviceFromCrc) {
        this.videoDeviceFromCrc = videoDeviceFromCrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video_device_to_crc")
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc videoDeviceToCrc;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos withVideoDeviceToCrc(DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc videoDeviceToCrc) {
        this.videoDeviceToCrc = videoDeviceToCrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video_input")
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject videoInput;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos withVideoInput(DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject videoInput) {
        this.videoInput = videoInput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video_output")
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject videoOutput;
    public DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos withVideoOutput(DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject videoOutput) {
        this.videoOutput = videoOutput;
        return this;
    }
}