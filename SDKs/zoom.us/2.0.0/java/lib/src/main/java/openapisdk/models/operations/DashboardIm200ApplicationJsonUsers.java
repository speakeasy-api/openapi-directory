package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DashboardIm200ApplicationJsonUsers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calls_receive")
    public Long callsReceive;
    public DashboardIm200ApplicationJsonUsers withCallsReceive(Long callsReceive) {
        this.callsReceive = callsReceive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calls_send")
    public Long callsSend;
    public DashboardIm200ApplicationJsonUsers withCallsSend(Long callsSend) {
        this.callsSend = callsSend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public DashboardIm200ApplicationJsonUsers withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emoji_receive")
    public Long emojiReceive;
    public DashboardIm200ApplicationJsonUsers withEmojiReceive(Long emojiReceive) {
        this.emojiReceive = emojiReceive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emoji_send")
    public Long emojiSend;
    public DashboardIm200ApplicationJsonUsers withEmojiSend(Long emojiSend) {
        this.emojiSend = emojiSend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files_receive")
    public Long filesReceive;
    public DashboardIm200ApplicationJsonUsers withFilesReceive(Long filesReceive) {
        this.filesReceive = filesReceive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files_send")
    public Long filesSend;
    public DashboardIm200ApplicationJsonUsers withFilesSend(Long filesSend) {
        this.filesSend = filesSend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_receive")
    public Long groupReceive;
    public DashboardIm200ApplicationJsonUsers withGroupReceive(Long groupReceive) {
        this.groupReceive = groupReceive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_send")
    public Long groupSend;
    public DashboardIm200ApplicationJsonUsers withGroupSend(Long groupSend) {
        this.groupSend = groupSend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images_receive")
    public Long imagesReceive;
    public DashboardIm200ApplicationJsonUsers withImagesReceive(Long imagesReceive) {
        this.imagesReceive = imagesReceive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images_send")
    public Long imagesSend;
    public DashboardIm200ApplicationJsonUsers withImagesSend(Long imagesSend) {
        this.imagesSend = imagesSend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_receive")
    public Long totalReceive;
    public DashboardIm200ApplicationJsonUsers withTotalReceive(Long totalReceive) {
        this.totalReceive = totalReceive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_send")
    public Long totalSend;
    public DashboardIm200ApplicationJsonUsers withTotalSend(Long totalSend) {
        this.totalSend = totalSend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public String userId;
    public DashboardIm200ApplicationJsonUsers withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_name")
    public String userName;
    public DashboardIm200ApplicationJsonUsers withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videos_receive")
    public Long videosReceive;
    public DashboardIm200ApplicationJsonUsers withVideosReceive(Long videosReceive) {
        this.videosReceive = videosReceive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videos_send")
    public Long videosSend;
    public DashboardIm200ApplicationJsonUsers withVideosSend(Long videosSend) {
        this.videosSend = videosSend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_receive")
    public Long voiceReceive;
    public DashboardIm200ApplicationJsonUsers withVoiceReceive(Long voiceReceive) {
        this.voiceReceive = voiceReceive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_send")
    public Long voiceSend;
    public DashboardIm200ApplicationJsonUsers withVoiceSend(Long voiceSend) {
        this.voiceSend = voiceSend;
        return this;
    }
}