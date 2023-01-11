package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoUserMetadataConnections
 * The list of resource URIs related to the user.
**/
public class OnDemandPageVideoUserMetadataConnections {
    @JsonProperty("albums")
    public OnDemandPageVideoUserMetadataConnectionsAlbums albums;
    public OnDemandPageVideoUserMetadataConnections withAlbums(OnDemandPageVideoUserMetadataConnectionsAlbums albums) {
        this.albums = albums;
        return this;
    }
    @JsonProperty("appearances")
    public OnDemandPageVideoUserMetadataConnectionsAppearances appearances;
    public OnDemandPageVideoUserMetadataConnections withAppearances(OnDemandPageVideoUserMetadataConnectionsAppearances appearances) {
        this.appearances = appearances;
        return this;
    }
    @JsonProperty("block")
    public OnDemandPageVideoUserMetadataConnectionsBlock block;
    public OnDemandPageVideoUserMetadataConnections withBlock(OnDemandPageVideoUserMetadataConnectionsBlock block) {
        this.block = block;
        return this;
    }
    @JsonProperty("categories")
    public OnDemandPageVideoUserMetadataConnectionsCategories categories;
    public OnDemandPageVideoUserMetadataConnections withCategories(OnDemandPageVideoUserMetadataConnectionsCategories categories) {
        this.categories = categories;
        return this;
    }
    @JsonProperty("channels")
    public OnDemandPageVideoUserMetadataConnectionsChannels channels;
    public OnDemandPageVideoUserMetadataConnections withChannels(OnDemandPageVideoUserMetadataConnectionsChannels channels) {
        this.channels = channels;
        return this;
    }
    @JsonProperty("feed")
    public OnDemandPageVideoUserMetadataConnectionsFeed feed;
    public OnDemandPageVideoUserMetadataConnections withFeed(OnDemandPageVideoUserMetadataConnectionsFeed feed) {
        this.feed = feed;
        return this;
    }
    @JsonProperty("folders")
    public OnDemandPageVideoUserMetadataConnectionsFolders folders;
    public OnDemandPageVideoUserMetadataConnections withFolders(OnDemandPageVideoUserMetadataConnectionsFolders folders) {
        this.folders = folders;
        return this;
    }
    @JsonProperty("followers")
    public OnDemandPageVideoUserMetadataConnectionsFollowers followers;
    public OnDemandPageVideoUserMetadataConnections withFollowers(OnDemandPageVideoUserMetadataConnectionsFollowers followers) {
        this.followers = followers;
        return this;
    }
    @JsonProperty("following")
    public OnDemandPageVideoUserMetadataConnectionsFollowing following;
    public OnDemandPageVideoUserMetadataConnections withFollowing(OnDemandPageVideoUserMetadataConnectionsFollowing following) {
        this.following = following;
        return this;
    }
    @JsonProperty("groups")
    public OnDemandPageVideoUserMetadataConnectionsGroups groups;
    public OnDemandPageVideoUserMetadataConnections withGroups(OnDemandPageVideoUserMetadataConnectionsGroups groups) {
        this.groups = groups;
        return this;
    }
    @JsonProperty("likes")
    public OnDemandPageVideoUserMetadataConnectionsLikes likes;
    public OnDemandPageVideoUserMetadataConnections withLikes(OnDemandPageVideoUserMetadataConnectionsLikes likes) {
        this.likes = likes;
        return this;
    }
    @JsonProperty("moderated_channels")
    public OnDemandPageVideoUserMetadataConnectionsModeratedChannels moderatedChannels;
    public OnDemandPageVideoUserMetadataConnections withModeratedChannels(OnDemandPageVideoUserMetadataConnectionsModeratedChannels moderatedChannels) {
        this.moderatedChannels = moderatedChannels;
        return this;
    }
    @JsonProperty("pictures")
    public OnDemandPageVideoUserMetadataConnectionsPictures pictures;
    public OnDemandPageVideoUserMetadataConnections withPictures(OnDemandPageVideoUserMetadataConnectionsPictures pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonProperty("portfolios")
    public OnDemandPageVideoUserMetadataConnectionsPortfolios portfolios;
    public OnDemandPageVideoUserMetadataConnections withPortfolios(OnDemandPageVideoUserMetadataConnectionsPortfolios portfolios) {
        this.portfolios = portfolios;
        return this;
    }
    @JsonProperty("recommended_channels")
    public OnDemandPageVideoUserMetadataConnectionsRecommendedChannels recommendedChannels;
    public OnDemandPageVideoUserMetadataConnections withRecommendedChannels(OnDemandPageVideoUserMetadataConnectionsRecommendedChannels recommendedChannels) {
        this.recommendedChannels = recommendedChannels;
        return this;
    }
    @JsonProperty("recommended_users")
    public OnDemandPageVideoUserMetadataConnectionsRecommendedUsers recommendedUsers;
    public OnDemandPageVideoUserMetadataConnections withRecommendedUsers(OnDemandPageVideoUserMetadataConnectionsRecommendedUsers recommendedUsers) {
        this.recommendedUsers = recommendedUsers;
        return this;
    }
    @JsonProperty("shared")
    public OnDemandPageVideoUserMetadataConnectionsShared shared;
    public OnDemandPageVideoUserMetadataConnections withShared(OnDemandPageVideoUserMetadataConnectionsShared shared) {
        this.shared = shared;
        return this;
    }
    @JsonProperty("videos")
    public OnDemandPageVideoUserMetadataConnectionsVideos videos;
    public OnDemandPageVideoUserMetadataConnections withVideos(OnDemandPageVideoUserMetadataConnectionsVideos videos) {
        this.videos = videos;
        return this;
    }
    @JsonProperty("watched_videos")
    public OnDemandPageVideoUserMetadataConnectionsWatchedVideos watchedVideos;
    public OnDemandPageVideoUserMetadataConnections withWatchedVideos(OnDemandPageVideoUserMetadataConnectionsWatchedVideos watchedVideos) {
        this.watchedVideos = watchedVideos;
        return this;
    }
    @JsonProperty("watchlater")
    public OnDemandPageVideoUserMetadataConnectionsWatchlater watchlater;
    public OnDemandPageVideoUserMetadataConnections withWatchlater(OnDemandPageVideoUserMetadataConnectionsWatchlater watchlater) {
        this.watchlater = watchlater;
        return this;
    }
}