package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsUserMetadataConnections
 * The list of resource URIs related to the user.
**/
public class VideoVersionsUserMetadataConnections {
    @JsonProperty("albums")
    public VideoVersionsUserMetadataConnectionsAlbums albums;
    public VideoVersionsUserMetadataConnections withAlbums(VideoVersionsUserMetadataConnectionsAlbums albums) {
        this.albums = albums;
        return this;
    }
    @JsonProperty("appearances")
    public VideoVersionsUserMetadataConnectionsAppearances appearances;
    public VideoVersionsUserMetadataConnections withAppearances(VideoVersionsUserMetadataConnectionsAppearances appearances) {
        this.appearances = appearances;
        return this;
    }
    @JsonProperty("block")
    public VideoVersionsUserMetadataConnectionsBlock block;
    public VideoVersionsUserMetadataConnections withBlock(VideoVersionsUserMetadataConnectionsBlock block) {
        this.block = block;
        return this;
    }
    @JsonProperty("categories")
    public VideoVersionsUserMetadataConnectionsCategories categories;
    public VideoVersionsUserMetadataConnections withCategories(VideoVersionsUserMetadataConnectionsCategories categories) {
        this.categories = categories;
        return this;
    }
    @JsonProperty("channels")
    public VideoVersionsUserMetadataConnectionsChannels channels;
    public VideoVersionsUserMetadataConnections withChannels(VideoVersionsUserMetadataConnectionsChannels channels) {
        this.channels = channels;
        return this;
    }
    @JsonProperty("feed")
    public VideoVersionsUserMetadataConnectionsFeed feed;
    public VideoVersionsUserMetadataConnections withFeed(VideoVersionsUserMetadataConnectionsFeed feed) {
        this.feed = feed;
        return this;
    }
    @JsonProperty("folders")
    public VideoVersionsUserMetadataConnectionsFolders folders;
    public VideoVersionsUserMetadataConnections withFolders(VideoVersionsUserMetadataConnectionsFolders folders) {
        this.folders = folders;
        return this;
    }
    @JsonProperty("followers")
    public VideoVersionsUserMetadataConnectionsFollowers followers;
    public VideoVersionsUserMetadataConnections withFollowers(VideoVersionsUserMetadataConnectionsFollowers followers) {
        this.followers = followers;
        return this;
    }
    @JsonProperty("following")
    public VideoVersionsUserMetadataConnectionsFollowing following;
    public VideoVersionsUserMetadataConnections withFollowing(VideoVersionsUserMetadataConnectionsFollowing following) {
        this.following = following;
        return this;
    }
    @JsonProperty("groups")
    public VideoVersionsUserMetadataConnectionsGroups groups;
    public VideoVersionsUserMetadataConnections withGroups(VideoVersionsUserMetadataConnectionsGroups groups) {
        this.groups = groups;
        return this;
    }
    @JsonProperty("likes")
    public VideoVersionsUserMetadataConnectionsLikes likes;
    public VideoVersionsUserMetadataConnections withLikes(VideoVersionsUserMetadataConnectionsLikes likes) {
        this.likes = likes;
        return this;
    }
    @JsonProperty("moderated_channels")
    public VideoVersionsUserMetadataConnectionsModeratedChannels moderatedChannels;
    public VideoVersionsUserMetadataConnections withModeratedChannels(VideoVersionsUserMetadataConnectionsModeratedChannels moderatedChannels) {
        this.moderatedChannels = moderatedChannels;
        return this;
    }
    @JsonProperty("pictures")
    public VideoVersionsUserMetadataConnectionsPictures pictures;
    public VideoVersionsUserMetadataConnections withPictures(VideoVersionsUserMetadataConnectionsPictures pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonProperty("portfolios")
    public VideoVersionsUserMetadataConnectionsPortfolios portfolios;
    public VideoVersionsUserMetadataConnections withPortfolios(VideoVersionsUserMetadataConnectionsPortfolios portfolios) {
        this.portfolios = portfolios;
        return this;
    }
    @JsonProperty("recommended_channels")
    public VideoVersionsUserMetadataConnectionsRecommendedChannels recommendedChannels;
    public VideoVersionsUserMetadataConnections withRecommendedChannels(VideoVersionsUserMetadataConnectionsRecommendedChannels recommendedChannels) {
        this.recommendedChannels = recommendedChannels;
        return this;
    }
    @JsonProperty("recommended_users")
    public VideoVersionsUserMetadataConnectionsRecommendedUsers recommendedUsers;
    public VideoVersionsUserMetadataConnections withRecommendedUsers(VideoVersionsUserMetadataConnectionsRecommendedUsers recommendedUsers) {
        this.recommendedUsers = recommendedUsers;
        return this;
    }
    @JsonProperty("shared")
    public VideoVersionsUserMetadataConnectionsShared shared;
    public VideoVersionsUserMetadataConnections withShared(VideoVersionsUserMetadataConnectionsShared shared) {
        this.shared = shared;
        return this;
    }
    @JsonProperty("videos")
    public VideoVersionsUserMetadataConnectionsVideos videos;
    public VideoVersionsUserMetadataConnections withVideos(VideoVersionsUserMetadataConnectionsVideos videos) {
        this.videos = videos;
        return this;
    }
    @JsonProperty("watched_videos")
    public VideoVersionsUserMetadataConnectionsWatchedVideos watchedVideos;
    public VideoVersionsUserMetadataConnections withWatchedVideos(VideoVersionsUserMetadataConnectionsWatchedVideos watchedVideos) {
        this.watchedVideos = watchedVideos;
        return this;
    }
    @JsonProperty("watchlater")
    public VideoVersionsUserMetadataConnectionsWatchlater watchlater;
    public VideoVersionsUserMetadataConnections withWatchlater(VideoVersionsUserMetadataConnectionsWatchlater watchlater) {
        this.watchlater = watchlater;
        return this;
    }
}