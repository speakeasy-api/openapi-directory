# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/zoom.us/2.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        o_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
)


req = operations.AccountRequest(
    account_id="corrupti",
)
    
res = s.accounts.account(req)

if res.account_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accounts

* `account` - Get sub account details
* `account_create` - Create a sub account
* `account_disassociate` - Disassociate a sub account
* `account_managed_domain` - Get managed domains
* `account_options_update` - Update options
* `account_settings` - Get settings
* `account_settings_update` - Update settings
* `account_trusted_domain` - Get trusted domains
* `accounts` - List sub accounts
* `del_vb` - Delete virtual background files
* `get_account_lock_settings` - Get locked settings
* `update_account_lock_settings` - Update locked settings
* `update_account_owner` - Update the account owner
* `upload_vb` - Upload virtual background files

### billing

* `account_billing` - Get billing information
* `account_billing_invoices` - List billing invoices
* `account_billing_update` - Update billing information
* `account_plan_addon_cancel` - Cancel additional plans
* `account_plan_addon_create` - Subscribe additional plan
* `account_plan_addon_update` - Update an additional plan
* `account_plan_base_delete` - Cancel a base plan
* `account_plan_base_update` - Update a base plan
* `account_plan_create` - Subscribe plans
* `account_plans` - Get plan Information
* `download_invoice_pdf` - Download an invoice file
* `get_account_billing_invoice` - Get invoice details
* `get_plan_usage` - Get plan usage

### chat_channels

* `create_channel` - Create a channel
* `delete_user_level_channel` - Delete a channel
* `get_channels` - List user's channels
* `get_user_level_channel` - Get a channel
* `join_channel` - Join a channel
* `leave_channel` - Leave a channel
* `remove_a_user_level_channel_member` - Remove a member
* `update_user_level_channel` - Update a channel

### chat_channels_account_level

* `delete_channel` - Delete a channel
* `get_channel` - Get a channel
* `invite_channel_members` - Invite channel members
* `list_channel_members` - List channel members
* `remove_a_channel_member` - Remove a member
* `update_channel` - Update a channel

### chat_messages

* `delete_chat_message` - Delete a message
* `edit_message` - Update a message
* `get_chat_messages` - List user's chat messages
* `senda_chat_message` - Send a chat message

### chatbot_messages

* `delete_a_chatbot_message` - Delete a chatbot message
* `edit_chatbot_message` - Edit a chatbot message
* `sendchatbot` - Send chatbot messages

### cloud_recording

* `get_account_cloud_recording` - List recordings of an account
* `list_archived_files` - List archived files
* `meeting_recording_registrant_create` - Create a recording registrant
* `meeting_recording_registrant_status` - Update registrant's status
* `meeting_recording_registrants` - List recording registrants
* `recording_delete` - Delete meeting recordings
* `recording_delete_one` - Delete a meeting recording file
* `recording_get` - Get meeting recordings
* `recording_registrant_question_update` - Update registration questions
* `recording_registrants_questions_get` - Get registration questions
* `recording_setting_update` - Get meeting recording settings
* `recording_settings_update` - Update meeting recording settings
* `recording_status_update` - Recover meeting recordings
* `recording_status_update_one` - Recover a single recording
* `recordings_list` - List all recordings

### common_area_phones

* `add_common_area_phone` - Add a common area phone
* `delete_common_area_phone` - Delete a common area phone
* `get_a_common_area_phone` - Get common area phone details
* `list_common_area_phones` - List common area phones
* `update_common_area_phone` - Update common area phone

### contacts

* `get_user_contact` - Get user's contact details
* `get_user_contacts` - List user's contacts
* `search_company_contacts` - Search company contacts

### dashboards

