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

            builder.setSecurity(
                new Security() {{
                    oAuth = new SchemeOAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AccountRequest req = new AccountRequest() {{
                pathParams = new AccountPathParams() {{
                    accountId = "nesciunt";
                }};
            }};

            AccountResponse res = sdk.accounts.account(req);

            if (res.account200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Accounts

* `account` - Get sub account details
* `accountCreate` - Create a sub account
* `accountDisassociate` - Disassociate a sub account
* `accountManagedDomain` - Get managed domains
* `accountOptionsUpdate` - Update options
* `accountSettings` - Get settings
* `accountSettingsUpdate` - Update settings
* `accountTrustedDomain` - Get trusted domains
* `accounts` - List sub accounts
* `delVb` - Delete virtual background files
* `getAccountLockSettings` - Get locked settings
* `updateAccountLockSettings` - Update locked settings
* `updateAccountOwner` - Update the account owner
* `uploadVb` - Upload virtual background files

### Billing

* `accountBilling` - Get billing information
* `accountBillingInvoices` - List billing invoices
* `accountBillingUpdate` - Update billing information
* `accountPlanAddonCancel` - Cancel additional plans
* `accountPlanAddonCreate` - Subscribe additional plan
* `accountPlanAddonUpdate` - Update an additional plan
* `accountPlanBaseDelete` - Cancel a base plan
* `accountPlanBaseUpdate` - Update a base plan
* `accountPlanCreate` - Subscribe plans
* `accountPlans` - Get plan Information
* `downloadInvoicePdf` - Download an invoice file
* `getAccountBillingInvoice` - Get invoice details
* `getPlanUsage` - Get plan usage

### Chat Channels

* `createChannel` - Create a channel
* `deleteUserLevelChannel` - Delete a channel
* `getChannels` - List user's channels
* `getUserLevelChannel` - Get a channel
* `joinChannel` - Join a channel
* `leaveChannel` - Leave a channel
* `removeAUserLevelChannelMember` - Remove a member
* `updateUserLevelChannel` - Update a channel

### Chat Channels (Account-level)

* `deleteChannel` - Delete a channel
* `getChannel` - Get a channel
* `inviteChannelMembers` - Invite channel members
* `listChannelMembers` - List channel members
* `removeAChannelMember` - Remove a member
* `updateChannel` - Update a channel

### Chat Messages

* `deleteChatMessage` - Delete a message
* `editMessage` - Update a message
* `getChatMessages` - List user's chat messages
* `sendaChatMessage` - Send a chat message

### Chatbot Messages

* `deleteAChatbotMessage` - Delete a chatbot message
* `editChatbotMessage` - Edit a chatbot message
* `sendchatbot` - Send chatbot messages

### Cloud Recording

* `getAccountCloudRecording` - List recordings of an account
* `listArchivedFiles` - List archived files
* `meetingRecordingRegistrantCreate` - Create a recording registrant
* `meetingRecordingRegistrantStatus` - Update registrant's status
* `meetingRecordingRegistrants` - List recording registrants
* `recordingDelete` - Delete meeting recordings
* `recordingDeleteOne` - Delete a meeting recording file
* `recordingGet` - Get meeting recordings
* `recordingRegistrantQuestionUpdate` - Update registration questions
* `recordingRegistrantsQuestionsGet` - Get registration questions
* `recordingSettingUpdate` - Get meeting recording settings
* `recordingSettingsUpdate` - Update meeting recording settings
* `recordingStatusUpdate` - Recover meeting recordings
* `recordingStatusUpdateOne` - Recover a single recording
* `recordingsList` - List all recordings

### Common Area Phones

* `addCommonAreaPhone` - Add a common area phone
* `deleteCommonAreaPhone` - Delete a common area phone
* `getACommonAreaPhone` - Get common area phone details
* `listCommonAreaPhones` - List common area phones
* `updateCommonAreaPhone` - Update common area phone

### Contacts

* `getUserContact` - Get user's contact details
* `getUserContacts` - List user's contacts
* `searchCompanyContacts` - Search company contacts

### Dashboards

* `dashboardCrc` - Get CRC port usage
* `dashboardClientFeedback` - List Zoom meetings client feedback
* `dashboardClientFeedbackDetail` - Get zoom meetings client feedback
* `dashboardIm` - Get IM metrics
* `dashboardIssueDetailZoomRoom` - Get issues of Zoom Rooms
* `dashboardIssueZoomRoom` - Get top 25 Zoom Rooms with issues
* `dashboardMeetingDetail` - Get meeting details
* `dashboardMeetingParticipantQos` - Get meeting participant QoS
* `dashboardMeetingParticipantShare` - Get sharing/recording details
* `dashboardMeetingParticipants` - List meeting participants
* `dashboardMeetingParticipantsQos` - List meeting participants QoS
* `dashboardMeetings` - List meetings
* `dashboardWebinarDetail` - Get webinar details
* `dashboardWebinarParticipantQos` - Get webinar participant QoS
* `dashboardWebinarParticipantShare` - Get sharing/recording details
* `dashboardWebinarParticipants` - Get webinar participants
* `dashboardWebinarParticipantsQos` - List webinar participant QoS
* `dashboardWebinars` - List webinars
* `dashboardZoomRoom` - Get Zoom Rooms details
* `dashboardZoomRoomIssue` - Get top 25 issues of Zoom Rooms
* `dashboardZoomRooms` - List Zoom Rooms
* `getCallLogMetricsDetails` - Get call details from call log
* `getCallQoS` - Get call QoS
* `listCallLogsMetrics` - List call logs
* `listMeetingSatisfaction` - List client meeting satisfaction
* `participantFeedback` - Get post meeting feedback
* `participantWebinarFeedback` - Get post webinar feedback

### Deprecated API Endpoints

* `listPastMeetingFiles` - List past meeting's files
* `listPastWebinarFiles` - List past webinar files

### Devices

* `deviceCreate` - Create a H.323/SIP device
* `deviceDelete` - Delete a H.323/SIP device
* `deviceList` - List H.323/SIP devices
* `deviceUpdate` - Update a H.323/SIP device

### Groups

* `delGroupVb` - Delete virtual background files
* `getGroupLockSettings` - Get locked settings
* `getGroupSettings` - Get a group's settings
* `group` - Get a group
* `groupCreate` - Create a group
* `groupDelete` - Delete a group
* `groupLockedSettings` - Update locked settings
* `groupMembers` - List group members 
* `groupMembersCreate` - Add group members
* `groupMembersDelete` - Delete a group member
* `groupUpdate` - Update a group
* `groups` - List groups
* `updateAGroupMember` - Update a group member
* `updateGroupSettings` - Update a group's settings
* `uploadGroupVb` - Upload virtual background files

### IM Chat

* `imChatMessages` - Get IM chat messages
* `imChatSessions` - Get IM chat sessions
* `listimmessages` - Get user’s IM messages
* `sendimmessages` - Send IM messages

### IM Groups

* `imGroup` - Retrieve an IM directory group
* `imGroupCreate` - Create an IM directory group
* `imGroupDelete` - Delete an IM directory group
* `imGroupMembers` - List IM directory group members
* `imGroupMembersCreate` - Add IM directory group members
* `imGroupMembersDelete` - Delete an IM directory group member
* `imGroupUpdate` - Update an IM directory group
* `imGroups` - List IM directory groups

### Meetings

* `createBatchPolls` - Perform batch poll creation
* `getLiveStreamDetails` - Get live stream details
* `inMeetingRecordingControl` - Use in-Meeting recording controls
* `listMeetingTemplates` - List meeting templates
* `listPastMeetingPolls` - List past meeting's poll results
* `meeting` - Get a meeting
* `meetingCreate` - Create a meeting
* `meetingDelete` - Delete a meeting
* `meetingInvitation` - Get meeting invitation
* `meetingLiveStreamStatusUpdate` - Update Live Stream Status
* `meetingLiveStreamUpdate` - Update a live stream
* `meetingPollCreate` - Create a meeting poll
* `meetingPollDelete` - Delete a meeting poll
* `meetingPollGet` - Get a meeting poll
* `meetingPollUpdate` - Update a meeting poll
* `meetingPolls` - List meeting polls
* `meetingRegistrantCreate` - Add meeting registrant
* `meetingRegistrantQuestionUpdate` - Update registration questions
* `meetingRegistrantStatus` - Update registrant's status
* `meetingRegistrants` - List meeting registrants
* `meetingRegistrantsQuestionsGet` - List registration questions 
* `meetingStatus` - Update meeting status
* `meetingUpdate` - Update a meeting
* `meetingregistrantdelete` - Delete a meeting registrant
* `meetings` - List meetings
* `pastMeetingDetails` - Get past meeting details
* `pastMeetingParticipants` - Get past meeting participants
* `pastMeetings` - List ended meeting instances

### PAC

* `userPaCs` - List a user's PAC accounts

### Phone

* `unassignPhoneNumber` - Unassign phone number
* `accountCallLogs` - Get account's call logs
* `addByocNumber` - Add BYOC phone numbers
* `addSettingTemplate` - Add a setting template
* `addUserSetting` - Set up shared access
* `assignCallingPlan` - Assign calling plan to a user
* `assignPhoneNumber` - Assign phone number to user
* `changeMainCompanyNumber` - Change main company number
* `deleteCallLog` - Delete a user's call log
* `deleteUserSetting` - Remove shared access
* `deleteVoicemail` - Delete a voicemail
* `getPhoneNumberDetails` - Get phone number details
* `getPhoneRecordings` - Get call recordings
* `getSettingTemplate` - Get setting template details
* `listAccountPhoneNumbers` - List phone numbers
* `listByocsipTrunk` - List BYOC SIP trunks
* `listCallingPlans` - List calling plans
* `listPhoneUsers` - List phone users
* `listSettingTemplates` - List setting templates
* `phoneUser` - Get user's profile
* `phoneUserCallLogs` - Get user's call logs
* `phoneUserRecordings` - Get user's recordings
* `phoneUserSettings` - Get user's settings
* `phoneUserVoiceMails` - Get user's voicemails
* `postPhoneSipTrunk` - Assign SIP trunks
* `setUpAccount` - Set up a Zoom Phone account
* `unassignCallingPlan` - Unassign user's calling plan
* `updatePhoneNumberDetails` - Update phone number details
* `updatePhoneSipTrunk` - Update SIP trunk details
* `updatePhoneSettings` - Update BYOC settings
* `updateSettingTemplate` - Update a setting template
* `updateUserProfile` - Update user's profile
* `updateUserSetting` - Update shared access

### Phone Auto Receptionists

* `addAutoReceptionist` - Add an auto receptionist
* `assignPhoneNumbersAutoReceptionist` - Assign phone numbers
* `unassignAPhoneNumAutoReceptionist` - Unassign a phone number
* `unassignAllPhoneNumsAutoReceptionist` - Unassign all phone numbers
* `updateAutoReceptionist` - Update auto receptionist details

### Phone Blocked List

* `addAnumberToBlockedList` - Create a blocked list
* `deleteABlockedList` - Delete a blocked list
* `getABlockedList` - Get blocked list details
* `listBlockedList` - List blocked lists
* `updateBlockedList` - Update a blocked list

### Phone Call Queues

* `addMembersToCallQueue` - Add members to a call queue
* `assignPhoneToCallQueue` - Assign numbers to a call queue
* `changeCallQueueManager` - Change call queue manager
* `createCallQueue` - Create a call queue
* `deleteACallQueue` - Delete a call queue
* `getACallQueue` - Get call queue details
* `getCallQueueRecordings` - Get call queue recordings
* `listCallQueues` - List call queues
* `unAssignPhoneNumCallQueue` - Unassign a phone number
* `unassignAPhoneNumCallQueue` - Unassign all phone numbers
* `unassignAllMembers` - Unassign all members
* `unassignMemberFromCallQueue` - Unassign a member
* `updateCallQueue` - Update call queue details

### Phone Devices

* `addPhoneDevice` - Add a device
* `deleteADevice` - Delete a device
* `getADevice` - Get device details
* `listPhoneDevices` - List devices
* `updateADevice` - Update a device

### Phone Reports

* `getPsOperationLogs` - Get operation logs report

### Phone Shared Line Groups

* `addMembersToSharedLineGroup` - Add members to a shared line group
* `assignPhoneNumbersSlg` - Assign phone numbers
* `createASharedLineGroup` - Create a shared line group
* `deleteAMemberSlg` - Unassign a member from a shared line group
* `deleteAPhoneNumberSlg` - Unassign a phone number
* `deleteASharedLineGroup` - Delete a shared line group
* `deleteMembersOfSlg` - Unassign members of a shared line group
* `getASharedLineGroup` - Get a shared line group
* `listSharedLineGroups` - List shared line groups
* `updateASharedLineGroup` - Update a shared line group

### Phone Site

* `createPhoneSite` - Create a phone site
* `deletePhoneSite` - Delete a phone site
* `getASite` - Get phone site details
* `listPhoneSites` - List phone sites
* `updateSiteDetails` - Update phone site details

### Reports

* `reportCloudRecording` - Get cloud recording usage report
* `reportDaily` - Get daily usage report
* `reportMeetingDetails` - Get meeting detail reports
* `reportMeetingParticipants` - Get meeting participant reports
* `reportMeetingPolls` - Get meeting poll reports
* `reportMeetings` - Get meeting reports
* `reportOperationLogs` - Get operation logs report
* `reportSignInSignOutActivities` - Get sign In / sign out activity report
* `reportTelephone` - Get telephone reports
* `reportUsers` - Get active/inactive host reports
* `reportWebinarDetails` - Get webinar detail reports
* `reportWebinarParticipants` - Get webinar participant reports
* `reportWebinarPolls` - Get webinar poll reports
* `reportWebinarQa` - Get webinar Q&A report

### Roles

* `addRoleMembers` - Assign a role
* `createRole` - Create a role
* `deleteRole` - Delete a role
* `getRoleInformation` - Get role information
* `roleMemberDelete` - Unassign a role
* `roleMembers` - List members in a role
* `roles` - List roles
* `updateRole` - Update role information

### Rooms

* `addARoom` - Add a Zoom Room
* `changeZrLocation` - Change a Zoom Room's location
* `checkInRooms` - Check-in or check-out of a Zoom Room
* `deleteAZoomRoom` - Delete a Zoom Room
* `getZrProfile` - Get Zoom Room profile
* `getZrSettings` - Get Zoom Room settings
* `listDigitalSignageContent` - List digital signage contents
* `listZrDevices` - List Zoom Room devices
* `listZoomRooms` - List Zoom Rooms
* `manageE911signage` - Update E911 digital signage
* `updateRoomProfile` - Update a Zoom Room profile
* `updateZrSettings` - Update Zoom Room settings

### Rooms Account

* `getZrAccountProfile` - Get Zoom Room account profile
* `getZrAccountSettings` - Get Zoom Room account settings
* `updateZrAccProfile` - Update Zoom Room account profile
* `updateZoomRoomAccSettings` - Update Zoom Room account settings

### Rooms Devices

* `changeZoomRoomsAppVersion` - Change Zoom Rooms' app version

### Rooms Location

* `addAzrLocation` - Add a location
* `changeParentLocation` - Change the assigned parent location
* `getZrLocationProfile` - Get Zoom Room location profile
* `getZrLocationSettings` - Get location settings
* `getZrLocationStructure` - Get Zoom Room location structure
* `listZrLocations` - List Zoom Room locations
* `updateZrLocationProfile` - Update Zoom Room location profile
* `updateZrLocationSettings` - Update location settings
* `updateZoomRoomsLocationStructure` - Update Zoom Rooms location structure

### SIP Connected Audio

* `addCalloutCountries` - Add internal call-out countries
* `addInternalNumbers` - Add internal numbers
* `assignSipConfig` - Assign SIP trunk configuration
* `assignSipTrunks` - Assign SIP trunks
* `assignSipTrunkNumbers` - Assign numbers
* `deleteAllSipNumbers` - Delete all numbers
* `deleteInternalCallOutCountry` - Delete internal call-out country
* `deleteInternalNumber` - Delete an internal number
* `deleteSipTrunk` - Delete a SIP trunk
* `listInternalCalloutCountries` - List internal call-out countries
* `listInternalNumbers` - List internal numbers
* `listSipTrunks` - List SIP trunks
* `listSipTrunkNumbers` - List SIP trunk numbers

### SIP Phone

* `createSipPhone` - Enable SIP phone
* `deleteSipPhone` - Delete SIP phone
* `listSipPhones` - List SIP phones
* `updateSipPhone` - Update SIP phone

### TSP

* `tsp` - Get account's TSP information
* `tspUpdate` - Update account's TSP information
* `tspUrlUpdate` - Set global dial-in URL for a TSP user
* `userTsp` - Get a user's TSP account
* `userTspCreate` - Add a user's TSP account
* `userTspDelete` - Delete a user's TSP account
* `userTspUpdate` - Update a TSP account
* `userTsPs` - List user's TSP accounts

### TrackingField

* `trackingfieldCreate` - Create a tracking field
* `trackingfieldDelete` - Delete a tracking field
* `trackingfieldGet` - Get a tracking field
* `trackingfieldList` - List tracking fields
* `trackingfieldUpdate` - Update a tracking field

### Users

* `delUserVb` - Delete virtual background files
* `switchUserAccount` - Switch a user's account
* `updatePresenceStatus` - Update a user's presence status
* `uploadVBuser` - Upload virtual background files
* `user` - Get a user
* `userAssistantCreate` - Add assistants
* `userAssistantDelete` - Delete a user assistant
* `userAssistants` - List user assistants
* `userAssistantsDelete` - Delete user assistants
* `userCreate` - Create users
* `userDelete` - Delete a user
* `userEmail` - Check a user email
* `userEmailUpdate` - Update a user's email
* `userPassword` - Update a user's password
* `userPermission` - Get user permissions
* `userPicture` - Upload a user's profile picture
* `userSsoTokenDelete` - Revoke a user's SSO token
* `userSchedulerDelete` - Delete a scheduler
* `userSchedulers` - List user schedulers
* `userSchedulersDelete` - Delete user schedulers
* `userSettings` - Get user settings
* `userSettingsUpdate` - Update user settings
* `userStatus` - Update user status
* `userToken` - Get a user token
* `userUpdate` - Update a user
* `userVanityName` - Check a user's PM room
* `userZak` - Get user's ZAK
* `users` - List users

### Webinars

* `addBatchWebinarRegistrants` - Perform batch registration
* `deleteWebinarRegistrant` - Delete a webinar registrant
* `getTrackingSources` - Get webinar tracking sources
* `listPastWebinarPollResults` - List past webinar poll results
* `listPastWebinarQa` - List Q&A of past webinar
* `listWebinarParticipants` - List webinar participants
* `listWebinarTemplates` - List webinar templates
* `pastWebinars` - List past webinar instances
* `webinar` - Get a webinar
* `webinarAbsentees` - Get webinar absentees
* `webinarCreate` - Create a webinar
* `webinarDelete` - Delete a webinar
* `webinarPanelistCreate` - Add panelists
* `webinarPanelistDelete` - Remove a panelist
* `webinarPanelists` - List panelists
* `webinarPanelistsDelete` - Remove panelists
* `webinarPollCreate` - Create a webinar's poll
* `webinarPollDelete` - Delete a webinar poll
* `webinarPollGet` - Get a webinar poll
* `webinarPollUpdate` - Update a webinar poll
* `webinarPolls` - List a webinar's polls 
* `webinarRegistrantCreate` - Add a webinar registrant
* `webinarRegistrantGet` - Get a webinar registrant
* `webinarRegistrantQuestionUpdate` - Update registration questions
* `webinarRegistrantStatus` - Update registrant's status
* `webinarRegistrants` - List webinar registrants
* `webinarRegistrantsQuestionsGet` - List registration questions
* `webinarStatus` - Update webinar status
* `webinarUpdate` - Update a webinar
* `webinars` - List webinars

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
