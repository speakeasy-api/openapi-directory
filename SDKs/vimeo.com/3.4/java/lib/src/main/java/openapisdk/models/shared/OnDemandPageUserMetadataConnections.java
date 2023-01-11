package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageUserMetadataConnections
 * The list of resource URIs related to the user.
**/
public class OnDemandPageUserMetadataConnections {
    @JsonProperty("albums")
    public OnDemandPageUserMetadataConnectionsAlbums albums;
    public OnDemandPageUserMetadataConnections withAlbums(OnDemandPageUserMetadataConnectionsAlbums albums) {
        this.albums = albums;
        return this;
    }
    @JsonProperty("appearances")
    public OnDemandPageUserMetadataConnectionsAppearances appearances;
    public OnDemandPageUserMetadataConnections withAppearances(OnDemandPageUserMetadataConnectionsAppearances appearances) {
        this.appearances = appearances;
        return this;
    }
    @JsonProperty("block")
    public OnDemandPageUserMetadataConnectionsBlock block;
    public OnDemandPageUserMetadataConnections withBlock(OnDemandPageUserMetadataConnectionsBlock block) {
        this.block = block;
        return this;
    }
    @JsonProperty("categories")
    public OnDemandPageUserMetadataConnectionsCategories categories;
    public OnDemandPageUserMetadataConnections withCategories(OnDemandPageUserMetadataConnectionsCategories categories) {
        this.categories = categories;
        return this;
    }
    @JsonProperty("channels")
    public OnDemandPageUserMetadataConnectionsChannels channels;
    public OnDemandPageUserMetadataConnections withChannels(OnDemandPageUserMetadataConnectionsChannels channels) {
        this.channels = channels;
        return this;
    }
    @JsonProperty("feed")
    public OnDemandPageUserMetadataConnectionsFeed feed;
    public OnDemandPageUserMetadataConnections withFeed(OnDemandPageUserMetadataConnectionsFeed feed) {
        this.feed = feed;
        return this;
    }
    @JsonProperty("folders")
    public OnDemandPageUserMetadataConnectionsFolders folders;
    public OnDemandPageUserMetadataConnections withFolders(OnDemandPageUserMetadataConnectionsFolders folders) {
        this.folders = folders;
        return this;
    }
    @JsonProperty("followers")
    public OnDemandPageUserMetadataConnectionsFollowers followers;
    public OnDemandPageUserMetadataConnections withFollowers(OnDemandPageUserMetadataConnectionsFollowers followers) {
        this.followers = followers;
        return this;
    }
    @JsonProperty("following")
    public OnDemandPageUserMetadataConnectionsFollowing following;
    public OnDemandPageUserMetadataConnections withFollowing(OnDemandPageUserMetadataConnectionsFollowing following) {
        this.following = following;
        return this;
    }
    @JsonProperty("groups")
    public OnDemandPageUserMetadataConnectionsGroups groups;
    public OnDemandPageUserMetadataConnections withGroups(OnDemandPageUserMetadataConnectionsGroups groups) {
        this.groups = groups;
        return this;
    }
    @JsonProperty("likes")
    public OnDemandPageUserMetadataConnectionsLikes likes;
    public OnDemandPageUserMetadataConnections withLikes(OnDemandPageUserMetadataConnectionsLikes likes) {
        this.likes = likes;
        return this;
    }
    @JsonProperty("moderated_channels")
    public OnDemandPageUserMetadataConnectionsModeratedChannels moderatedChannels;
    public OnDemandPageUserMetadataConnections withModeratedChannels(OnDemandPageUserMetadataConnectionsModeratedChannels moderatedChannels) {
        this.moderatedChannels = moderatedChannels;
        return this;
    }
    @JsonProperty("pictures")
    public OnDemandPageUserMetadataConnectionsPictures pictures;
    public OnDemandPageUserMetadataConnections withPictures(OnDemandPageUserMetadataConnectionsPictures pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonProperty("portfolios")
    public OnDemandPageUserMetadataConnectionsPortfolios portfolios;
    public OnDemandPageUserMetadataConnections withPortfolios(OnDemandPageUserMetadataConnectionsPortfolios portfolios) {
        this.portfolios = portfolios;
        return this;
    }
    @JsonProperty("recommended_channels")
    public OnDemandPageUserMetadataConnectionsRecommendedChannels recommendedChannels;
    public OnDemandPageUserMetadataConnections withRecommendedChannels(OnDemandPageUserMetadataConnectionsRecommendedChannels recommendedChannels) {
        this.recommendedChannels = recommendedChannels;
        return this;
    }
    @JsonProperty("recommended_users")
    public OnDemandPageUserMetadataConnectionsRecommendedUsers recommendedUsers;
    public OnDemandPageUserMetadataConnections withRecommendedUsers(OnDemandPageUserMetadataConnectionsRecommendedUsers recommendedUsers) {
        this.recommendedUsers = recommendedUsers;
        return this;
    }
    @JsonProperty("shared")
    public OnDemandPageUserMetadataConnectionsShared shared;
    public OnDemandPageUserMetadataConnections withShared(OnDemandPageUserMetadataConnectionsShared shared) {
        this.shared = shared;
        return this;
    }
    @JsonProperty("videos")
    public OnDemandPageUserMetadataConnectionsVideos videos;
    public OnDemandPageUserMetadataConnections withVideos(OnDemandPageUserMetadataConnectionsVideos videos) {
        this.videos = videos;
        return this;
    }
    @JsonProperty("watched_videos")
    public OnDemandPageUserMetadataConnectionsWatchedVideos watchedVideos;
    public OnDemandPageUserMetadataConnections withWatchedVideos(OnDemandPageUserMetadataConnectionsWatchedVideos watchedVideos) {
        this.watchedVideos = watchedVideos;
        return this;
    }
    @JsonProperty("watchlater")
    public OnDemandPageUserMetadataConnectionsWatchlater watchlater;
    public OnDemandPageUserMetadataConnections withWatchlater(OnDemandPageUserMetadataConnectionsWatchlater watchlater) {
        this.watchlater = watchlater;
        return this;
    }
}