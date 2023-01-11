package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupPrivacy
 * The group's privacy settings.
**/
public class GroupPrivacy {
    @JsonProperty("comment")
    public GroupPrivacyCommentEnum comment;
    public GroupPrivacy withComment(GroupPrivacyCommentEnum comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("invite")
    public GroupPrivacyInviteEnum invite;
    public GroupPrivacy withInvite(GroupPrivacyInviteEnum invite) {
        this.invite = invite;
        return this;
    }
    @JsonProperty("join")
    public GroupPrivacyJoinEnum join;
    public GroupPrivacy withJoin(GroupPrivacyJoinEnum join) {
        this.join = join;
        return this;
    }
    @JsonProperty("videos")
    public GroupPrivacyVideosEnum videos;
    public GroupPrivacy withVideos(GroupPrivacyVideosEnum videos) {
        this.videos = videos;
        return this;
    }
    @JsonProperty("view")
    public GroupPrivacyViewEnum view;
    public GroupPrivacy withView(GroupPrivacyViewEnum view) {
        this.view = view;
        return this;
    }
}