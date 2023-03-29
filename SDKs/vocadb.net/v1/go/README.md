# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vocadb.net/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ActivityEntryAPIGetListRequest{
        QueryParams: operations.ActivityEntryAPIGetListQueryParams{
            Before: "2022-09-10T05:11:41.969Z",
            EditEvent: "Deleted",
            EntryFields: "PVs",
            EntryType: "User",
            Fields: "ArchivedVersion",
            GetTotalCount: false,
            Lang: "English",
            MaxResults: 544883,
            Since: "2022-05-24T06:52:34.091Z",
            SortRule: "CreateDateDescending",
            UserID: 623564,
        },
    }

    ctx := context.Background()
    res, err := s.ActivityEntryAPI.ActivityEntryAPIGetList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### ActivityEntryAPI

* `ActivityEntryAPIGetList` - Gets a list of recent activity entries.

### AlbumAPI

* `AlbumAPIDelete` - Deletes an album.
* `AlbumAPIDeleteComment` - Deletes a comment.
* `AlbumAPIDeleteReview`
* `AlbumAPIGetComments` - Gets a list of comments for an album.
* `AlbumAPIGetList` - Gets a page of albums.
* `AlbumAPIGetNames` - Gets a list of album names. Ideal for autocomplete boxes.
* `AlbumAPIGetNewAlbums` - Gets list of upcoming or recent albums, same as front page.
* `AlbumAPIGetOne` - Gets an album by Id.
* `AlbumAPIGetReviews`
* `AlbumAPIGetTopAlbums` - Gets list of top rated albums, same as front page.
* `AlbumAPIGetTracks` - Gets tracks for an album.
* `AlbumAPIGetTracksFields`
* `AlbumAPIGetUserCollections`
* `AlbumAPIPostEditCommentForm` - Updates a comment.
* `AlbumAPIPostEditCommentJSON` - Updates a comment.
* `AlbumAPIPostEditCommentRaw` - Updates a comment.
* `AlbumAPIPostNewCommentForm` - Posts a new comment.
* `AlbumAPIPostNewCommentJSON` - Posts a new comment.
* `AlbumAPIPostNewCommentRaw` - Posts a new comment.
* `AlbumAPIPostReviewForm`
* `AlbumAPIPostReviewJSON`
* `AlbumAPIPostReviewRaw`

### ArtistAPI

* `ArtistAPIDelete` - Deletes an artist.
* `ArtistAPIDeleteComment` - Deletes a comment.
* `ArtistAPIGetComments` - Gets a list of comments for an artist.
* `ArtistAPIGetList` - Find artists.
* `ArtistAPIGetNames` - Gets a list of artist names. Ideal for autocomplete boxes.
* `ArtistAPIGetOne` - Gets an artist by Id.
* `ArtistAPIPostEditCommentForm` - Updates a comment.
* `ArtistAPIPostEditCommentJSON` - Updates a comment.
* `ArtistAPIPostEditCommentRaw` - Updates a comment.
* `ArtistAPIPostNewCommentForm` - Posts a new comment.
* `ArtistAPIPostNewCommentJSON` - Posts a new comment.
* `ArtistAPIPostNewCommentRaw` - Posts a new comment.

### CommentAPI

* `CommentAPIDeleteComment` - Deletes a comment.
* `CommentAPIGetComments` - Gets a list of comments for an entry.
* `CommentAPIPostEditCommentForm` - Updates a comment.
* `CommentAPIPostEditCommentJSON` - Updates a comment.
* `CommentAPIPostEditCommentRaw` - Updates a comment.
* `CommentAPIPostNewCommentForm` - Posts a new comment.
* `CommentAPIPostNewCommentJSON` - Posts a new comment.
* `CommentAPIPostNewCommentRaw` - Posts a new comment.

### DiscussionAPI

* `DiscussionAPIDeleteComment`
* `DiscussionAPIDeleteTopic`
* `DiscussionAPIGetFolders`
* `DiscussionAPIGetTopic`
* `DiscussionAPIGetTopics`
* `DiscussionAPIGetTopicsForFolder`
* `DiscussionAPIPostEditCommentForm`
* `DiscussionAPIPostEditCommentJSON`
* `DiscussionAPIPostEditCommentRaw`
* `DiscussionAPIPostEditTopicForm`
* `DiscussionAPIPostEditTopicJSON`
* `DiscussionAPIPostEditTopicRaw`
* `DiscussionAPIPostNewCommentForm`
* `DiscussionAPIPostNewCommentJSON`
* `DiscussionAPIPostNewCommentRaw`
* `DiscussionAPIPostNewFolderForm`
* `DiscussionAPIPostNewFolderJSON`
* `DiscussionAPIPostNewFolderRaw`
* `DiscussionAPIPostNewTopicForm`
* `DiscussionAPIPostNewTopicJSON`
* `DiscussionAPIPostNewTopicRaw`

