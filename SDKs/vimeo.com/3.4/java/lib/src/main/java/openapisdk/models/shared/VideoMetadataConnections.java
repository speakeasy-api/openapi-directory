package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoMetadataConnections
 * A list of resource URIs related to the video.
**/
public class VideoMetadataConnections {
    @JsonProperty("comments")
    public VideoMetadataConnectionsComments comments;
    public VideoMetadataConnections withComments(VideoMetadataConnectionsComments comments) {
        this.comments = comments;
        return this;
    }
    @JsonProperty("credits")
    public VideoMetadataConnectionsCredits credits;
    public VideoMetadataConnections withCredits(VideoMetadataConnectionsCredits credits) {
        this.credits = credits;
        return this;
    }
    @JsonProperty("likes")
    public VideoMetadataConnectionsLikes likes;
    public VideoMetadataConnections withLikes(VideoMetadataConnectionsLikes likes) {
        this.likes = likes;
        return this;
    }
    @JsonProperty("ondemand")
    public VideoMetadataConnectionsOndemand ondemand;
    public VideoMetadataConnections withOndemand(VideoMetadataConnectionsOndemand ondemand) {
        this.ondemand = ondemand;
        return this;
    }
    @JsonProperty("pictures")
    public VideoMetadataConnectionsPictures pictures;
    public VideoMetadataConnections withPictures(VideoMetadataConnectionsPictures pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonProperty("playback")
    public VideoMetadataConnectionsPlayback playback;
    public VideoMetadataConnections withPlayback(VideoMetadataConnectionsPlayback playback) {
        this.playback = playback;
        return this;
    }
    @JsonProperty("recommendations")
    public VideoMetadataConnectionsRecommendations recommendations;
    public VideoMetadataConnections withRecommendations(VideoMetadataConnectionsRecommendations recommendations) {
        this.recommendations = recommendations;
        return this;
    }
    @JsonProperty("related")
    public VideoMetadataConnectionsRelated related;
    public VideoMetadataConnections withRelated(VideoMetadataConnectionsRelated related) {
        this.related = related;
        return this;
    }
    @JsonProperty("season")
    public VideoMetadataConnectionsSeason season;
    public VideoMetadataConnections withSeason(VideoMetadataConnectionsSeason season) {
        this.season = season;
        return this;
    }
    @JsonProperty("texttracks")
    public VideoMetadataConnectionsTexttracks texttracks;
    public VideoMetadataConnections withTexttracks(VideoMetadataConnectionsTexttracks texttracks) {
        this.texttracks = texttracks;
        return this;
    }
    @JsonProperty("trailer")
    public VideoMetadataConnectionsTrailer trailer;
    public VideoMetadataConnections withTrailer(VideoMetadataConnectionsTrailer trailer) {
        this.trailer = trailer;
        return this;
    }
    @JsonProperty("users_with_access")
    public VideoMetadataConnectionsUsersWithAccess usersWithAccess;
    public VideoMetadataConnections withUsersWithAccess(VideoMetadataConnectionsUsersWithAccess usersWithAccess) {
        this.usersWithAccess = usersWithAccess;
        return this;
    }
    @JsonProperty("versions")
    public VideoMetadataConnectionsVersions versions;
    public VideoMetadataConnections withVersions(VideoMetadataConnectionsVersions versions) {
        this.versions = versions;
        return this;
    }
}