* `dashboard_crc` - Get CRC port usage
* `dashboard_client_feedback` - List Zoom meetings client feedback
* `dashboard_client_feedback_detail` - Get zoom meetings client feedback
* `dashboard_im` - Get IM metrics
* `dashboard_issue_detail_zoom_room` - Get issues of Zoom Rooms
* `dashboard_issue_zoom_room` - Get top 25 Zoom Rooms with issues
* `dashboard_meeting_detail` - Get meeting details
* `dashboard_meeting_participant_qos` - Get meeting participant QoS
* `dashboard_meeting_participant_share` - Get sharing/recording details
* `dashboard_meeting_participants` - List meeting participants
* `dashboard_meeting_participants_qos` - List meeting participants QoS
* `dashboard_meetings` - List meetings
* `dashboard_webinar_detail` - Get webinar details
* `dashboard_webinar_participant_qos` - Get webinar participant QoS
* `dashboard_webinar_participant_share` - Get sharing/recording details
* `dashboard_webinar_participants` - Get webinar participants
* `dashboard_webinar_participants_qos` - List webinar participant QoS
* `dashboard_webinars` - List webinars
* `dashboard_zoom_room` - Get Zoom Rooms details
* `dashboard_zoom_room_issue` - Get top 25 issues of Zoom Rooms
* `dashboard_zoom_rooms` - List Zoom Rooms
* `get_call_log_metrics_details` - Get call details from call log
* `get_call_qo_s` - Get call QoS
* `list_call_logs_metrics` - List call logs
* `list_meeting_satisfaction` - List client meeting satisfaction
* `participant_feedback` - Get post meeting feedback
* `participant_webinar_feedback` - Get post webinar feedback

### deprecated_api_endpoints

* `list_past_meeting_files` - List past meeting's files
* `list_past_webinar_files` - List past webinar files

### devices

* `device_create` - Create a H.323/SIP device
* `device_delete` - Delete a H.323/SIP device
* `device_list` - List H.323/SIP devices
* `device_update` - Update a H.323/SIP device

### groups

* `del_group_vb` - Delete virtual background files
* `get_group_lock_settings` - Get locked settings
* `get_group_settings` - Get a group's settings
* `group` - Get a group
* `group_create` - Create a group
* `group_delete` - Delete a group
* `group_locked_settings` - Update locked settings
* `group_members` - List group members 
* `group_members_create` - Add group members
* `group_members_delete` - Delete a group member
* `group_update` - Update a group
* `groups` - List groups
* `update_a_group_member` - Update a group member
* `update_group_settings` - Update a group's settings
* `upload_group_vb` - Upload virtual background files

### im_chat

* `im_chat_messages` - Get IM chat messages
* `im_chat_sessions` - Get IM chat sessions
* `listimmessages` - Get user’s IM messages
* `sendimmessages` - Send IM messages

### im_groups

* `im_group` - Retrieve an IM directory group
* `im_group_create` - Create an IM directory group
* `im_group_delete` - Delete an IM directory group
* `im_group_members` - List IM directory group members
* `im_group_members_create` - Add IM directory group members
* `im_group_members_delete` - Delete an IM directory group member
* `im_group_update` - Update an IM directory group
* `im_groups` - List IM directory groups

### meetings

* `create_batch_polls` - Perform batch poll creation
* `get_live_stream_details` - Get live stream details
* `in_meeting_recording_control` - Use in-Meeting recording controls
* `list_meeting_templates` - List meeting templates
* `list_past_meeting_polls` - List past meeting's poll results
* `meeting` - Get a meeting
* `meeting_create` - Create a meeting
* `meeting_delete` - Delete a meeting
* `meeting_invitation` - Get meeting invitation
* `meeting_live_stream_status_update` - Update Live Stream Status
* `meeting_live_stream_update` - Update a live stream
* `meeting_poll_create` - Create a meeting poll
* `meeting_poll_delete` - Delete a meeting poll
* `meeting_poll_get` - Get a meeting poll
* `meeting_poll_update` - Update a meeting poll
* `meeting_polls` - List meeting polls
* `meeting_registrant_create` - Add meeting registrant
* `meeting_registrant_question_update` - Update registration questions
* `meeting_registrant_status` - Update registrant's status
* `meeting_registrants` - List meeting registrants
* `meeting_registrants_questions_get` - List registration questions 
* `meeting_status` - Update meeting status
* `meeting_update_json` - Update a meeting
* `meeting_update_multipart` - Update a meeting
* `meetingregistrantdelete` - Delete a meeting registrant
* `meetings` - List meetings
* `past_meeting_details` - Get past meeting details
* `past_meeting_participants` - Get past meeting participants
* `past_meetings` - List ended meeting instances