### EntryAPI

* `EntryAPIGetList` - Find entries.
* `EntryAPIGetNames` - Gets a list of entry names. Ideal for autocomplete boxes.

### EntryTypesAPI

* `EntryTypesAPIGetMappedTag`

### PVAPI

* `PVAPIGetList` - Gets a list of PVs for songs.

### ReleaseEventAPI

* `ReleaseEventAPIDelete` - Deletes an event.
* `ReleaseEventAPIGetAlbums` - Gets a list of albums for a specific event.
* `ReleaseEventAPIGetList` - Gets a page of events.
* `ReleaseEventAPIGetNames` - Find event names by a part of name.
            
            Matching is done anywhere from the name.
* `ReleaseEventAPIGetOne`
* `ReleaseEventAPIGetPublishedSongs` - Gets a list of songs for a specific event.
* `ReleaseEventAPIPostReport` - Creates a new report.

### ReleaseEventSeriesAPI

* `ReleaseEventSeriesAPIDelete` - Deletes an event series.
* `ReleaseEventSeriesAPIGetList` - Gets a page of event series.
* `ReleaseEventSeriesAPIGetOne` - Gets single event series by ID.

### ResourcesAPI

* `ResourcesAPIGetList` - Gets a number of resource sets for a specific culture.

### SongAPI

* `SongAPIDelete` - Deletes a song.
* `SongAPIDeleteComment` - Deletes a comment.
* `SongAPIGetByID` - Gets a song by Id.
* `SongAPIGetByPV` - Gets a song by PV.
* `SongAPIGetComments` - Gets a list of comments for a song.
* `SongAPIGetDerived` - Gets derived (alternate versions) of a song.
* `SongAPIGetHighlightedSongs` - Gets list of highlighted songs, same as front page.
* `SongAPIGetList` - Find songs.
* `SongAPIGetLyrics` - Gets lyrics by ID.
* `SongAPIGetNames` - Gets a list of song names. Ideal for autocomplete boxes.
* `SongAPIGetRatings` - Get ratings for a song.
* `SongAPIGetRelated` - Gets related songs.
* `SongAPIGetTopSongs` - Gets top rated songs.
* `SongAPIPostEditCommentForm` - Updates a comment.
* `SongAPIPostEditCommentJSON` - Updates a comment.
* `SongAPIPostEditCommentRaw` - Updates a comment.
* `SongAPIPostNewCommentForm` - Posts a new comment.
* `SongAPIPostNewCommentJSON` - Posts a new comment.
* `SongAPIPostNewCommentRaw` - Posts a new comment.
* `SongAPIPostRatingForm` - Add or update rating for a specific song, for the currently logged in user.
* `SongAPIPostRatingJSON` - Add or update rating for a specific song, for the currently logged in user.
* `SongAPIPostRatingRaw` - Add or update rating for a specific song, for the currently logged in user.

### SongListAPI

* `SongListAPIDelete` - Deletes a song list.
* `SongListAPIDeleteComment` - Deletes a comment.
* `SongListAPIGetComments` - Gets a list of comments for a song list.
* `SongListAPIGetFeaturedListNames` - Gets a list of featuedd list names. Ideal for autocomplete boxes.
* `SongListAPIGetFeaturedLists` - Gets a list of featured song lists.
* `SongListAPIGetSongs` - Gets a list of songs in a song list.
* `SongListAPIPostEditCommentForm` - Updates a comment.
* `SongListAPIPostEditCommentJSON` - Updates a comment.
* `SongListAPIPostEditCommentRaw` - Updates a comment.
* `SongListAPIPostNewCommentForm` - Posts a new comment.
* `SongListAPIPostNewCommentJSON` - Posts a new comment.
* `SongListAPIPostNewCommentRaw` - Posts a new comment.
* `SongListAPIPostForm` - Creates a song list.
* `SongListAPIPostJSON` - Creates a song list.
* `SongListAPIPostRaw` - Creates a song list.

