# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            ActivityEntryApiGetListRequest req = new ActivityEntryApiGetListRequest() {{
                queryParams = new ActivityEntryApiGetListQueryParams() {{
                    before = "2006-05-01T09:38:06Z";
                    editEvent = "Updated";
                    entryFields = "Description";
                    entryType = "Venue";
                    fields = "ArchivedVersion";
                    getTotalCount = true;
                    lang = "Japanese";
                    maxResults = 8274930044578894929;
                    since = "2011-08-12T10:11:12Z";
                    sortRule = "CreateDateDescending";
                    userId = 8325060299420976708;
                }};
            }};

            ActivityEntryApiGetListResponse res = sdk.activityEntryApi.activityEntryApiGetList(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### ActivityEntryApi

* `activityEntryApiGetList` - Gets a list of recent activity entries.

### AlbumApi

* `albumApiDelete` - Deletes an album.
* `albumApiDeleteComment` - Deletes a comment.
* `albumApiDeleteReview`
* `albumApiGetComments` - Gets a list of comments for an album.
* `albumApiGetList` - Gets a page of albums.
* `albumApiGetNames` - Gets a list of album names. Ideal for autocomplete boxes.
* `albumApiGetNewAlbums` - Gets list of upcoming or recent albums, same as front page.
* `albumApiGetOne` - Gets an album by Id.
* `albumApiGetReviews`
* `albumApiGetTopAlbums` - Gets list of top rated albums, same as front page.
* `albumApiGetTracks` - Gets tracks for an album.
* `albumApiGetTracksFields`
* `albumApiGetUserCollections`

### ArtistApi

* `artistApiDelete` - Deletes an artist.
* `artistApiDeleteComment` - Deletes a comment.
* `artistApiGetComments` - Gets a list of comments for an artist.
* `artistApiGetList` - Find artists.
* `artistApiGetNames` - Gets a list of artist names. Ideal for autocomplete boxes.
* `artistApiGetOne` - Gets an artist by Id.

### CommentApi

* `commentApiDeleteComment` - Deletes a comment.
* `commentApiGetComments` - Gets a list of comments for an entry.

### DiscussionApi

* `discussionApiDeleteComment`
* `discussionApiDeleteTopic`
* `discussionApiGetFolders`
* `discussionApiGetTopic`
* `discussionApiGetTopics`
* `discussionApiGetTopicsForFolder`

### EntryApi

* `entryApiGetList` - Find entries.
* `entryApiGetNames` - Gets a list of entry names. Ideal for autocomplete boxes.

### EntryTypesApi

* `entryTypesApiGetMappedTag`

### PVApi

* `pvApiGetList` - Gets a list of PVs for songs.

### ReleaseEventApi

* `releaseEventApiDelete` - Deletes an event.
* `releaseEventApiGetAlbums` - Gets a list of albums for a specific event.
* `releaseEventApiGetList` - Gets a page of events.
* `releaseEventApiGetNames` - Find event names by a part of name.
            
            Matching is done anywhere from the name.
* `releaseEventApiGetOne`
* `releaseEventApiGetPublishedSongs` - Gets a list of songs for a specific event.
* `releaseEventApiPostReport` - Creates a new report.

### ReleaseEventSeriesApi

* `releaseEventSeriesApiDelete` - Deletes an event series.
* `releaseEventSeriesApiGetList` - Gets a page of event series.
* `releaseEventSeriesApiGetOne` - Gets single event series by ID.

### ResourcesApi

* `resourcesApiGetList` - Gets a number of resource sets for a specific culture.

### SongApi

* `songApiDelete` - Deletes a song.
* `songApiDeleteComment` - Deletes a comment.
* `songApiGetById` - Gets a song by Id.
* `songApiGetByPv` - Gets a song by PV.
* `songApiGetComments` - Gets a list of comments for a song.
* `songApiGetDerived` - Gets derived (alternate versions) of a song.
* `songApiGetHighlightedSongs` - Gets list of highlighted songs, same as front page.
* `songApiGetList` - Find songs.
* `songApiGetLyrics` - Gets lyrics by ID.
* `songApiGetNames` - Gets a list of song names. Ideal for autocomplete boxes.
* `songApiGetRatings` - Get ratings for a song.
* `songApiGetRelated` - Gets related songs.
* `songApiGetTopSongs` - Gets top rated songs.
* `songApiPostRating` - Add or update rating for a specific song, for the currently logged in user.

### SongListApi

* `songListApiDelete` - Deletes a song list.
* `songListApiDeleteComment` - Deletes a comment.
* `songListApiGetComments` - Gets a list of comments for a song list.
* `songListApiGetFeaturedListNames` - Gets a list of featuedd list names. Ideal for autocomplete boxes.
* `songListApiGetFeaturedLists` - Gets a list of featured song lists.
* `songListApiGetSongs` - Gets a list of songs in a song list.

### TagApi

* `tagApiDelete` - Deletes a tag.
* `tagApiDeleteComment` - Deletes a comment.
            Normal users can delete their own comments, moderators can delete all comments.
            Requires login.
* `tagApiGetById` - Gets a tag by ID.
* `tagApiGetByName` - DEPRECATED. Gets a tag by name.
* `tagApiGetCategoryNamesList` - Gets a list of tag category names.
* `tagApiGetChildTags` - Gets a list of child tags for a tag.
            Only direct children will be included.
* `tagApiGetComments` - Gets a list of comments for a tag.
            Note: pagination and sorting might be added later.
* `tagApiGetList` - Find tags.
* `tagApiGetNames` - Find tag names by a part of name.
            
            Matching is done anywhere from the name.
* `tagApiGetTopTags` - Gets the most common tags in a category.
* `tagApiPostNewTag` - Creates a new tag.
* `tagApiPostReport` - Creates a new report.

### UserApi

* `userApiDeleteFollowedTag`
* `userApiDeleteMessages` - Deletes a list of user messages.
* `userApiDeleteProfileComment` - Deletes a comment.
* `userApiGetAlbumCollection` - Gets a list of albums in a user's collection.
* `userApiGetAlbumForUser`
* `userApiGetArtistForUser`
* `userApiGetCurrent` - Gets information about the currently logged in user.
* `userApiGetEvents` - Gets a list of events a user has subscribed to.
* `userApiGetFollowedArtists` - Gets a list of artists followed by a user.
* `userApiGetList` - Gets a list of users.
* `userApiGetMessage` - Gets a user message.
* `userApiGetMessages` - Gets a list of messages.
* `userApiGetNames` - Gets a list of user names. Ideal for autocomplete boxes.
* `userApiGetOne` - Gets user by ID.
* `userApiGetProfileComments` - Gets a list of comments posted on user's profile.
* `userApiGetRatedSongs` - Gets a list of songs rated by a user.
* `userApiGetSongLists`
* `userApiGetSongRating` - Gets a specific user's rating for a song.
* `userApiGetSongRatingForCurrent` - Gets currently logged in user's rating for a song.
* `userApiPostAlbumStatus` - Add or update collection status, media type and rating for a specific album, for the currently logged in user.
* `userApiPostFollowedTag`
* `userApiPostRefreshEntryEdit` - Refresh entry edit status, indicating that the current user is still editing that entry.
* `userApiPostReport`
* `userApiPostSetting` - Updates user setting.
* `getApiUsersCurrentAlbumCollectionStatusesAlbumId`
* `getApiUsersCurrentFollowedArtistsArtistId`

### VenueApi

* `venueApiDelete` - Deletes a venue.
* `venueApiGetList` - Gets a page of event venue.
* `venueApiPostReport` - Creates a new report.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