### pac

* `user_pa_cs` - List a user's PAC accounts

### phone

* `unassign_phone_number` - Unassign phone number
* `account_call_logs` - Get account's call logs
* `add_byoc_number` - Add BYOC phone numbers
* `add_setting_template` - Add a setting template
* `add_user_setting` - Set up shared access
* `assign_calling_plan` - Assign calling plan to a user
* `assign_phone_number` - Assign phone number to user
* `change_main_company_number` - Change main company number
* `delete_call_log` - Delete a user's call log
* `delete_user_setting` - Remove shared access
* `delete_voicemail` - Delete a voicemail
* `get_phone_number_details` - Get phone number details
* `get_phone_recordings` - Get call recordings
* `get_setting_template` - Get setting template details
* `list_account_phone_numbers` - List phone numbers
* `list_byocsip_trunk` - List BYOC SIP trunks
* `list_calling_plans` - List calling plans
* `list_phone_users` - List phone users
* `list_setting_templates` - List setting templates
* `phone_user` - Get user's profile
* `phone_user_call_logs` - Get user's call logs
* `phone_user_recordings` - Get user's recordings
* `phone_user_settings` - Get user's settings
* `phone_user_voice_mails` - Get user's voicemails
* `post_phone_sip_trunk` - Assign SIP trunks
* `set_up_account` - Set up a Zoom Phone account
* `unassign_calling_plan` - Unassign user's calling plan
* `update_phone_number_details` - Update phone number details
* `update_phone_sip_trunk` - Update SIP trunk details
* `update_phone_settings` - Update BYOC settings
* `update_setting_template` - Update a setting template
* `update_user_profile` - Update user's profile
* `update_user_setting` - Update shared access

### phone_auto_receptionists

* `add_auto_receptionist` - Add an auto receptionist
* `assign_phone_numbers_auto_receptionist` - Assign phone numbers
* `unassign_a_phone_num_auto_receptionist` - Unassign a phone number
* `unassign_all_phone_nums_auto_receptionist` - Unassign all phone numbers
* `update_auto_receptionist` - Update auto receptionist details

### phone_blocked_list

* `add_anumber_to_blocked_list` - Create a blocked list
* `delete_a_blocked_list` - Delete a blocked list
* `get_a_blocked_list` - Get blocked list details
* `list_blocked_list` - List blocked lists
* `update_blocked_list` - Update a blocked list

### phone_call_queues

* `add_members_to_call_queue` - Add members to a call queue
* `assign_phone_to_call_queue` - Assign numbers to a call queue
* `change_call_queue_manager` - Change call queue manager
* `create_call_queue` - Create a call queue
* `delete_a_call_queue` - Delete a call queue
* `get_a_call_queue` - Get call queue details
* `get_call_queue_recordings` - Get call queue recordings
* `list_call_queues` - List call queues
* `un_assign_phone_num_call_queue` - Unassign a phone number
* `unassign_a_phone_num_call_queue` - Unassign all phone numbers
* `unassign_all_members` - Unassign all members
* `unassign_member_from_call_queue` - Unassign a member
* `update_call_queue` - Update call queue details

### phone_devices

* `add_phone_device` - Add a device
* `delete_a_device` - Delete a device
* `get_a_device` - Get device details
* `list_phone_devices` - List devices
* `update_a_device` - Update a device

### phone_reports

* `get_ps_operation_logs` - Get operation logs report

### phone_shared_line_groups