### TagAPI

* `TagAPIDelete` - Deletes a tag.
* `TagAPIDeleteComment` - Deletes a comment.
            Normal users can delete their own comments, moderators can delete all comments.
            Requires login.
* `TagAPIGetByID` - Gets a tag by ID.
* `TagAPIGetByName` - DEPRECATED. Gets a tag by name.
* `TagAPIGetCategoryNamesList` - Gets a list of tag category names.
* `TagAPIGetChildTags` - Gets a list of child tags for a tag.
            Only direct children will be included.
* `TagAPIGetComments` - Gets a list of comments for a tag.
            Note: pagination and sorting might be added later.
* `TagAPIGetList` - Find tags.
* `TagAPIGetNames` - Find tag names by a part of name.
            
            Matching is done anywhere from the name.
* `TagAPIGetTopTags` - Gets the most common tags in a category.
* `TagAPIPostEditCommentForm` - Updates a comment.
            Normal users can edit their own comments, moderators can edit all comments.
            Requires login.
* `TagAPIPostEditCommentJSON` - Updates a comment.
            Normal users can edit their own comments, moderators can edit all comments.
            Requires login.
* `TagAPIPostEditCommentRaw` - Updates a comment.
            Normal users can edit their own comments, moderators can edit all comments.
            Requires login.
* `TagAPIPostNewCommentForm` - Posts a new comment.
* `TagAPIPostNewCommentJSON` - Posts a new comment.
* `TagAPIPostNewCommentRaw` - Posts a new comment.
* `TagAPIPostNewTag` - Creates a new tag.
* `TagAPIPostReport` - Creates a new report.

### UserAPI

* `UserAPIDeleteFollowedTag`
* `UserAPIDeleteMessages` - Deletes a list of user messages.
* `UserAPIDeleteProfileComment` - Deletes a comment.
* `UserAPIGetAlbumCollection` - Gets a list of albums in a user's collection.
* `UserAPIGetAlbumForUser`
* `UserAPIGetArtistForUser`
* `UserAPIGetCurrent` - Gets information about the currently logged in user.
* `UserAPIGetEvents` - Gets a list of events a user has subscribed to.
* `UserAPIGetFollowedArtists` - Gets a list of artists followed by a user.
* `UserAPIGetList` - Gets a list of users.
* `UserAPIGetMessage` - Gets a user message.
* `UserAPIGetMessages` - Gets a list of messages.
* `UserAPIGetNames` - Gets a list of user names. Ideal for autocomplete boxes.
* `UserAPIGetOne` - Gets user by ID.
* `UserAPIGetProfileComments` - Gets a list of comments posted on user's profile.
* `UserAPIGetRatedSongs` - Gets a list of songs rated by a user.
* `UserAPIGetSongLists`
* `UserAPIGetSongRating` - Gets a specific user's rating for a song.
* `UserAPIGetSongRatingForCurrent` - Gets currently logged in user's rating for a song.
* `UserAPIPostAlbumStatus` - Add or update collection status, media type and rating for a specific album, for the currently logged in user.
* `UserAPIPostEditCommentForm` - Updates a comment.
* `UserAPIPostEditCommentJSON` - Updates a comment.
* `UserAPIPostEditCommentRaw` - Updates a comment.
* `UserAPIPostFollowedTag`
* `UserAPIPostNewCommentForm` - Posts a new comment.
* `UserAPIPostNewCommentJSON` - Posts a new comment.
* `UserAPIPostNewCommentRaw` - Posts a new comment.
* `UserAPIPostNewMessageForm` - Creates a new message.
* `UserAPIPostNewMessageJSON` - Creates a new message.
* `UserAPIPostNewMessageRaw` - Creates a new message.
* `UserAPIPostRefreshEntryEdit` - Refresh entry edit status, indicating that the current user is still editing that entry.
* `UserAPIPostReportForm`
* `UserAPIPostReportJSON`
* `UserAPIPostReportRaw`
* `UserAPIPostSetting` - Updates user setting.
* `GetAPIUsersCurrentAlbumCollectionStatusesAlbumID`
* `GetAPIUsersCurrentFollowedArtistsArtistID`

### VenueAPI

* `VenueAPIDelete` - Deletes a venue.
* `VenueAPIGetList` - Gets a page of event venue.
* `VenueAPIPostReport` - Creates a new report.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
