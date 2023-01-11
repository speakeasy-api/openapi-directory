package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadAttempt {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clip")
    public Video clip;
    public UploadAttempt withClip(Video clip) {
        this.clip = clip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complete_uri")
    public String completeUri;
    public UploadAttempt withCompleteUri(String completeUri) {
        this.completeUri = completeUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form")
    public String form;
    public UploadAttempt withForm(String form) {
        this.form = form;
        return this;
    }
    @JsonProperty("ticket_id")
    public String ticketId;
    public UploadAttempt withTicketId(String ticketId) {
        this.ticketId = ticketId;
        return this;
    }
    @JsonProperty("upload_link")
    public String uploadLink;
    public UploadAttempt withUploadLink(String uploadLink) {
        this.uploadLink = uploadLink;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public UploadAttempt withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonProperty("user")
    public User user;
    public UploadAttempt withUser(User user) {
        this.user = user;
        return this;
    }
}