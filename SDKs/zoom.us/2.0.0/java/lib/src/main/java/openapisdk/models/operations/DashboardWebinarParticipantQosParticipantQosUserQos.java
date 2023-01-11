package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DashboardWebinarParticipantQosParticipantQosUserQos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("as_device_from_crc")
    public DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc asDeviceFromCrc;
    public DashboardWebinarParticipantQosParticipantQosUserQos withAsDeviceFromCrc(DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc asDeviceFromCrc) {
        this.asDeviceFromCrc = asDeviceFromCrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("as_device_to_crc")
    public DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceToCrc asDeviceToCrc;
    public DashboardWebinarParticipantQosParticipantQosUserQos withAsDeviceToCrc(DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceToCrc asDeviceToCrc) {
        this.asDeviceToCrc = asDeviceToCrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("as_input")
    public DashboardWebinarParticipantQosParticipantQosUserQosQosObject asInput;
    public DashboardWebinarParticipantQosParticipantQosUserQos withAsInput(DashboardWebinarParticipantQosParticipantQosUserQosQosObject asInput) {
        this.asInput = asInput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("as_output")
    public DashboardWebinarParticipantQosParticipantQosUserQosQosObject asOutput;
    public DashboardWebinarParticipantQosParticipantQosUserQos withAsOutput(DashboardWebinarParticipantQosParticipantQosUserQosQosObject asOutput) {
        this.asOutput = asOutput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_device_from_crc")
    public DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceFromCrc audioDeviceFromCrc;
    public DashboardWebinarParticipantQosParticipantQosUserQos withAudioDeviceFromCrc(DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceFromCrc audioDeviceFromCrc) {
        this.audioDeviceFromCrc = audioDeviceFromCrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_device_to_crc")
    public DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceToCrc audioDeviceToCrc;
    public DashboardWebinarParticipantQosParticipantQosUserQos withAudioDeviceToCrc(DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceToCrc audioDeviceToCrc) {
        this.audioDeviceToCrc = audioDeviceToCrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_input")
    public DashboardWebinarParticipantQosParticipantQosUserQosQosObject1 audioInput;
    public DashboardWebinarParticipantQosParticipantQosUserQos withAudioInput(DashboardWebinarParticipantQosParticipantQosUserQosQosObject1 audioInput) {
        this.audioInput = audioInput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio_output")
    public DashboardWebinarParticipantQosParticipantQosUserQosQosObject1 audioOutput;
    public DashboardWebinarParticipantQosParticipantQosUserQos withAudioOutput(DashboardWebinarParticipantQosParticipantQosUserQosQosObject1 audioOutput) {
        this.audioOutput = audioOutput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpu_usage")
    public DashboardWebinarParticipantQosParticipantQosUserQosCpuUsage cpuUsage;
    public DashboardWebinarParticipantQosParticipantQosUserQos withCpuUsage(DashboardWebinarParticipantQosParticipantQosUserQosCpuUsage cpuUsage) {
        this.cpuUsage = cpuUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_time")
    public OffsetDateTime dateTime;
    public DashboardWebinarParticipantQosParticipantQosUserQos withDateTime(OffsetDateTime dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video_device_from_crc")
    public DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc videoDeviceFromCrc;
    public DashboardWebinarParticipantQosParticipantQosUserQos withVideoDeviceFromCrc(DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc videoDeviceFromCrc) {
        this.videoDeviceFromCrc = videoDeviceFromCrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video_device_to_crc")
    public DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceToCrc videoDeviceToCrc;
    public DashboardWebinarParticipantQosParticipantQosUserQos withVideoDeviceToCrc(DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceToCrc videoDeviceToCrc) {
        this.videoDeviceToCrc = videoDeviceToCrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video_input")
    public DashboardWebinarParticipantQosParticipantQosUserQosQosObject videoInput;
    public DashboardWebinarParticipantQosParticipantQosUserQos withVideoInput(DashboardWebinarParticipantQosParticipantQosUserQosQosObject videoInput) {
        this.videoInput = videoInput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video_output")
    public DashboardWebinarParticipantQosParticipantQosUserQosQosObject videoOutput;
    public DashboardWebinarParticipantQosParticipantQosUserQos withVideoOutput(DashboardWebinarParticipantQosParticipantQosUserQosQosObject videoOutput) {
        this.videoOutput = videoOutput;
        return this;
    }
}