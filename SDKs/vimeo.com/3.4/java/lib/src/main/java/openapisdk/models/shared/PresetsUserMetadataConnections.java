package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsUserMetadataConnections
 * The list of resource URIs related to the user.
**/
public class PresetsUserMetadataConnections {
    @JsonProperty("albums")
    public PresetsUserMetadataConnectionsAlbums albums;
    public PresetsUserMetadataConnections withAlbums(PresetsUserMetadataConnectionsAlbums albums) {
        this.albums = albums;
        return this;
    }
    @JsonProperty("appearances")
    public PresetsUserMetadataConnectionsAppearances appearances;
    public PresetsUserMetadataConnections withAppearances(PresetsUserMetadataConnectionsAppearances appearances) {
        this.appearances = appearances;
        return this;
    }
    @JsonProperty("block")
    public PresetsUserMetadataConnectionsBlock block;
    public PresetsUserMetadataConnections withBlock(PresetsUserMetadataConnectionsBlock block) {
        this.block = block;
        return this;
    }
    @JsonProperty("categories")
    public PresetsUserMetadataConnectionsCategories categories;
    public PresetsUserMetadataConnections withCategories(PresetsUserMetadataConnectionsCategories categories) {
        this.categories = categories;
        return this;
    }
    @JsonProperty("channels")
    public PresetsUserMetadataConnectionsChannels channels;
    public PresetsUserMetadataConnections withChannels(PresetsUserMetadataConnectionsChannels channels) {
        this.channels = channels;
        return this;
    }
    @JsonProperty("feed")
    public PresetsUserMetadataConnectionsFeed feed;
    public PresetsUserMetadataConnections withFeed(PresetsUserMetadataConnectionsFeed feed) {
        this.feed = feed;
        return this;
    }
    @JsonProperty("folders")
    public PresetsUserMetadataConnectionsFolders folders;
    public PresetsUserMetadataConnections withFolders(PresetsUserMetadataConnectionsFolders folders) {
        this.folders = folders;
        return this;
    }
    @JsonProperty("followers")
    public PresetsUserMetadataConnectionsFollowers followers;
    public PresetsUserMetadataConnections withFollowers(PresetsUserMetadataConnectionsFollowers followers) {
        this.followers = followers;
        return this;
    }
    @JsonProperty("following")
    public PresetsUserMetadataConnectionsFollowing following;
    public PresetsUserMetadataConnections withFollowing(PresetsUserMetadataConnectionsFollowing following) {
        this.following = following;
        return this;
    }
    @JsonProperty("groups")
    public PresetsUserMetadataConnectionsGroups groups;
    public PresetsUserMetadataConnections withGroups(PresetsUserMetadataConnectionsGroups groups) {
        this.groups = groups;
        return this;
    }
    @JsonProperty("likes")
    public PresetsUserMetadataConnectionsLikes likes;
    public PresetsUserMetadataConnections withLikes(PresetsUserMetadataConnectionsLikes likes) {
        this.likes = likes;
        return this;
    }
    @JsonProperty("moderated_channels")
    public PresetsUserMetadataConnectionsModeratedChannels moderatedChannels;
    public PresetsUserMetadataConnections withModeratedChannels(PresetsUserMetadataConnectionsModeratedChannels moderatedChannels) {
        this.moderatedChannels = moderatedChannels;
        return this;
    }
    @JsonProperty("pictures")
    public PresetsUserMetadataConnectionsPictures pictures;
    public PresetsUserMetadataConnections withPictures(PresetsUserMetadataConnectionsPictures pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonProperty("portfolios")
    public PresetsUserMetadataConnectionsPortfolios portfolios;
    public PresetsUserMetadataConnections withPortfolios(PresetsUserMetadataConnectionsPortfolios portfolios) {
        this.portfolios = portfolios;
        return this;
    }
    @JsonProperty("recommended_channels")
    public PresetsUserMetadataConnectionsRecommendedChannels recommendedChannels;
    public PresetsUserMetadataConnections withRecommendedChannels(PresetsUserMetadataConnectionsRecommendedChannels recommendedChannels) {
        this.recommendedChannels = recommendedChannels;
        return this;
    }
    @JsonProperty("recommended_users")
    public PresetsUserMetadataConnectionsRecommendedUsers recommendedUsers;
    public PresetsUserMetadataConnections withRecommendedUsers(PresetsUserMetadataConnectionsRecommendedUsers recommendedUsers) {
        this.recommendedUsers = recommendedUsers;
        return this;
    }
    @JsonProperty("shared")
    public PresetsUserMetadataConnectionsShared shared;
    public PresetsUserMetadataConnections withShared(PresetsUserMetadataConnectionsShared shared) {
        this.shared = shared;
        return this;
    }
    @JsonProperty("videos")
    public PresetsUserMetadataConnectionsVideos videos;
    public PresetsUserMetadataConnections withVideos(PresetsUserMetadataConnectionsVideos videos) {
        this.videos = videos;
        return this;
    }
    @JsonProperty("watched_videos")
    public PresetsUserMetadataConnectionsWatchedVideos watchedVideos;
    public PresetsUserMetadataConnections withWatchedVideos(PresetsUserMetadataConnectionsWatchedVideos watchedVideos) {
        this.watchedVideos = watchedVideos;
        return this;
    }
    @JsonProperty("watchlater")
    public PresetsUserMetadataConnectionsWatchlater watchlater;
    public PresetsUserMetadataConnections withWatchlater(PresetsUserMetadataConnectionsWatchlater watchlater) {
        this.watchlater = watchlater;
        return this;
    }
}