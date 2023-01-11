package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoUserMetadataConnections
 * The list of resource URIs related to the user.
**/
public class VideoUserMetadataConnections {
    @JsonProperty("albums")
    public VideoUserMetadataConnectionsAlbums albums;
    public VideoUserMetadataConnections withAlbums(VideoUserMetadataConnectionsAlbums albums) {
        this.albums = albums;
        return this;
    }
    @JsonProperty("appearances")
    public VideoUserMetadataConnectionsAppearances appearances;
    public VideoUserMetadataConnections withAppearances(VideoUserMetadataConnectionsAppearances appearances) {
        this.appearances = appearances;
        return this;
    }
    @JsonProperty("block")
    public VideoUserMetadataConnectionsBlock block;
    public VideoUserMetadataConnections withBlock(VideoUserMetadataConnectionsBlock block) {
        this.block = block;
        return this;
    }
    @JsonProperty("categories")
    public VideoUserMetadataConnectionsCategories categories;
    public VideoUserMetadataConnections withCategories(VideoUserMetadataConnectionsCategories categories) {
        this.categories = categories;
        return this;
    }
    @JsonProperty("channels")
    public VideoUserMetadataConnectionsChannels channels;
    public VideoUserMetadataConnections withChannels(VideoUserMetadataConnectionsChannels channels) {
        this.channels = channels;
        return this;
    }
    @JsonProperty("feed")
    public VideoUserMetadataConnectionsFeed feed;
    public VideoUserMetadataConnections withFeed(VideoUserMetadataConnectionsFeed feed) {
        this.feed = feed;
        return this;
    }
    @JsonProperty("folders")
    public VideoUserMetadataConnectionsFolders folders;
    public VideoUserMetadataConnections withFolders(VideoUserMetadataConnectionsFolders folders) {
        this.folders = folders;
        return this;
    }
    @JsonProperty("followers")
    public VideoUserMetadataConnectionsFollowers followers;
    public VideoUserMetadataConnections withFollowers(VideoUserMetadataConnectionsFollowers followers) {
        this.followers = followers;
        return this;
    }
    @JsonProperty("following")
    public VideoUserMetadataConnectionsFollowing following;
    public VideoUserMetadataConnections withFollowing(VideoUserMetadataConnectionsFollowing following) {
        this.following = following;
        return this;
    }
    @JsonProperty("groups")
    public VideoUserMetadataConnectionsGroups groups;
    public VideoUserMetadataConnections withGroups(VideoUserMetadataConnectionsGroups groups) {
        this.groups = groups;
        return this;
    }
    @JsonProperty("likes")
    public VideoUserMetadataConnectionsLikes likes;
    public VideoUserMetadataConnections withLikes(VideoUserMetadataConnectionsLikes likes) {
        this.likes = likes;
        return this;
    }
    @JsonProperty("moderated_channels")
    public VideoUserMetadataConnectionsModeratedChannels moderatedChannels;
    public VideoUserMetadataConnections withModeratedChannels(VideoUserMetadataConnectionsModeratedChannels moderatedChannels) {
        this.moderatedChannels = moderatedChannels;
        return this;
    }
    @JsonProperty("pictures")
    public VideoUserMetadataConnectionsPictures pictures;
    public VideoUserMetadataConnections withPictures(VideoUserMetadataConnectionsPictures pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonProperty("portfolios")
    public VideoUserMetadataConnectionsPortfolios portfolios;
    public VideoUserMetadataConnections withPortfolios(VideoUserMetadataConnectionsPortfolios portfolios) {
        this.portfolios = portfolios;
        return this;
    }
    @JsonProperty("recommended_channels")
    public VideoUserMetadataConnectionsRecommendedChannels recommendedChannels;
    public VideoUserMetadataConnections withRecommendedChannels(VideoUserMetadataConnectionsRecommendedChannels recommendedChannels) {
        this.recommendedChannels = recommendedChannels;
        return this;
    }
    @JsonProperty("recommended_users")
    public VideoUserMetadataConnectionsRecommendedUsers recommendedUsers;
    public VideoUserMetadataConnections withRecommendedUsers(VideoUserMetadataConnectionsRecommendedUsers recommendedUsers) {
        this.recommendedUsers = recommendedUsers;
        return this;
    }
    @JsonProperty("shared")
    public VideoUserMetadataConnectionsShared shared;
    public VideoUserMetadataConnections withShared(VideoUserMetadataConnectionsShared shared) {
        this.shared = shared;
        return this;
    }
    @JsonProperty("videos")
    public VideoUserMetadataConnectionsVideos videos;
    public VideoUserMetadataConnections withVideos(VideoUserMetadataConnectionsVideos videos) {
        this.videos = videos;
        return this;
    }
    @JsonProperty("watched_videos")
    public VideoUserMetadataConnectionsWatchedVideos watchedVideos;
    public VideoUserMetadataConnections withWatchedVideos(VideoUserMetadataConnectionsWatchedVideos watchedVideos) {
        this.watchedVideos = watchedVideos;
        return this;
    }
    @JsonProperty("watchlater")
    public VideoUserMetadataConnectionsWatchlater watchlater;
    public VideoUserMetadataConnections withWatchlater(VideoUserMetadataConnectionsWatchlater watchlater) {
        this.watchlater = watchlater;
        return this;
    }
}