* `add_members_to_shared_line_group` - Add members to a shared line group
* `assign_phone_numbers_slg` - Assign phone numbers
* `create_a_shared_line_group` - Create a shared line group
* `delete_a_member_slg` - Unassign a member from a shared line group
* `delete_a_phone_number_slg` - Unassign a phone number
* `delete_a_shared_line_group` - Delete a shared line group
* `delete_members_of_slg` - Unassign members of a shared line group
* `get_a_shared_line_group` - Get a shared line group
* `list_shared_line_groups` - List shared line groups
* `update_a_shared_line_group` - Update a shared line group

### phone_site

* `create_phone_site` - Create a phone site
* `delete_phone_site` - Delete a phone site
* `get_a_site` - Get phone site details
* `list_phone_sites` - List phone sites
* `update_site_details` - Update phone site details

### reports

* `report_cloud_recording` - Get cloud recording usage report
* `report_daily` - Get daily usage report
* `report_meeting_details` - Get meeting detail reports
* `report_meeting_participants` - Get meeting participant reports
* `report_meeting_polls` - Get meeting poll reports
* `report_meetings` - Get meeting reports
* `report_operation_logs` - Get operation logs report
* `report_sign_in_sign_out_activities` - Get sign In / sign out activity report
* `report_telephone` - Get telephone reports
* `report_users` - Get active/inactive host reports
* `report_webinar_details` - Get webinar detail reports
* `report_webinar_participants` - Get webinar participant reports
* `report_webinar_polls` - Get webinar poll reports
* `report_webinar_qa` - Get webinar Q&A report

### roles

* `add_role_members` - Assign a role
* `create_role` - Create a role
* `delete_role` - Delete a role
* `get_role_information` - Get role information
* `role_member_delete` - Unassign a role
* `role_members` - List members in a role
* `roles` - List roles
* `update_role` - Update role information

### rooms

* `add_a_room` - Add a Zoom Room
* `change_zr_location` - Change a Zoom Room's location
* `check_in_rooms` - Check-in or check-out of a Zoom Room
* `delete_a_zoom_room` - Delete a Zoom Room
* `get_zr_profile` - Get Zoom Room profile
* `get_zr_settings` - Get Zoom Room settings
* `list_digital_signage_content` - List digital signage contents
* `list_zr_devices` - List Zoom Room devices
* `list_zoom_rooms` - List Zoom Rooms
* `manage_e911signage` - Update E911 digital signage
* `update_room_profile` - Update a Zoom Room profile
* `update_zr_settings` - Update Zoom Room settings

### rooms_account

* `get_zr_account_profile` - Get Zoom Room account profile
* `get_zr_account_settings` - Get Zoom Room account settings
* `update_zr_acc_profile` - Update Zoom Room account profile
* `update_zoom_room_acc_settings` - Update Zoom Room account settings

### rooms_devices

* `change_zoom_rooms_app_version` - Change Zoom Rooms' app version

### rooms_location

* `add_azr_location` - Add a location
* `change_parent_location` - Change the assigned parent location
* `get_zr_location_profile` - Get Zoom Room location profile
* `get_zr_location_settings` - Get location settings
* `get_zr_location_structure` - Get Zoom Room location structure
* `list_zr_locations` - List Zoom Room locations
* `update_zr_location_profile` - Update Zoom Room location profile
* `update_zr_location_settings` - Update location settings
* `update_zoom_rooms_location_structure` - Update Zoom Rooms location structure

### sip_connected_audio

* `add_callout_countries` - Add internal call-out countries
* `add_internal_numbers` - Add internal numbers
* `assign_sip_config` - Assign SIP trunk configuration
* `assign_sip_trunks` - Assign SIP trunks
* `assign_sip_trunk_numbers` - Assign numbers
* `delete_all_sip_numbers` - Delete all numbers
* `delete_internal_call_out_country` - Delete internal call-out country
* `delete_internal_number` - Delete an internal number
* `delete_sip_trunk` - Delete a SIP trunk
* `list_internal_callout_countries` - List internal call-out countries
* `list_internal_numbers` - List internal numbers
* `list_sip_trunks` - List SIP trunks
* `list_sip_trunk_numbers` - List SIP trunk numbers

