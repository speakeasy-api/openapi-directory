package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OnDemandPageMetadataConnectionsMetadataConnections {
    @JsonProperty("comments")
    public OnDemandPageMetadataConnectionsMetadataConnectionsComments comments;
    public OnDemandPageMetadataConnectionsMetadataConnections withComments(OnDemandPageMetadataConnectionsMetadataConnectionsComments comments) {
        this.comments = comments;
        return this;
    }
    @JsonProperty("genres")
    public OnDemandPageMetadataConnectionsMetadataConnectionsGenres genres;
    public OnDemandPageMetadataConnectionsMetadataConnections withGenres(OnDemandPageMetadataConnectionsMetadataConnectionsGenres genres) {
        this.genres = genres;
        return this;
    }
    @JsonProperty("likes")
    public OnDemandPageMetadataConnectionsMetadataConnectionsLikes likes;
    public OnDemandPageMetadataConnectionsMetadataConnections withLikes(OnDemandPageMetadataConnectionsMetadataConnectionsLikes likes) {
        this.likes = likes;
        return this;
    }
    @JsonProperty("pictures")
    public OnDemandPageMetadataConnectionsMetadataConnectionsPictures pictures;
    public OnDemandPageMetadataConnectionsMetadataConnections withPictures(OnDemandPageMetadataConnectionsMetadataConnectionsPictures pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonProperty("seasons")
    public OnDemandPageMetadataConnectionsMetadataConnectionsSeasons seasons;
    public OnDemandPageMetadataConnectionsMetadataConnections withSeasons(OnDemandPageMetadataConnectionsMetadataConnectionsSeasons seasons) {
        this.seasons = seasons;
        return this;
    }
    @JsonProperty("videos")
    public OnDemandPageMetadataConnectionsMetadataConnectionsVideos videos;
    public OnDemandPageMetadataConnectionsMetadataConnections withVideos(OnDemandPageMetadataConnectionsMetadataConnectionsVideos videos) {
        this.videos = videos;
        return this;
    }
}