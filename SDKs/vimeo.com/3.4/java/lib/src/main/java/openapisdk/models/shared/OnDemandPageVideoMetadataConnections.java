package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoMetadataConnections
 * A list of resource URIs related to the video.
**/
public class OnDemandPageVideoMetadataConnections {
    @JsonProperty("comments")
    public OnDemandPageVideoMetadataConnectionsComments comments;
    public OnDemandPageVideoMetadataConnections withComments(OnDemandPageVideoMetadataConnectionsComments comments) {
        this.comments = comments;
        return this;
    }
    @JsonProperty("credits")
    public OnDemandPageVideoMetadataConnectionsCredits credits;
    public OnDemandPageVideoMetadataConnections withCredits(OnDemandPageVideoMetadataConnectionsCredits credits) {
        this.credits = credits;
        return this;
    }
    @JsonProperty("likes")
    public OnDemandPageVideoMetadataConnectionsLikes likes;
    public OnDemandPageVideoMetadataConnections withLikes(OnDemandPageVideoMetadataConnectionsLikes likes) {
        this.likes = likes;
        return this;
    }
    @JsonProperty("ondemand")
    public OnDemandPageVideoMetadataConnectionsOndemand ondemand;
    public OnDemandPageVideoMetadataConnections withOndemand(OnDemandPageVideoMetadataConnectionsOndemand ondemand) {
        this.ondemand = ondemand;
        return this;
    }
    @JsonProperty("pictures")
    public OnDemandPageVideoMetadataConnectionsPictures pictures;
    public OnDemandPageVideoMetadataConnections withPictures(OnDemandPageVideoMetadataConnectionsPictures pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonProperty("playback")
    public OnDemandPageVideoMetadataConnectionsPlayback playback;
    public OnDemandPageVideoMetadataConnections withPlayback(OnDemandPageVideoMetadataConnectionsPlayback playback) {
        this.playback = playback;
        return this;
    }
    @JsonProperty("recommendations")
    public OnDemandPageVideoMetadataConnectionsRecommendations recommendations;
    public OnDemandPageVideoMetadataConnections withRecommendations(OnDemandPageVideoMetadataConnectionsRecommendations recommendations) {
        this.recommendations = recommendations;
        return this;
    }
    @JsonProperty("related")
    public OnDemandPageVideoMetadataConnectionsRelated related;
    public OnDemandPageVideoMetadataConnections withRelated(OnDemandPageVideoMetadataConnectionsRelated related) {
        this.related = related;
        return this;
    }
    @JsonProperty("season")
    public OnDemandPageVideoMetadataConnectionsSeason season;
    public OnDemandPageVideoMetadataConnections withSeason(OnDemandPageVideoMetadataConnectionsSeason season) {
        this.season = season;
        return this;
    }
    @JsonProperty("texttracks")
    public OnDemandPageVideoMetadataConnectionsTexttracks texttracks;
    public OnDemandPageVideoMetadataConnections withTexttracks(OnDemandPageVideoMetadataConnectionsTexttracks texttracks) {
        this.texttracks = texttracks;
        return this;
    }
    @JsonProperty("trailer")
    public OnDemandPageVideoMetadataConnectionsTrailer trailer;
    public OnDemandPageVideoMetadataConnections withTrailer(OnDemandPageVideoMetadataConnectionsTrailer trailer) {
        this.trailer = trailer;
        return this;
    }
    @JsonProperty("users_with_access")
    public OnDemandPageVideoMetadataConnectionsUsersWithAccess usersWithAccess;
    public OnDemandPageVideoMetadataConnections withUsersWithAccess(OnDemandPageVideoMetadataConnectionsUsersWithAccess usersWithAccess) {
        this.usersWithAccess = usersWithAccess;
        return this;
    }
    @JsonProperty("versions")
    public OnDemandPageVideoMetadataConnectionsVersions versions;
    public OnDemandPageVideoMetadataConnections withVersions(OnDemandPageVideoMetadataConnectionsVersions versions) {
        this.versions = versions;
        return this;
    }
}