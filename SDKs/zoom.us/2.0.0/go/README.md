# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                OAuth: shared.SchemeOAuth{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AccountRequest{
        PathParams: operations.AccountPathParams{
            AccountID: "sit",
        },
    }
    
    res, err := s.Accounts.Account(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Account200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Accounts

* `Account` - Get sub account details
* `AccountCreate` - Create a sub account
* `AccountDisassociate` - Disassociate a sub account
* `AccountManagedDomain` - Get managed domains
* `AccountOptionsUpdate` - Update options
* `AccountSettings` - Get settings
* `AccountSettingsUpdate` - Update settings
* `AccountTrustedDomain` - Get trusted domains
* `Accounts` - List sub accounts
* `DelVb` - Delete virtual background files
* `GetAccountLockSettings` - Get locked settings
* `UpdateAccountLockSettings` - Update locked settings
* `UpdateAccountOwner` - Update the account owner
* `UploadVb` - Upload virtual background files

### Billing

* `AccountBilling` - Get billing information
* `AccountBillingInvoices` - List billing invoices
* `AccountBillingUpdate` - Update billing information
* `AccountPlanAddonCancel` - Cancel additional plans
* `AccountPlanAddonCreate` - Subscribe additional plan
* `AccountPlanAddonUpdate` - Update an additional plan
* `AccountPlanBaseDelete` - Cancel a base plan
* `AccountPlanBaseUpdate` - Update a base plan
* `AccountPlanCreate` - Subscribe plans
* `AccountPlans` - Get plan Information
* `DownloadInvoicePdf` - Download an invoice file
* `GetAccountBillingInvoice` - Get invoice details
* `GetPlanUsage` - Get plan usage

### Chat Channels

* `CreateChannel` - Create a channel
* `DeleteUserLevelChannel` - Delete a channel
* `GetChannels` - List user's channels
* `GetUserLevelChannel` - Get a channel
* `JoinChannel` - Join a channel
* `LeaveChannel` - Leave a channel
* `RemoveAUserLevelChannelMember` - Remove a member
* `UpdateUserLevelChannel` - Update a channel

### Chat Channels (Account-level)

* `DeleteChannel` - Delete a channel
* `GetChannel` - Get a channel
* `InviteChannelMembers` - Invite channel members
* `ListChannelMembers` - List channel members
* `RemoveAChannelMember` - Remove a member
* `UpdateChannel` - Update a channel

### Chat Messages

* `DeleteChatMessage` - Delete a message
* `EditMessage` - Update a message
* `GetChatMessages` - List user's chat messages
* `SendaChatMessage` - Send a chat message

### Chatbot Messages

* `DeleteAChatbotMessage` - Delete a chatbot message
* `EditChatbotMessage` - Edit a chatbot message
* `Sendchatbot` - Send chatbot messages

### Cloud Recording

* `GetAccountCloudRecording` - List recordings of an account
* `ListArchivedFiles` - List archived files
* `MeetingRecordingRegistrantCreate` - Create a recording registrant
* `MeetingRecordingRegistrantStatus` - Update registrant's status
* `MeetingRecordingRegistrants` - List recording registrants
* `RecordingDelete` - Delete meeting recordings
* `RecordingDeleteOne` - Delete a meeting recording file
* `RecordingGet` - Get meeting recordings
* `RecordingRegistrantQuestionUpdate` - Update registration questions
* `RecordingRegistrantsQuestionsGet` - Get registration questions
* `RecordingSettingUpdate` - Get meeting recording settings
* `RecordingSettingsUpdate` - Update meeting recording settings
* `RecordingStatusUpdate` - Recover meeting recordings
* `RecordingStatusUpdateOne` - Recover a single recording
* `RecordingsList` - List all recordings

### Common Area Phones

* `AddCommonAreaPhone` - Add a common area phone
* `DeleteCommonAreaPhone` - Delete a common area phone
* `GetACommonAreaPhone` - Get common area phone details
* `ListCommonAreaPhones` - List common area phones
* `UpdateCommonAreaPhone` - Update common area phone

### Contacts

* `GetUserContact` - Get user's contact details
* `GetUserContacts` - List user's contacts
* `SearchCompanyContacts` - Search company contacts

### Dashboards

* `DashboardCrc` - Get CRC port usage
* `DashboardClientFeedback` - List Zoom meetings client feedback
* `DashboardClientFeedbackDetail` - Get zoom meetings client feedback
* `DashboardIm` - Get IM metrics
* `DashboardIssueDetailZoomRoom` - Get issues of Zoom Rooms
* `DashboardIssueZoomRoom` - Get top 25 Zoom Rooms with issues
* `DashboardMeetingDetail` - Get meeting details
* `DashboardMeetingParticipantQos` - Get meeting participant QoS
* `DashboardMeetingParticipantShare` - Get sharing/recording details
* `DashboardMeetingParticipants` - List meeting participants
* `DashboardMeetingParticipantsQos` - List meeting participants QoS
* `DashboardMeetings` - List meetings
* `DashboardWebinarDetail` - Get webinar details
* `DashboardWebinarParticipantQos` - Get webinar participant QoS
* `DashboardWebinarParticipantShare` - Get sharing/recording details
* `DashboardWebinarParticipants` - Get webinar participants
* `DashboardWebinarParticipantsQos` - List webinar participant QoS
* `DashboardWebinars` - List webinars
* `DashboardZoomRoom` - Get Zoom Rooms details
* `DashboardZoomRoomIssue` - Get top 25 issues of Zoom Rooms
* `DashboardZoomRooms` - List Zoom Rooms
* `GetCallLogMetricsDetails` - Get call details from call log
* `GetCallQoS` - Get call QoS
* `ListCallLogsMetrics` - List call logs
* `ListMeetingSatisfaction` - List client meeting satisfaction
* `ParticipantFeedback` - Get post meeting feedback
* `ParticipantWebinarFeedback` - Get post webinar feedback

### Deprecated API Endpoints

* `ListPastMeetingFiles` - List past meeting's files
* `ListPastWebinarFiles` - List past webinar files

### Devices

* `DeviceCreate` - Create a H.323/SIP device
* `DeviceDelete` - Delete a H.323/SIP device
* `DeviceList` - List H.323/SIP devices
* `DeviceUpdate` - Update a H.323/SIP device

### Groups

* `DelGroupVb` - Delete virtual background files
* `GetGroupLockSettings` - Get locked settings
* `GetGroupSettings` - Get a group's settings
* `Group` - Get a group
* `GroupCreate` - Create a group
* `GroupDelete` - Delete a group
* `GroupLockedSettings` - Update locked settings
* `GroupMembers` - List group members 
* `GroupMembersCreate` - Add group members
* `GroupMembersDelete` - Delete a group member
* `GroupUpdate` - Update a group
* `Groups` - List groups
* `UpdateAGroupMember` - Update a group member
* `UpdateGroupSettings` - Update a group's settings
* `UploadGroupVb` - Upload virtual background files

### IM Chat

* `ImChatMessages` - Get IM chat messages
* `ImChatSessions` - Get IM chat sessions
* `Listimmessages` - Get user’s IM messages
* `Sendimmessages` - Send IM messages

### IM Groups

* `ImGroup` - Retrieve an IM directory group
* `ImGroupCreate` - Create an IM directory group
* `ImGroupDelete` - Delete an IM directory group
* `ImGroupMembers` - List IM directory group members
* `ImGroupMembersCreate` - Add IM directory group members
* `ImGroupMembersDelete` - Delete an IM directory group member
* `ImGroupUpdate` - Update an IM directory group
* `ImGroups` - List IM directory groups

### Meetings

* `CreateBatchPolls` - Perform batch poll creation
* `GetLiveStreamDetails` - Get live stream details
* `InMeetingRecordingControl` - Use in-Meeting recording controls
* `ListMeetingTemplates` - List meeting templates
* `ListPastMeetingPolls` - List past meeting's poll results
* `Meeting` - Get a meeting
* `MeetingCreate` - Create a meeting
* `MeetingDelete` - Delete a meeting
* `MeetingInvitation` - Get meeting invitation
* `MeetingLiveStreamStatusUpdate` - Update Live Stream Status
* `MeetingLiveStreamUpdate` - Update a live stream
* `MeetingPollCreate` - Create a meeting poll
* `MeetingPollDelete` - Delete a meeting poll
* `MeetingPollGet` - Get a meeting poll
* `MeetingPollUpdate` - Update a meeting poll
* `MeetingPolls` - List meeting polls
* `MeetingRegistrantCreate` - Add meeting registrant
* `MeetingRegistrantQuestionUpdate` - Update registration questions
* `MeetingRegistrantStatus` - Update registrant's status
* `MeetingRegistrants` - List meeting registrants
* `MeetingRegistrantsQuestionsGet` - List registration questions 
* `MeetingStatus` - Update meeting status
* `MeetingUpdate` - Update a meeting
* `Meetingregistrantdelete` - Delete a meeting registrant
* `Meetings` - List meetings
* `PastMeetingDetails` - Get past meeting details
* `PastMeetingParticipants` - Get past meeting participants
* `PastMeetings` - List ended meeting instances

### PAC

* `UserPaCs` - List a user's PAC accounts

### Phone

* `UnassignPhoneNumber` - Unassign phone number
* `AccountCallLogs` - Get account's call logs
* `AddByocNumber` - Add BYOC phone numbers
* `AddSettingTemplate` - Add a setting template
* `AddUserSetting` - Set up shared access
* `AssignCallingPlan` - Assign calling plan to a user
* `AssignPhoneNumber` - Assign phone number to user
* `ChangeMainCompanyNumber` - Change main company number
* `DeleteCallLog` - Delete a user's call log
* `DeleteUserSetting` - Remove shared access
* `DeleteVoicemail` - Delete a voicemail
* `GetPhoneNumberDetails` - Get phone number details
* `GetPhoneRecordings` - Get call recordings
* `GetSettingTemplate` - Get setting template details
* `ListAccountPhoneNumbers` - List phone numbers
* `ListByocsipTrunk` - List BYOC SIP trunks
* `ListCallingPlans` - List calling plans
* `ListPhoneUsers` - List phone users
* `ListSettingTemplates` - List setting templates
* `PhoneUser` - Get user's profile
* `PhoneUserCallLogs` - Get user's call logs
* `PhoneUserRecordings` - Get user's recordings
* `PhoneUserSettings` - Get user's settings
* `PhoneUserVoiceMails` - Get user's voicemails
* `PostPhoneSipTrunk` - Assign SIP trunks
* `SetUpAccount` - Set up a Zoom Phone account
* `UnassignCallingPlan` - Unassign user's calling plan
* `UpdatePhoneNumberDetails` - Update phone number details
* `UpdatePhoneSipTrunk` - Update SIP trunk details
* `UpdatePhoneSettings` - Update BYOC settings
* `UpdateSettingTemplate` - Update a setting template
* `UpdateUserProfile` - Update user's profile
* `UpdateUserSetting` - Update shared access

### Phone Auto Receptionists

* `AddAutoReceptionist` - Add an auto receptionist
* `AssignPhoneNumbersAutoReceptionist` - Assign phone numbers
* `UnassignAPhoneNumAutoReceptionist` - Unassign a phone number
* `UnassignAllPhoneNumsAutoReceptionist` - Unassign all phone numbers
* `UpdateAutoReceptionist` - Update auto receptionist details

### Phone Blocked List

* `AddAnumberToBlockedList` - Create a blocked list
* `DeleteABlockedList` - Delete a blocked list
* `GetABlockedList` - Get blocked list details
* `ListBlockedList` - List blocked lists
* `UpdateBlockedList` - Update a blocked list

### Phone Call Queues

* `AddMembersToCallQueue` - Add members to a call queue
* `AssignPhoneToCallQueue` - Assign numbers to a call queue
* `ChangeCallQueueManager` - Change call queue manager
* `CreateCallQueue` - Create a call queue
* `DeleteACallQueue` - Delete a call queue
* `GetACallQueue` - Get call queue details
* `GetCallQueueRecordings` - Get call queue recordings
* `ListCallQueues` - List call queues
* `UnAssignPhoneNumCallQueue` - Unassign a phone number
* `UnassignAPhoneNumCallQueue` - Unassign all phone numbers
* `UnassignAllMembers` - Unassign all members
* `UnassignMemberFromCallQueue` - Unassign a member
* `UpdateCallQueue` - Update call queue details

### Phone Devices

* `AddPhoneDevice` - Add a device
* `DeleteADevice` - Delete a device
* `GetADevice` - Get device details
* `ListPhoneDevices` - List devices
* `UpdateADevice` - Update a device

### Phone Reports

* `GetPsOperationLogs` - Get operation logs report

### Phone Shared Line Groups

* `AddMembersToSharedLineGroup` - Add members to a shared line group
* `AssignPhoneNumbersSlg` - Assign phone numbers
* `CreateASharedLineGroup` - Create a shared line group
* `DeleteAMemberSlg` - Unassign a member from a shared line group
* `DeleteAPhoneNumberSlg` - Unassign a phone number
* `DeleteASharedLineGroup` - Delete a shared line group
* `DeleteMembersOfSlg` - Unassign members of a shared line group
* `GetASharedLineGroup` - Get a shared line group
* `ListSharedLineGroups` - List shared line groups
* `UpdateASharedLineGroup` - Update a shared line group

### Phone Site

* `CreatePhoneSite` - Create a phone site
* `DeletePhoneSite` - Delete a phone site
* `GetASite` - Get phone site details
* `ListPhoneSites` - List phone sites
* `UpdateSiteDetails` - Update phone site details

### Reports

* `ReportCloudRecording` - Get cloud recording usage report
* `ReportDaily` - Get daily usage report
* `ReportMeetingDetails` - Get meeting detail reports
* `ReportMeetingParticipants` - Get meeting participant reports
* `ReportMeetingPolls` - Get meeting poll reports
* `ReportMeetings` - Get meeting reports
* `ReportOperationLogs` - Get operation logs report
* `ReportSignInSignOutActivities` - Get sign In / sign out activity report
* `ReportTelephone` - Get telephone reports
* `ReportUsers` - Get active/inactive host reports
* `ReportWebinarDetails` - Get webinar detail reports
* `ReportWebinarParticipants` - Get webinar participant reports
* `ReportWebinarPolls` - Get webinar poll reports
* `ReportWebinarQa` - Get webinar Q&A report

### Roles

* `AddRoleMembers` - Assign a role
* `CreateRole` - Create a role
* `DeleteRole` - Delete a role
* `GetRoleInformation` - Get role information
* `RoleMemberDelete` - Unassign a role
* `RoleMembers` - List members in a role
* `Roles` - List roles
* `UpdateRole` - Update role information

### Rooms

* `AddARoom` - Add a Zoom Room
* `ChangeZrLocation` - Change a Zoom Room's location
* `CheckInRooms` - Check-in or check-out of a Zoom Room
* `DeleteAZoomRoom` - Delete a Zoom Room
* `GetZrProfile` - Get Zoom Room profile
* `GetZrSettings` - Get Zoom Room settings
* `ListDigitalSignageContent` - List digital signage contents
* `ListZrDevices` - List Zoom Room devices
* `ListZoomRooms` - List Zoom Rooms
* `ManageE911signage` - Update E911 digital signage
* `UpdateRoomProfile` - Update a Zoom Room profile
* `UpdateZrSettings` - Update Zoom Room settings

### Rooms Account

* `GetZrAccountProfile` - Get Zoom Room account profile
* `GetZrAccountSettings` - Get Zoom Room account settings
* `UpdateZrAccProfile` - Update Zoom Room account profile
* `UpdateZoomRoomAccSettings` - Update Zoom Room account settings

### Rooms Devices

* `ChangeZoomRoomsAppVersion` - Change Zoom Rooms' app version

### Rooms Location

* `AddAzrLocation` - Add a location
* `ChangeParentLocation` - Change the assigned parent location
* `GetZrLocationProfile` - Get Zoom Room location profile
* `GetZrLocationSettings` - Get location settings
* `GetZrLocationStructure` - Get Zoom Room location structure
* `ListZrLocations` - List Zoom Room locations
* `UpdateZrLocationProfile` - Update Zoom Room location profile
* `UpdateZrLocationSettings` - Update location settings
* `UpdateZoomRoomsLocationStructure` - Update Zoom Rooms location structure

### SIP Connected Audio

* `AddCalloutCountries` - Add internal call-out countries
* `AddInternalNumbers` - Add internal numbers
* `AssignSipConfig` - Assign SIP trunk configuration
* `AssignSipTrunks` - Assign SIP trunks
* `AssignSipTrunkNumbers` - Assign numbers
* `DeleteAllSipNumbers` - Delete all numbers
* `DeleteInternalCallOutCountry` - Delete internal call-out country
* `DeleteInternalNumber` - Delete an internal number
* `DeleteSipTrunk` - Delete a SIP trunk
* `ListInternalCalloutCountries` - List internal call-out countries
* `ListInternalNumbers` - List internal numbers
* `ListSipTrunks` - List SIP trunks
* `ListSipTrunkNumbers` - List SIP trunk numbers

### SIP Phone

* `CreateSipPhone` - Enable SIP phone
* `DeleteSipPhone` - Delete SIP phone
* `ListSipPhones` - List SIP phones
* `UpdateSipPhone` - Update SIP phone

### TSP

* `Tsp` - Get account's TSP information
* `TspUpdate` - Update account's TSP information
* `TspURLUpdate` - Set global dial-in URL for a TSP user
* `UserTsp` - Get a user's TSP account
* `UserTspCreate` - Add a user's TSP account
* `UserTspDelete` - Delete a user's TSP account
* `UserTspUpdate` - Update a TSP account
* `UserTsPs` - List user's TSP accounts

### TrackingField

* `TrackingfieldCreate` - Create a tracking field
* `TrackingfieldDelete` - Delete a tracking field
* `TrackingfieldGet` - Get a tracking field
* `TrackingfieldList` - List tracking fields
* `TrackingfieldUpdate` - Update a tracking field

### Users

* `DelUserVb` - Delete virtual background files
* `SwitchUserAccount` - Switch a user's account
* `UpdatePresenceStatus` - Update a user's presence status
* `UploadVBuser` - Upload virtual background files
* `User` - Get a user
* `UserAssistantCreate` - Add assistants
* `UserAssistantDelete` - Delete a user assistant
* `UserAssistants` - List user assistants
* `UserAssistantsDelete` - Delete user assistants
* `UserCreate` - Create users
* `UserDelete` - Delete a user
* `UserEmail` - Check a user email
* `UserEmailUpdate` - Update a user's email
* `UserPassword` - Update a user's password
* `UserPermission` - Get user permissions
* `UserPicture` - Upload a user's profile picture
* `UserSsoTokenDelete` - Revoke a user's SSO token
* `UserSchedulerDelete` - Delete a scheduler
* `UserSchedulers` - List user schedulers
* `UserSchedulersDelete` - Delete user schedulers
* `UserSettings` - Get user settings
* `UserSettingsUpdate` - Update user settings
* `UserStatus` - Update user status
* `UserToken` - Get a user token
* `UserUpdate` - Update a user
* `UserVanityName` - Check a user's PM room
* `UserZak` - Get user's ZAK
* `Users` - List users

### Webinars

* `AddBatchWebinarRegistrants` - Perform batch registration
* `DeleteWebinarRegistrant` - Delete a webinar registrant
* `GetTrackingSources` - Get webinar tracking sources
* `ListPastWebinarPollResults` - List past webinar poll results
* `ListPastWebinarQa` - List Q&A of past webinar
* `ListWebinarParticipants` - List webinar participants
* `ListWebinarTemplates` - List webinar templates
* `PastWebinars` - List past webinar instances
* `Webinar` - Get a webinar
* `WebinarAbsentees` - Get webinar absentees
* `WebinarCreate` - Create a webinar
* `WebinarDelete` - Delete a webinar
* `WebinarPanelistCreate` - Add panelists
* `WebinarPanelistDelete` - Remove a panelist
* `WebinarPanelists` - List panelists
* `WebinarPanelistsDelete` - Remove panelists
* `WebinarPollCreate` - Create a webinar's poll
* `WebinarPollDelete` - Delete a webinar poll
* `WebinarPollGet` - Get a webinar poll
* `WebinarPollUpdate` - Update a webinar poll
* `WebinarPolls` - List a webinar's polls 
* `WebinarRegistrantCreate` - Add a webinar registrant
* `WebinarRegistrantGet` - Get a webinar registrant
* `WebinarRegistrantQuestionUpdate` - Update registration questions
* `WebinarRegistrantStatus` - Update registrant's status
* `WebinarRegistrants` - List webinar registrants
* `WebinarRegistrantsQuestionsGet` - List registration questions
* `WebinarStatus` - Update webinar status
* `WebinarUpdate` - Update a webinar
* `Webinars` - List webinars

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
