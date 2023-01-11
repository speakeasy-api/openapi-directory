package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserMetadataConnections
 * The list of resource URIs related to the user.
**/
public class UserMetadataConnections {
    @JsonProperty("albums")
    public UserMetadataConnectionsAlbums albums;
    public UserMetadataConnections withAlbums(UserMetadataConnectionsAlbums albums) {
        this.albums = albums;
        return this;
    }
    @JsonProperty("appearances")
    public UserMetadataConnectionsAppearances appearances;
    public UserMetadataConnections withAppearances(UserMetadataConnectionsAppearances appearances) {
        this.appearances = appearances;
        return this;
    }
    @JsonProperty("block")
    public UserMetadataConnectionsBlock block;
    public UserMetadataConnections withBlock(UserMetadataConnectionsBlock block) {
        this.block = block;
        return this;
    }
    @JsonProperty("categories")
    public UserMetadataConnectionsCategories categories;
    public UserMetadataConnections withCategories(UserMetadataConnectionsCategories categories) {
        this.categories = categories;
        return this;
    }
    @JsonProperty("channels")
    public UserMetadataConnectionsChannels channels;
    public UserMetadataConnections withChannels(UserMetadataConnectionsChannels channels) {
        this.channels = channels;
        return this;
    }
    @JsonProperty("feed")
    public UserMetadataConnectionsFeed feed;
    public UserMetadataConnections withFeed(UserMetadataConnectionsFeed feed) {
        this.feed = feed;
        return this;
    }
    @JsonProperty("folders")
    public UserMetadataConnectionsFolders folders;
    public UserMetadataConnections withFolders(UserMetadataConnectionsFolders folders) {
        this.folders = folders;
        return this;
    }
    @JsonProperty("followers")
    public UserMetadataConnectionsFollowers followers;
    public UserMetadataConnections withFollowers(UserMetadataConnectionsFollowers followers) {
        this.followers = followers;
        return this;
    }
    @JsonProperty("following")
    public UserMetadataConnectionsFollowing following;
    public UserMetadataConnections withFollowing(UserMetadataConnectionsFollowing following) {
        this.following = following;
        return this;
    }
    @JsonProperty("groups")
    public UserMetadataConnectionsGroups groups;
    public UserMetadataConnections withGroups(UserMetadataConnectionsGroups groups) {
        this.groups = groups;
        return this;
    }
    @JsonProperty("likes")
    public UserMetadataConnectionsLikes likes;
    public UserMetadataConnections withLikes(UserMetadataConnectionsLikes likes) {
        this.likes = likes;
        return this;
    }
    @JsonProperty("moderated_channels")
    public UserMetadataConnectionsModeratedChannels moderatedChannels;
    public UserMetadataConnections withModeratedChannels(UserMetadataConnectionsModeratedChannels moderatedChannels) {
        this.moderatedChannels = moderatedChannels;
        return this;
    }
    @JsonProperty("pictures")
    public UserMetadataConnectionsPictures pictures;
    public UserMetadataConnections withPictures(UserMetadataConnectionsPictures pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonProperty("portfolios")
    public UserMetadataConnectionsPortfolios portfolios;
    public UserMetadataConnections withPortfolios(UserMetadataConnectionsPortfolios portfolios) {
        this.portfolios = portfolios;
        return this;
    }
    @JsonProperty("recommended_channels")
    public UserMetadataConnectionsRecommendedChannels recommendedChannels;
    public UserMetadataConnections withRecommendedChannels(UserMetadataConnectionsRecommendedChannels recommendedChannels) {
        this.recommendedChannels = recommendedChannels;
        return this;
    }
    @JsonProperty("recommended_users")
    public UserMetadataConnectionsRecommendedUsers recommendedUsers;
    public UserMetadataConnections withRecommendedUsers(UserMetadataConnectionsRecommendedUsers recommendedUsers) {
        this.recommendedUsers = recommendedUsers;
        return this;
    }
    @JsonProperty("shared")
    public UserMetadataConnectionsShared shared;
    public UserMetadataConnections withShared(UserMetadataConnectionsShared shared) {
        this.shared = shared;
        return this;
    }
    @JsonProperty("videos")
    public UserMetadataConnectionsVideos videos;
    public UserMetadataConnections withVideos(UserMetadataConnectionsVideos videos) {
        this.videos = videos;
        return this;
    }
    @JsonProperty("watched_videos")
    public UserMetadataConnectionsWatchedVideos watchedVideos;
    public UserMetadataConnections withWatchedVideos(UserMetadataConnectionsWatchedVideos watchedVideos) {
        this.watchedVideos = watchedVideos;
        return this;
    }
    @JsonProperty("watchlater")
    public UserMetadataConnectionsWatchlater watchlater;
    public UserMetadataConnections withWatchlater(UserMetadataConnectionsWatchlater watchlater) {
        this.watchlater = watchlater;
        return this;
    }
}