package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Activity31 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public Category category;
    public Activity31 withCategory(Category category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public Channel channel;
    public Activity31 withChannel(Channel channel) {
        this.channel = channel;
        return this;
    }
    @JsonProperty("clip")
    public Video clip;
    public Activity31 withClip(Video clip) {
        this.clip = clip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public Group group;
    public Activity31 withGroup(Group group) {
        this.group = group;
        return this;
    }
    @JsonProperty("metadata")
    public Activity31Metadata metadata;
    public Activity31 withMetadata(Activity31Metadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public Tag tag;
    public Activity31 withTag(Tag tag) {
        this.tag = tag;
        return this;
    }
    @JsonProperty("time")
    public String time;
    public Activity31 withTime(String time) {
        this.time = time;
        return this;
    }
    @JsonProperty("type")
    public Activity31TypeEnum type;
    public Activity31 withType(Activity31TypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public User user;
    public Activity31 withUser(User user) {
        this.user = user;
        return this;
    }
}