### sip_phone

* `create_sip_phone` - Enable SIP phone
* `delete_sip_phone` - Delete SIP phone
* `list_sip_phones` - List SIP phones
* `update_sip_phone` - Update SIP phone

### tsp

* `tsp` - Get account's TSP information
* `tsp_update` - Update account's TSP information
* `tsp_url_update` - Set global dial-in URL for a TSP user
* `user_tsp` - Get a user's TSP account
* `user_tsp_create` - Add a user's TSP account
* `user_tsp_delete` - Delete a user's TSP account
* `user_tsp_update` - Update a TSP account
* `user_ts_ps` - List user's TSP accounts

### tracking_field

* `trackingfield_create` - Create a tracking field
* `trackingfield_delete` - Delete a tracking field
* `trackingfield_get` - Get a tracking field
* `trackingfield_list` - List tracking fields
* `trackingfield_update` - Update a tracking field

### users

* `del_user_vb` - Delete virtual background files
* `switch_user_account` - Switch a user's account
* `update_presence_status` - Update a user's presence status
* `upload_v_buser` - Upload virtual background files
* `user` - Get a user
* `user_assistant_create` - Add assistants
* `user_assistant_delete` - Delete a user assistant
* `user_assistants` - List user assistants
* `user_assistants_delete` - Delete user assistants
* `user_create` - Create users
* `user_delete` - Delete a user
* `user_email` - Check a user email
* `user_email_update` - Update a user's email
* `user_password` - Update a user's password
* `user_permission` - Get user permissions
* `user_picture` - Upload a user's profile picture
* `user_sso_token_delete` - Revoke a user's SSO token
* `user_scheduler_delete` - Delete a scheduler
* `user_schedulers` - List user schedulers
* `user_schedulers_delete` - Delete user schedulers
* `user_settings` - Get user settings
* `user_settings_update` - Update user settings
* `user_status` - Update user status
* `user_token` - Get a user token
* `user_update` - Update a user
* `user_vanity_name` - Check a user's PM room
* `user_zak` - Get user's ZAK
* `users` - List users

### webinars

* `add_batch_webinar_registrants` - Perform batch registration
* `delete_webinar_registrant` - Delete a webinar registrant
* `get_tracking_sources` - Get webinar tracking sources
* `list_past_webinar_poll_results` - List past webinar poll results
* `list_past_webinar_qa` - List Q&A of past webinar
* `list_webinar_participants` - List webinar participants
* `list_webinar_templates` - List webinar templates
* `past_webinars` - List past webinar instances
* `webinar` - Get a webinar
* `webinar_absentees` - Get webinar absentees
* `webinar_create` - Create a webinar
* `webinar_delete` - Delete a webinar
* `webinar_panelist_create` - Add panelists
* `webinar_panelist_delete` - Remove a panelist
* `webinar_panelists` - List panelists
* `webinar_panelists_delete` - Remove panelists
* `webinar_poll_create` - Create a webinar's poll
* `webinar_poll_delete` - Delete a webinar poll
* `webinar_poll_get` - Get a webinar poll
* `webinar_poll_update` - Update a webinar poll
* `webinar_polls` - List a webinar's polls 
* `webinar_registrant_create` - Add a webinar registrant
* `webinar_registrant_get` - Get a webinar registrant
* `webinar_registrant_question_update` - Update registration questions
* `webinar_registrant_status` - Update registrant's status
* `webinar_registrants` - List webinar registrants
* `webinar_registrants_questions_get` - List registration questions
* `webinar_status` - Update webinar status
* `webinar_update_json` - Update a webinar
* `webinar_update_multipart` - Update a webinar
* `webinars` - List webinars
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
